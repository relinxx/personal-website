"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { certifications } from "@/data/portfolio";

const watermarkSlides = [
  {
    step: "01 / 04 · Evaluation Benchmark",
    metric: "11/15 → 15/15",
    title: "Structured Grounding & Answer Accuracy",
    detail:
      "Defined a 15-case domain benchmark with client stakeholders; improved marked passes to 15/15 through hybrid retrieval tuning, prompt refinement, and domain-term handling.",
    tags: ["Azure AI Search", "Hybrid RAG", "15-Case Eval"],
  },
  {
    step: "02 / 04 · Knowledge Scale",
    metric: "20,934 Records",
    title: "SharePoint & OneDrive Delta Indexing",
    detail:
      "Built incremental sync and OCR ingestion pipelines indexing 20,934 enterprise records in Azure AI Search with source-attributed citations.",
    tags: ["SharePoint API", "OCR Ingestion", "Vector + Keyword"],
  },
  {
    step: "03 / 04 · Guardrailed NL2SQL",
    metric: "3 Azure SQL DBs",
    title: "Read-Only Multi-Database Query Routing",
    detail:
      "Engineered schema-aware routing and strict read-only SQL validation across 3 production Azure SQL databases exposed via Azure Functions.",
    tags: ["NL2SQL", "Read-Only Guardrails", "Azure Functions"],
  },
  {
    step: "04 / 04 · Production Delivery",
    metric: "Sole Engineer",
    title: "Microsoft Teams Bot & React Web App",
    detail:
      "Owned architecture, backend services, evaluation, and deployment across Azure Bot Service (Teams) and custom web interface at Logic Powered Solutions.",
    tags: ["Teams Bot", "Azure App Service", "Client Delivery"],
  },
];

const boaProofSlides = [
  {
    caption: "01 / 06 · Salesforce Lead Attribution & Source Verification",
    tag: "Salesforce CRM",
    src: "/work/builders-of-authority/11-salesforce-lead-detail.png",
  },
  {
    caption: "02 / 06 · Zapier Field Mapping (WhatConverts → Salesforce)",
    tag: "Zapier Automation",
    src: "/work/builders-of-authority/09-zapier-field-mapping.png",
  },
  {
    caption: "03 / 06 · Zapier Execution History & Payload Audit",
    tag: "Webhook Tracing",
    src: "/work/builders-of-authority/10-zapier-run-history.png",
  },
  {
    caption: "04 / 06 · Cross-System Quote & Sales Attribution Audit",
    tag: "Revenue QA",
    src: "/work/builders-of-authority/13-sales-to-lead-sheet.png",
  },
  {
    caption: "05 / 06 · GoHighLevel Subaccount Opportunity Pipeline",
    tag: "GoHighLevel",
    src: "/work/builders-of-authority/15-ghl-opportunities-pipeline.png",
  },
  {
    caption: "06 / 06 · GoHighLevel Automated Lead & Booking Workflows",
    tag: "GHL Workflows",
    src: "/work/builders-of-authority/16-ghl-workflows-list.png",
  },
];

