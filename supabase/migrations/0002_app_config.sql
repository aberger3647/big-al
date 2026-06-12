-- Service-role-only key/value config for the submit-inquiry edge function.
-- Holds the Resend API key, the notification recipient, and the from-address,
-- so the function doesn't need new env vars on the shared edge container
-- (which can't be added without a stack-wide Dokploy redeploy). RLS is enabled
-- with no policies, so only the service role (the edge function) can read it.
-- Values are inserted out-of-band (not committed) — the Resend key is a secret.
create table if not exists public.app_config (
  key        text primary key,
  value      text not null,
  updated_at timestamptz not null default now()
);

alter table public.app_config enable row level security;
