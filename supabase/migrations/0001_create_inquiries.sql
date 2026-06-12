-- Contact-form inquiries submitted from bigalstrength.com.
-- Rows are written only by the `submit-inquiry` edge function using the service
-- role (which bypasses RLS), so no anon/auth policies are granted below.
create table if not exists public.inquiries (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  first_name  text not null,
  last_name   text not null,
  email       text not null,
  phone       text,
  goals       text,
  interests   text,
  message     text,
  source      text not null default 'website'
);

alter table public.inquiries enable row level security;

-- Intentionally no policies: with RLS enabled and no policy, the anon and
-- authenticated roles get zero access. Only the service-role key (used by the
-- edge function) can read/write, so there is no public surface to spam.
