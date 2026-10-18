import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BentoHero } from "@/components/bento-hero";
import { ContactDesk } from "@/components/contact-desk";
import { JourneySection } from "@/components/journey-section";
import { ProofSection } from "@/components/proof-section";
import { portfolioApps, projects } from "@/data/portfolio";

const featuredProjects = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-[1100px] px-4 pt-24 pb-16 sm:px-6"
    >
      {/* 1. 8-Tile 3x4 Bento Grid Hero */}
      <BentoHero />

      {/* 2. Selected Work — Sticky Stacking Split Cards */}
      <section id="work" className="mt-24 scroll-mt-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="label">Selected Work · 01 — 06</div>
            <h2 className="mt-1 text-[clamp(26px,3.4vw,38px)] font-semibold tracking-tight leading-[1.1] text-[var(--fg)]">
              Production Client Systems &amp; Agentic Workflows.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/reports/builders-of-authority"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-3.5 py-2 text-[12px] font-medium text-[var(--fg)] hover:border-[var(--fg)]/30 transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" />
              20-View BOA Report ↗
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 rounded-full bg-[var(--fg)] px-4 py-2 text-[12.5px] font-medium text-[var(--bg)] hover:opacity-90 transition"
            >
              All 19 Builds →
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => {
            const stackTop = `${76 + index * 14}px`;
            const idxStr = String(index + 1).padStart(2, "0");
            const totalStr = String(featuredProjects.length).padStart(2, "0");

            return (
              <article
                key={project.slug}
                style={{ "--stack-top": stackTop } as CSSProperties}
                className="raised rounded-[28px] p-6 sm:p-8 lg:sticky lg:top-[var(--stack-top)] transition-transform"
              >
                <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-center">
                  {/* Left Editorial Column */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="label-row flex-wrap">
                        <span className="font-mono text-[11px] text-[var(--muted)]">
                          {idxStr} / {totalStr}
                        </span>
                        <span>·</span>
                        <span className="text-[var(--fg)]">
                          {project.kindLabel}
                        </span>
                        <span>·</span>
                        <span>{project.platform}</span>
                        <span>·</span>
                        <span className="font-mono">{project.year}</span>
                      </div>

                      <h3 className="mt-3 text-[clamp(21px,2.5vw,28px)] font-semibold tracking-tight leading-[1.15] text-[var(--fg)]">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="hover:text-[var(--accent)] transition"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--muted)]">
                        {project.summary}
                      </p>

                      {/* Key Metrics Strip */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {project.metrics.slice(0, 3).map((m) => (
                            <div
                              key={m.label}
                              className="rounded-2xl border border-[var(--hairline)] bg-[var(--card-2)] px-3 py-2.5"
                            >
                              <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] truncate">
                                {m.label}
                              </div>
                              <div className="mt-0.5 text-[13.5px] font-semibold font-mono text-[var(--fg)] truncate">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Stack Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-2.5 py-0.5 text-[11px] text-[var(--muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-[var(--hairline)]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[var(--fg)] px-4 py-2 text-[12.5px] font-medium text-[var(--bg)] hover:opacity-90 transition"
                      >
                        Read Case Study <span aria-hidden="true">→</span>
                      </Link>

                      {project.reportUrl && (
                        <Link
                          href={project.reportUrl}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#30d158]/40 bg-[#30d158]/10 px-3.5 py-2 text-[12px] font-medium text-[#30d158] hover:bg-[#30d158]/20 transition"
                        >
                          20-View Proof Report ↗
                        </Link>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-3.5 py-2 text-[12px] font-medium text-[var(--fg)] hover:border-[var(--fg)]/30 transition"
                        >
                          Live App ↗
                        </a>
                      )}

                      {project.repository && (
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-[var(--hairline)] px-3.5 py-2 text-[12px] font-medium text-[var(--muted)] hover:text-[var(--fg)] transition"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Visual Cover Column */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group relative block overflow-hidden rounded-[22px] border border-[var(--hairline)] bg-[var(--card-2)]"
                  >
                    {project.image ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/30">
                        <Image
                          src={project.image}
                          alt={project.imageAlt ?? project.title}
                          width={780}
                          height={490}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                          <span className="rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md">
                            {project.status}
                          </span>
                          <span className="rounded-full bg-white/20 px-2.5 py-1 backdrop-blur-md">
                            Inspect ↗
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Custom Architecture Blueprint Cover for Watermark Constructions */
                      <div
                        className="relative aspect-[16/10] w-full overflow-hidden p-5 flex flex-col justify-between text-white"
                        style={{
                          background:
                            "linear-gradient(145deg, #061a14 0%, #0b2e23 52%, #07121e 100%)",
                        }}
                      >
                        <div className="flex items-center justify-between text-[10.5px] font-mono text-emerald-300/90">
                          <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5">
                            AZURE RAG + 3-DB NL2SQL ARCHITECTURE
                          </span>
                          <span>LPS · 2025–2026</span>
                        </div>

                        <div className="my-2 grid grid-cols-2 gap-2 text-[11px]">
                          <div className="rounded-xl border border-white/15 bg-white/5 p-2.5 backdrop-blur-sm">
                            <div className="font-mono text-[10px] text-emerald-300">
                              UNSTRUCTURED RAG
                            </div>
                            <div className="mt-0.5 font-semibold text-white">
                              20,934 Indexed Records
                            </div>
                            <div className="mt-0.5 text-[10px] text-white/70">
                              SharePoint + OneDrive Delta Sync → Azure AI Search
                            </div>
                          </div>
                          <div className="rounded-xl border border-white/15 bg-white/5 p-2.5 backdrop-blur-sm">
                            <div className="font-mono text-[10px] text-sky-300">
                              GUARDRAILED NL2SQL
                            </div>
                            <div className="mt-0.5 font-semibold text-white">
                              3 Azure SQL Databases
                            </div>
                            <div className="mt-0.5 text-[10px] text-white/70">
                              Schema routing + strict read-only query validation
                            </div>
                          </div>
                          <div className="rounded-xl border border-white/15 bg-white/5 p-2.5 backdrop-blur-sm">
                            <div className="font-mono text-[10px] text-amber-300">
                              EVALUATION BENCHMARK
                            </div>
                            <div className="mt-0.5 font-semibold text-white">
                              11/15 → 15/15 Passes
                            </div>
                            <div className="mt-0.5 text-[10px] text-white/70">
                              Structured client QA benchmark validation
                            </div>
                          </div>
                          <div className="rounded-xl border border-white/15 bg-white/5 p-2.5 backdrop-blur-sm">
                            <div className="font-mono text-[10px] text-purple-300">
                              DELIVERY SURFACES
                            </div>
                            <div className="mt-0.5 font-semibold text-white">
                              Teams Bot + Web UI
                            </div>
                            <div className="mt-0.5 text-[10px] text-white/70">
                              Azure Bot Service · Azure Functions · App Service
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-white/80">
                          <span>Client: Watermark Constructions</span>
                          <span className="underline underline-offset-4">
                            View architecture →
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Live Deployed Workflow Apps Strip */}
        <div className="mt-12 raised rounded-[26px] p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--hairline)] pb-4">
            <div>
              <span className="label">Demonstrable Portfolio Suite</span>
              <h3 className="mt-0.5 text-[19px] font-semibold tracking-tight text-[var(--fg)]">
                9 Demonstrable Automation &amp; AI Applications
              </h3>
            </div>
            <Link
              href="/projects#live-apps"
              className="text-[12.5px] font-medium text-[var(--fg)] hover:text-[var(--accent)] transition"
            >
              Explore all 9 apps →
            </Link>
          </div>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioApps.map((app) => (
              <Link
                key={app.name}
                href="/projects#live-apps"
                className="group rounded-2xl border border-[var(--hairline)] bg-[var(--card-2)] p-3.5 hover:border-[var(--fg)]/30 transition flex flex-col justify-between gap-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition truncate">
                      {app.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#30d158] shrink-0">
                      {app.category}
                    </span>
                  </div>
                  <p className="mt-1 text-[11.5px] leading-snug text-[var(--muted)] line-clamp-2">
                    {app.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {app.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[var(--card)] px-2 py-0.5 text-[10px] font-mono text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Proof & Verified Credentials Carousel Section */}
      <ProofSection />

      {/* 4. Dual Career Tracks & Filterable Journey Timeline */}
      <JourneySection />

      {/* 5. Interactive Let's Talk Desk */}
      <ContactDesk />
    </main>
  );
}
