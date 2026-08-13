# Move the backend from external Supabase to Lovable Cloud

Goal: own the backend inside Lovable (billing and ownership), instead of the external Supabase project `zfkspavuxvdtofgdrrkv`.

## The constraint

Lovable Cloud cannot be switched on for a project that is already wired to an external Supabase instance. Cloud provisions its own backend, so the move happens in a **new Lovable project** that starts on Cloud, with this project's code and schema recreated there.

## What has to move

| Item | Detail |
| --- | --- |
| Tables (7) | `contact_submissions`, `h2contact_submissions`, `cv_submissions`, `lead_qualifications`, `newsletter_subscriptions`, `webinar_registrations`, `co_create_assessments` |
| DB functions (2) | `is_valid_cv_path`, `is_valid_cv_upload` |
| RLS policies | Public insert on all forms, service-role-only reads, CV email/token scoping |
| Storage | Private `cv-uploads` bucket + its access policies |
| Edge functions (2) | `create-cv-storage`, `validate-form-input` |
| Secrets | `RESEND_API_KEY`; GA/GSC connector keys re-created via Connectors |
| Existing rows | Form submissions collected so far, plus uploaded CV files |

## Steps

1. **Create the new project on Lovable Cloud** — you create a fresh Lovable project with Cloud enabled (no external Supabase connection).
2. **Copy the frontend** — the whole `src/`, `public/`, `index.html`, config and content files move across unchanged, except the Supabase client, which Cloud regenerates with the new URL and key.
3. **Recreate the schema** — one migration in the new project rebuilding all 7 tables with identical columns, defaults, GRANTs, RLS policies, and both database functions.
4. **Recreate storage** — private `cv-uploads` bucket with the same 10 MB limit, PDF/DOC MIME allowlist, and the `upload_token` path policy.
5. **Recreate edge functions** — `validate-form-input` ported as-is; `create-cv-storage` is only needed if you still want runtime bucket creation, otherwise it is replaced by the migration in step 4.
6. **Re-add secrets and connectors** — Resend key added as a Cloud secret; Google Analytics and Search Console reconnected through Connectors.
7. **Export and import data** — export existing rows from the Supabase dashboard as CSV and import them into the new tables; download and re-upload CV files from the `cv-uploads` bucket. This step is manual on your side (I can't reach the old project's data).
8. **Re-verify SEO/analytics and repoint the domain** — republish, confirm GA fires, then move `lemonhq.co.uk` (currently served via Netlify) to the new deployment.
9. **Decommission** — once verified, pause or delete the old Supabase project so it stops billing.

## What you should know before deciding

- **Downtime window**: between the data export and the DNS/host switch, submissions could land in the old database. Best done in one sitting, or accept a short freeze on form submissions.
- **Chat history does not carry over** — the new project starts fresh; this project's history stays here for reference.
- **Netlify**: your custom domain currently points at Netlify serving a stale build. The move is a good moment to switch to Lovable hosting, which removes the recurring stale-deploy problem we hit with the CSP fix.
- **Cost**: Cloud usage is credit-based with a free monthly allowance; a low-traffic marketing site with form submissions typically sits well inside it.
- Nothing here touches the current live site until step 8.

## What I can do vs. what you do

- You: create the new project, export/import the data and CV files, repoint the domain, delete the old Supabase project.
- Me (in the new project): recreate schema, RLS, storage config, edge functions, and wire the frontend to the new backend.
