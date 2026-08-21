# Syed Muhammad Rehan - Systems, Automation & AI Portfolio

The source for [relinxx.vercel.app](https://relinxx.vercel.app), a Next.js portfolio focused on workflow automation, systems integration, client delivery, and applied AI.

## What the portfolio demonstrates

- End-to-end ownership from technical discovery through implementation, QA, walkthroughs, and handover.
- n8n orchestration with APIs, webhooks, branching, human approvals, persistence, monitoring, and error paths.
- Client-facing Azure delivery across SharePoint, Azure AI Search, Copilot Studio, Teams, Functions, Bot Service, and SQL.
- Applied AI systems including RAG, NL2SQL, browser agents, evaluation, and retrieval quality iteration.

## Featured case studies

### Multi-Agent Research Automation

A webhook-driven n8n workflow that combines parallel research sources, fallback handling, evidence deduplication and scoring, Qdrant ingestion, specialist agents, review thresholds, revision loops, PostgreSQL persistence, and error notifications.

### Leadership Briefing & Approval Automation

An intake-to-decision workflow with normalization, duplicate checks, AI classification and extraction, risk analysis, deterministic validation, human approval routes, executive briefing generation, and audit logging.

### Enterprise Knowledge & Data Automation

Paid client work for Watermark Constructions delivered as two connected systems: a SharePoint-grounded knowledge assistant and a guarded natural-language analytics workflow across three Azure SQL databases. The final Azure vector index contained 20,934 records.

### Autonomous QA Application

An MCP and Playwright agent that explores web applications, discovers flows, generates executable tests, and streams progress through SSE.

## Delivery approach

1. Discover the workflow, systems, owners, risks, and acceptance criteria.
2. Connect APIs, webhooks, data stores, and AI services with explicit validation and routing.
3. Test success, failure, retry, timeout, malformed-input, and no-result paths.
4. Demonstrate the implementation clearly and leave usable handover documentation.

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

## Content and privacy

Portfolio content is maintained in `data/portfolio.ts`. Client case studies describe architecture and verified outcomes without publishing credentials, private payloads, internal endpoints, or client data. Public links are added only when they are safe and verified.

## Deployment

The project is linked to Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical URLs, the sitemap, and social metadata resolve correctly.
