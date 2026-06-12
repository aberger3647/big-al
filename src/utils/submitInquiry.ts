// Posts a contact-form submission to the self-hosted Supabase `submit-inquiry`
// edge function. Mirrors moongazing's src/utils/emailService.ts: a plain fetch,
// no @supabase/supabase-js dependency (the form is the app's only backend call).
// Config comes from build-time VITE_* env vars.
export interface InquiryPayload {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  goals: string;
  interests: string;
  message: string;
  "bot-field": string;
}

export async function submitInquiry(
  payload: InquiryPayload,
): Promise<{ success: boolean; error?: string }> {
  const baseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  if (!baseUrl) {
    console.error("submitInquiry: VITE_SUPABASE_URL is not set");
    return { success: false, error: "Form is not configured" };
  }
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  try {
    const response = await fetch(`${baseUrl}/functions/v1/submit-inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Sent when available so the request also satisfies an API gateway that
        // requires an apikey; harmless when the function is fully public.
        ...(anonKey
          ? { apikey: anonKey, Authorization: `Bearer ${anonKey}` }
          : {}),
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { success: true };
    }

    const data = await response.json().catch(() => null);
    return { success: false, error: data?.error ?? "Submission failed" };
  } catch (err) {
    console.error("submitInquiry error:", err);
    return { success: false, error: "Network error" };
  }
}
