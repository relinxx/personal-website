# Syed Muhammad Rehan - Portfolio

A maintainable Next.js portfolio focused on production RAG systems, AI agents, NL2SQL, Azure delivery, and selected engineering work.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Content updates

Profile, experience, skills, and project case studies live in `data/portfolio.ts`. A project can expose a repository or demo only when the relevant URL is verified and safe for public use.

## Deployment

Import this GitHub repository into Vercel and use `main` as the production branch. After deployment, set:

```text
NEXT_PUBLIC_SITE_URL=https://<production-domain>
```

Then redeploy so canonical URLs, sitemap entries, and social metadata use the production URL.

The custom `relinxx.dev` domain is intentionally deferred until it is purchased and its DNS can be configured.

## Demo publication checklist

Before adding a public demo URL:

- Remove credentials, API keys, private endpoints, and client data.
- Confirm setup instructions work from a clean environment.
- Add a stable hosted demo or a concise recorded walkthrough.
- Verify the demo on desktop and mobile.
- Add the verified URL to the matching project in `data/portfolio.ts`.
