# iPad Tailwind Starter (GitHub Pages + Supabase-ready)

This starter lets you launch a website entirely from an iPad using Tailwind via CDN and GitHub Pages hosting. It also includes an optional contact form that can post to Supabase.

## Quick start
1. Commit these files (Source Control → stage all → commit → push).
2. Turn on GitHub Pages: Repo → Settings → Pages → Source: Deploy from branch → Branch: main (root) → Save.
3. Your site appears at https://<username>.github.io/<repo>/.

## Custom domain
- Settings → Pages → Custom domain: `www.yourdomain.com` (creates CNAME).
- DNS: add CNAME `www` → `<username>.github.io`.
- After it resolves, enable Enforce HTTPS.

## Supabase form
- Edit `js/supabase-contact.js` and set `SUPABASE_URL` + `SUPABASE_ANON_KEY`.
- Create table `contact_messages` (id uuid default gen_random_uuid(), created_at timestamptz default now(), name text, email text, message text).
- Enable RLS and add a minimal insert policy for anonymous users (only needed columns). Consider CAPTCHA or an edge function for production.

## Upgrade Tailwind later
For optimized builds and theming, use Tailwind CLI in Codespaces and compile to a single CSS file.
