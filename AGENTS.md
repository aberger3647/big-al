# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **React 19 + Vite 6 + TypeScript** marketing site ("Big Al Strength & Conditioning"). There is only one service to run: the Vite dev server.

- Package manager: use **`npm`** (Node 22). A `bun.lock` is also present but `bun` is not installed; `package-lock.json` + `npm` is the supported path here.
- Commands are the standard Vite scripts in `package.json`: `dev` (Vite dev server on http://localhost:5173), `lint` (`eslint .`), `build`, and `preview`. Run them via `npm run <script>`.
- `eslint.config.ts` is a TypeScript flat config, which ESLint 9 loads via `jiti`. It requires `jiti` v2 (the transitive v1 pulled in by other deps breaks lint), so `jiti@^2` is pinned in `devDependencies`.
- `VITE_*` env vars are read at **build time**. `VITE_SUPABASE_URL` is provided as a secret and is the only backend dependency; the site loads and is fully navigable without it (only the contact form is affected).
- The contact form ("Join the Waitlist" on `/contact`) POSTs to the real production Supabase edge function at `${VITE_SUPABASE_URL}/functions/v1/submit-inquiry`, which creates a real lead and emails the owner via Resend. To test the form's happy path **without** hitting production, start a local mock that returns `{"success":true}` and run the dev server with `VITE_SUPABASE_URL` overridden to it, e.g. `VITE_SUPABASE_URL=http://localhost:8787 npm run dev`.
- Blog pages (`/blog`, `/blog/:slug`) read from the hosted Sanity CMS and need internet access; the rest of the site does not depend on Sanity.
