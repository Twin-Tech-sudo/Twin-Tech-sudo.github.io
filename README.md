# Twin Tech-sudo

Standalone marketing website and lightweight content Studio for Twin Tech-sudo.

## Run locally

```bash
npm install
npm run dev
```

The public site is at `/`. Open the Studio from the footer or press `Ctrl/Cmd + Shift + A`.

The first-run demo PIN is `sudo2026`. Copy `.env.example` to `.env` and change `VITE_STUDIO_PIN` before publishing.

## Content model

The Studio edits projects, testimonials and contact settings. Data persists in the browser's local storage and can be backed up or moved with JSON Export/Import. This is suitable for a self-managed static launch and previews, but client-side PINs are not secure authentication. Before giving access to other editors or using multiple devices, connect the same content model to a protected CMS or database.

## Build

```bash
npm run typecheck
npm run build
```

The canonical launch URL is `https://twin-tech-sudo.github.io/`. When a custom domain is connected, replace it in `index.html`, `public/robots.txt`, and `public/sitemap.xml`. The contact email remains provisional until the matching mailbox is configured.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages through `.github/workflows/deploy.yml`.

## Search foundations

- UK-focused title and description using service-intent terms
- Semantic service, work, process and contact content
- Organization and ProfessionalService JSON-LD
- Open Graph/Twitter metadata
- Crawlable `robots.txt`, canonical URL and sitemap
- Accessible headings, links, reduced-motion handling and responsive layout
