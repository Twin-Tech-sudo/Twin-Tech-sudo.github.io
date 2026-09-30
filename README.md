# Twin Tech-sudo

Standalone, multi-page marketing site and secure content Studio for Twin Tech-sudo. This project is intentionally isolated from the BOQExtract application in the parent workspace.

## What ships

- Pre-rendered Astro pages with React islands for the interactive homepage and Studio
- Seven dedicated UK service landing pages
- BOQExtract and Mack's Packs case studies with their product logos
- Process, about, contact, privacy and custom 404 pages
- Three long-form search articles plus RSS
- Per-page titles, descriptions, canonicals, social cards and structured data
- Generated sitemap and crawl rules; `/studio/` is excluded and `noindex`
- Supabase Auth, row-level security, media storage, draft records and immutable release foundations
- GitHub Pages deployment on every `main` push or Studio workflow dispatch

## Requirements

- Node.js 22.12 or newer
- npm 10 or newer

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:5180/`. The private dashboard is at `http://localhost:5180/studio/`.

Validate a production build with:

```bash
npm run typecheck
npm run build
npm run preview
```

## Activate Twin Studio

The public site works without Supabase. The Studio remains securely locked until a Supabase project is configured; there is deliberately no browser PIN or insecure fallback.

1. Create a free Supabase project.
2. Run `supabase/migrations/001_studio.sql` in its SQL editor.
3. Create the owner user in Supabase Authentication.
4. Insert that user's UUID into `public.profiles` as documented at the bottom of the migration.
5. Enable TOTP MFA in Supabase and enrol the owner from Studio settings.
6. Copy `.env.example` to `.env` and set `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`.
7. Deploy `supabase/functions/publish` and add its documented secrets: `SUPABASE_SERVICE_ROLE_KEY`, `GITHUB_OWNER`, `GITHUB_REPO`, and `GITHUB_DEPLOY_TOKEN`.
8. Add the two public Supabase values as GitHub Actions repository secrets with the same names.

The publish function verifies the authenticated user is an owner, marks the content published, saves an immutable release snapshot and dispatches the GitHub Pages workflow. A failed build leaves the previous Pages deployment live.

## Search and measurement

The canonical launch URL is `https://twin-tech-sudo.github.io/`. When a custom domain is affordable, update `site` in `astro.config.mjs` and `src/data/site.ts`, then configure the GitHub Pages custom domain.

After launch:

1. Add the site as a URL-prefix property in Google Search Console.
2. Set `PUBLIC_GOOGLE_SITE_VERIFICATION` and submit `/sitemap-index.xml`.
3. Create GA4, implement the consent UI before loading it, then set `PUBLIC_GA_MEASUREMENT_ID`.
4. Replace the provisional contact email only after its mailbox exists.
5. Add genuine testimonials and measured case-study outcomes as evidence becomes available.

No ranking, revenue, client or performance claims are fabricated. The initial articles target real buying questions rather than keyword stuffing.

## Content sources

Launch content and page structure live in `src/data/site.ts`. Studio-managed content lives in Supabase as draft/published records. The current static launch content remains the fallback when Supabase is not configured, which keeps local builds and deployments resilient.

## Deployment

`.github/workflows/deploy.yml` uses Node 22, builds `dist/` and deploys it to GitHub Pages. The canonical site remains:

`https://twin-tech-sudo.github.io/`