export function ProofSection() {
  const [wmIdx, setWmIdx] = useState(0);
  const [boaIdx, setBoaIdx] = useState(0);
  const [certIdx, setCertIdx] = useState(0);

  const currentWm = watermarkSlides[wmIdx] ?? watermarkSlides[0];
  const currentBoa = boaProofSlides[boaIdx] ?? boaProofSlides[0];
  const currentCert = certifications[certIdx] ?? certifications[0];

  return (
    <section id="proof" className="mt-24 scroll-mt-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="label">Proof &amp; Verified Credentials</div>
          <h2 className="mt-1 text-[clamp(26px,3.4vw,38px)] font-semibold tracking-tight leading-[1.1] text-[var(--fg)]">
            Measured systems. Inspected records. Verified credentials.
          </h2>
        </div>
        <p className="max-w-[440px] text-[13.5px] text-[var(--muted)]">
          Every claim on this portfolio maps to either a benchmarked client
          delivery, a 20-screenshot operational audit, or an independently
          verifiable credential.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* CARD 1: Watermark Constructions Client RAG + NL2SQL Proof */}
        <article className="raised raised-hover rounded-[26px] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="label">Client Delivery · LPS</span>
              <span className="rounded-full bg-[#30d158]/15 px-2.5 py-0.5 text-[11px] font-mono font-medium text-[#30d158]">
                Watermark Constructions
              </span>
            </div>

            <div className="mt-4 rounded-2xl border border-[var(--hairline)] bg-[var(--card-2)] p-5 min-h-[225px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--muted)]">
                <span>{currentWm.step}</span>
                <span className="text-[var(--accent)] font-semibold">
                  {currentWm.metric}
                </span>
              </div>

              <div className="my-3">
                <h3 className="text-[17px] font-semibold tracking-tight text-[var(--fg)]">
                  {currentWm.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                  {currentWm.detail}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentWm.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--hairline)] bg-[var(--card)] px-2.5 py-0.5 text-[11px] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {watermarkSlides.map((slide, idx) => (
                  <button
                    key={slide.step}
                    type="button"
                    aria-label={`Watermark proof slide ${idx + 1}`}
                    onClick={() => setWmIdx(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === wmIdx
                        ? "w-6 bg-[var(--fg)]"
                        : "w-1.5 bg-[var(--muted)]/40 hover:bg-[var(--muted)]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Previous Watermark slide"
                  onClick={() =>
                    setWmIdx(
                      (prev) =>
                        (prev - 1 + watermarkSlides.length) %
                        watermarkSlides.length
                    )
                  }
                  className="dock-icon !h-7 !w-7 text-[12px]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next Watermark slide"
                  onClick={() =>
                    setWmIdx((prev) => (prev + 1) % watermarkSlides.length)
                  }
                  className="dock-icon !h-7 !w-7 text-[12px]"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-[var(--hairline)] pt-3 text-[12px]">
              <span className="text-[var(--muted)]">
                Aug 2025 – Aug 2026 · Sole Engineer
              </span>
              <Link
                href="/projects/watermark-enterprise-automation"
                className="font-medium text-[var(--fg)] hover:text-[var(--accent)] transition"
              >
                Full case study →
              </Link>
            </div>
          </div>
        </article>

        {/* CARD 2: Builders of Authority 20-Screenshot Carousel */}
        <article className="raised raised-hover rounded-[26px] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="label">Systems QA · 20 Views</span>
              <span className="rounded-full bg-[#2997ff]/15 px-2.5 py-0.5 text-[11px] font-mono font-medium text-[#2997ff]">
                {currentBoa.tag}
              </span>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--card-2)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <Image
                  src={currentBoa.src}
                  alt={currentBoa.caption}
                  width={720}
                  height={450}
                  className="h-full w-full object-cover object-top transition duration-500"
                />
              </div>
              <div className="p-3.5">
                <p className="text-[12.5px] font-medium text-[var(--fg)] line-clamp-1">
                  {currentBoa.caption}
                </p>
                <p className="mt-0.5 text-[11.5px] text-[var(--muted)]">
                  WhatConverts · Zapier · Salesforce · GoHighLevel · ClickUp
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {boaProofSlides.map((slide, idx) => (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`BOA screenshot ${idx + 1}`}
                    onClick={() => setBoaIdx(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === boaIdx
                        ? "w-6 bg-[var(--fg)]"
                        : "w-1.5 bg-[var(--muted)]/40 hover:bg-[var(--muted)]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Previous BOA screenshot"
                  onClick={() =>
                    setBoaIdx(
                      (prev) =>
                        (prev - 1 + boaProofSlides.length) %
                        boaProofSlides.length
                    )
                  }
                  className="dock-icon !h-7 !w-7 text-[12px]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next BOA screenshot"
                  onClick={() =>
                    setBoaIdx((prev) => (prev + 1) % boaProofSlides.length)
                  }
                  className="dock-icon !h-7 !w-7 text-[12px]"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-[var(--hairline)] pt-3 text-[12px]">
              <span className="text-[var(--muted)]">
                Builders of Authority (Remote)
              </span>
              <Link
                href="/reports/builders-of-authority"
                className="font-medium text-[var(--fg)] hover:text-[var(--accent)] transition"
              >
                Inspect all 20 views →
              </Link>
            </div>
          </div>
        </article>

        {/* CARD 3: 6 Verified Certifications Carousel */}
        <article className="raised raised-hover rounded-[26px] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="label">Verified Certificates</span>
              <span className="font-mono text-[11px] text-[var(--muted)]">
                0{certIdx + 1} / 0{certifications.length}
              </span>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--card-2)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/20">
                <Image
                  src={currentCert.image}
                  alt={`${currentCert.title} certificate`}
                  width={720}
                  height={450}
                  className="h-full w-full object-cover object-center transition duration-500"
                />
              </div>
              <div className="p-3.5">
                <div className="flex items-center justify-between gap-2 text-[11px] text-[var(--muted)]">
                  <span className="font-medium text-[var(--fg)]">
                    {currentCert.issuer}
                  </span>
                  <span className="font-mono">{currentCert.completed}</span>
                </div>
                <p className="mt-0.5 text-[13px] font-semibold text-[var(--fg)] line-clamp-1">
                  {currentCert.title}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {certifications.map((cert, idx) => (
                  <button
                    key={cert.title}
                    type="button"
                    aria-label={`Certificate ${idx + 1}: ${cert.title}`}
                    onClick={() => setCertIdx(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === certIdx
                        ? "w-6 bg-[var(--fg)]"
                        : "w-1.5 bg-[var(--muted)]/40 hover:bg-[var(--muted)]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Previous certificate"
                  onClick={() =>
                    setCertIdx(
                      (prev) =>
                        (prev - 1 + certifications.length) %
                        certifications.length
                    )
                  }
                  className="dock-icon !h-7 !w-7 text-[12px]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next certificate"
                  onClick={() =>
                    setCertIdx((prev) => (prev + 1) % certifications.length)
                  }
                  className="dock-icon !h-7 !w-7 text-[12px]"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-[var(--hairline)] pt-3 text-[12px]">
              <span className="text-[var(--muted)] truncate max-w-[175px]">
                {currentCert.skills.slice(0, 2).join(" · ")}
              </span>
              <a
                href={currentCert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[var(--fg)] hover:text-[var(--accent)] transition"
              >
                Verify credential ↗
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
