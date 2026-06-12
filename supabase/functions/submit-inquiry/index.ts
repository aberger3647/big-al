// Supabase Edge Function: submit-inquiry
//
// Receives a contact-form submission from the bigalstrength.com site, stores it
// in the `inquiries` table (service role, bypasses RLS), and emails the owner a
// notification via Resend. Deployed into the same self-hosted edge-runtime
// container that moongazing uses, so it must NOT rely on the shared
// `RESEND_API_KEY` (that key's account can't send from bigalstrength.com).
//
// Email config (Resend key / recipient / from-address) is resolved per request,
// preferring INQUIRY_* env vars when present and otherwise reading the
// service-role-only `public.app_config` table — this avoids having to add new
// env vars to the shared edge container (which can't be done without a
// stack-wide Dokploy redeploy).
import { createClient } from "npm:@supabase/supabase-js@2.39.2";
import { Resend } from "npm:resend";

// The browser POSTs cross-origin (bigalstrength.com -> supabase.csbod.com).
// Lock the origin by setting ALLOWED_ORIGIN; defaults to "*".
const corsHeaders = {
  "Access-Control-Allow-Origin": Deno.env.get("ALLOWED_ORIGIN") ?? "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

// Service-role client (URL + key are already in the container env). Fail closed
// at request time so a missing var returns 500 instead of crashing the worker.
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const supabase = supabaseUrl && serviceRoleKey
  ? createClient(supabaseUrl, serviceRoleKey)
  : null;

const asString = (v: unknown) => (typeof v === "string" ? v.trim() : "");

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

// Resolve email config: env vars win (set them in Dokploy to override), then
// fall back to the `public.app_config` table (service-role only via RLS).
async function loadEmailConfig(db: ReturnType<typeof createClient>) {
  let resendKey = Deno.env.get("INQUIRY_RESEND_API_KEY") ?? "";
  let notifyTo = Deno.env.get("INQUIRY_NOTIFICATION_TO") ?? "";
  let fromEmail = Deno.env.get("INQUIRY_FROM_EMAIL") ?? "";

  if (!resendKey || !notifyTo || !fromEmail) {
    const { data, error } = await db
      .from("app_config")
      .select("key,value")
      .in("key", ["resend_api_key", "notification_to", "from_email"]);
    if (error) console.error("submit-inquiry: app_config read failed", error);
    const map = Object.fromEntries(
      (data ?? []).map((r) => [r.key as string, r.value as string]),
    );
    resendKey ||= map.resend_api_key ?? "";
    notifyTo ||= map.notification_to ?? "";
    fromEmail ||= map.from_email ?? "";
  }

  return {
    resendKey,
    notifyTo,
    fromEmail: fromEmail || "Big Al Strength <forms@bigalstrength.com>",
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }
  if (!supabase) {
    return json({ error: "Service not configured" }, 500);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  // Honeypot: humans never fill `bot-field`. Pretend success, do nothing.
  if (asString(body["bot-field"]) !== "") {
    return json({ ok: true });
  }

  const firstName = asString(body.fname);
  const lastName = asString(body.lname);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const goals = asString(body.goals);
  const interests = asString(body.interests);
  const message = asString(body.message);

  if (!firstName || !lastName || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return json({ error: "Missing or invalid required fields" }, 400);
  }

  const { error: insertError } = await supabase.from("inquiries").insert({
    first_name: firstName,
    last_name: lastName,
    email,
    phone: phone || null,
    goals: goals || null,
    interests: interests || null,
    message: message || null,
  });

  if (insertError) {
    console.error("submit-inquiry: insert failed", insertError);
    return json({ error: "Could not save inquiry" }, 500);
  }

  // Best-effort owner notification. The row is already saved, so we never fail
  // the submission (and lose the lead) just because the email didn't go out.
  try {
    const cfg = await loadEmailConfig(supabase);
    if (cfg.resendKey && cfg.notifyTo) {
      const row = (label: string, value: string) =>
        value
          ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${label}</td><td style="padding:4px 0;white-space:pre-wrap">${
            escapeHtml(value)
          }</td></tr>`
          : "";
      const html = `
        <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#111">
          <h2 style="margin:0 0 12px">New inquiry from the website</h2>
          <table style="border-collapse:collapse">
            ${row("Name", `${firstName} ${lastName}`)}
            ${row("Email", email)}
            ${row("Phone", phone)}
            ${row("Goals", goals)}
            ${row("Interests", interests)}
            ${row("Message", message)}
          </table>
        </div>`;
      const { error: emailError } = await new Resend(cfg.resendKey).emails.send({
        from: cfg.fromEmail,
        to: [cfg.notifyTo],
        replyTo: email,
        subject: `New inquiry from ${firstName} ${lastName}`,
        html,
      });
      if (emailError) console.error("submit-inquiry: resend error", emailError);
    } else {
      console.warn(
        "submit-inquiry: email skipped (no resend key or recipient configured)",
      );
    }
  } catch (err) {
    console.error("submit-inquiry: email step threw", err);
  }

  return json({ ok: true });
});
