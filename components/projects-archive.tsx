"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  portfolioApps,
  projects,
  type ProjectKind,
} from "@/data/portfolio";

const filterTabs: Array<{ id: "all" | ProjectKind; label: string }> = [
  { id: "all", label: `All Case Studies (${projects.length})` },
  {
    id: "client",
    label: `Client & Production (${projects.filter((p) => p.kind === "client").length})`,
  },
  {
    id: "agent",
    label: `AI & RAG Agents (${projects.filter((p) => p.kind === "agent").length})`,
  },
  {
    id: "automation",
    label: `Automation & Ops (${projects.filter((p) => p.kind === "automation").length})`,
  },
  {
    id: "ml",
    label: `Applied ML (${projects.filter((p) => p.kind === "ml").length})`,
  },
];

export function ProjectsArchive() {
  const [activeKind, setActiveKind] = useState<"all" | ProjectKind>("all");

  const filtered =
    activeKind === "all"
      ? projects
      : projects.filter((p) => p.kind === activeKind);

  return (
    <div>
      {/* Filter Pills */}
      <div
        className="flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {filterTabs.map((tab) => {
          const isOn = activeKind === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isOn}
              onClick={() => setActiveKind(tab.id)}
              className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition ${
                isOn
                  ? "bg-[var(--fg)] text-[var(--bg)]"
                  : "border border-[var(--hairline)] bg-[var(--card)] text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filtered.map((project, idx) => (
          <article
            key={project.slug}
            className="raised raised-hover rounded-[26px] p-6 flex flex-col justify-between"
          >
            <div>
              {/* Cover Image / Blueprint */}
              <Link
                href={`/projects/${project.slug}`}
                className="group relative mb-5 block overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--card-2)]"
              >
                {project.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/30">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      width={720}
                      height={405}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <div
                    className="aspect-[16/9] w-full p-5 flex flex-col justify-between text-white"
                    style={{
                      background:
                        "linear-gradient(145deg, #061a14 0%, #0b2e23 55%, #07121e 100%)",
                    }}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300">
                      <span>CLIENT ARCHITECTURE · WATERMARK CONSTRUCTIONS</span>
                      <span>2025–2026</span>
                    </div>
                    <div>
                      <div className="text-[18px] font-semibold">
                        20,934 Indexed Records · 15/15 Eval · 3 Azure SQL DBs
                      </div>
                      <p className="mt-1 text-[12px] text-white/75">
                        Hybrid Azure AI Search RAG + Guardrailed Read-Only NL2SQL
                        in Microsoft Teams &amp; Web UI
                      </p>
                    </div>
                  </div>
                )}
              </Link>

              <div className="label-row flex-wrap">
                <span className="font-mono text-[11px]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>·</span>
                <span className="text-[var(--fg)]">{project.kindLabel}</span>
                <span>·</span>
                <span>{project.platform}</span>
                <span>·</span>
                <span className="font-mono">{project.year}</span>
              </div>

              <h2 className="mt-2 text-[20px] font-semibold tracking-tight leading-snug text-[var(--fg)]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:text-[var(--accent)] transition"
                >
                  {project.title}
                </Link>
              </h2>

              <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--muted)]">
                {project.summary}
              </p>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {project.metrics.slice(0, 3).map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-[var(--hairline)] bg-[var(--card-2)] px-2.5 py-2"
                    >
                      <div className="text-[9.5px] font-mono uppercase tracking-wider text-[var(--muted)] truncate">
                        {m.label}
                      </div>
                      <div className="mt-0.5 text-[12px] font-semibold font-mono text-[var(--fg)] truncate">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--hairline)] flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--fg)] px-3.5 py-1.5 text-[12px] font-medium text-[var(--bg)] hover:opacity-90 transition"
                >
                  Case Study →
                </Link>
                {project.reportUrl && (
                  <Link
                    href={project.reportUrl}
                    className="inline-flex items-center gap-1 rounded-full border border-[#30d158]/40 bg-[#30d158]/10 px-3 py-1.5 text-[11.5px] font-medium text-[#30d158]"
                  >
                    20-View Report ↗
                  </Link>
                )}
              </div>

              <div className="flex items-center gap-2 text-[12px]">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[var(--fg)] hover:text-[var(--accent)] transition"
                  >
                    Live ↗
                  </a>
                )}
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--muted)] hover:text-[var(--fg)] transition"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Section 2: All 9 Demonstrable Portfolio Workflow Applications */}
      <section id="live-apps" className="mt-20 scroll-mt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="label">Demonstrable Portfolio Suite · 09 Apps</div>
            <h2 className="mt-1 text-[clamp(24px,3vw,34px)] font-semibold tracking-tight text-[var(--fg)]">
              9 Demonstrable Automation &amp; AI Applications
            </h2>
          </div>
          <p className="max-w-[440px] text-[13px] text-[var(--muted)]">
            Full-stack workflow applications across CRM operations, RAG
            retrieval, autonomous QA, and applied ML.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioApps.map((app, i) => (
            <article
              key={app.name}
              className="raised raised-hover rounded-[22px] p-5 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--muted)]">
                  <span>APP 0{i + 1}</span>
                  <span className="text-[#30d158]">● {app.category}</span>
                </div>
                <h3 className="mt-2 text-[16.5px] font-semibold tracking-tight text-[var(--fg)]">
                  {app.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                  {app.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {app.tags.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-2.5 py-0.5 text-[10.5px] text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--hairline)] text-[12px]">
                <a
                  href="https://github.com/relinxx"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition"
                >
                  Inspect on GitHub ↗
                </a>
                <span className="font-mono text-[11px] text-[var(--muted)]">
                  {app.kind}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
