"use client";

import Link from "next/link";
import { useState } from "react";
import {
  careerTracks,
  journeyEntries,
  type JourneyEntry,
} from "@/data/portfolio";

type JourneyType = JourneyEntry["type"];

const filterOptions: Array<{ id: "all" | JourneyType; label: string }> = [
  { id: "all", label: "All Milestones" },
  { id: "work", label: "Roles & Client Work" },
  { id: "ai", label: "AI & RAG Systems" },
  { id: "automation", label: "Automation & CRM" },
  { id: "credentials", label: "Degrees & Credentials" },
];

const categoryBadgeStyles: Record<
  JourneyType,
  { bg: string; text: string; dot: string }
> = {
  work: {
    bg: "rgba(48, 209, 88, 0.12)",
    text: "#30d158",
    dot: "#30d158",
  },
  ai: {
    bg: "rgba(41, 151, 255, 0.12)",
    text: "#2997ff",
    dot: "#2997ff",
  },
  automation: {
    bg: "rgba(255, 159, 10, 0.12)",
    text: "#ff9f0a",
    dot: "#ff9f0a",
  },
  credentials: {
    bg: "rgba(191, 90, 242, 0.12)",
    text: "#bf5af2",
    dot: "#bf5af2",
  },
};

export function JourneySection() {
  const [activeFilter, setActiveFilter] = useState<"all" | JourneyType>("all");

  const filteredEntries =
    activeFilter === "all"
      ? journeyEntries
      : journeyEntries.filter((entry) => entry.type === activeFilter);

  return (
    <section id="journey" className="mt-24 scroll-mt-24">
      {/* Dual Career Tracks */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="label">Two Tracks · One Engineer</div>
          <h2 className="mt-1 text-[clamp(26px,3.4vw,38px)] font-semibold tracking-tight leading-[1.1] text-[var(--fg)]">
            Applied AI Engineering &amp; Revenue Operations Automation.
          </h2>
        </div>
        <p className="max-w-[440px] text-[13.5px] text-[var(--muted)]">
          Most teams have to hire separately for backend AI/RAG systems and
          CRM/webhook operations. I build and own both layers end to end.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {careerTracks.map((track, idx) => (
          <article key={track.id} className="work-track raised">
            <div>
              <div className="work-track-head">
                <span className="work-track-kicker">
                  <span
                    className="work-track-dot"
                    style={{
                      background: idx === 0 ? "#2997ff" : "#30d158",
                    }}
                  />
                  0{idx + 1} · Track
                </span>
                <span className="work-track-tag">{track.badgeText}</span>
              </div>

              <h3 className="work-track-title">{track.title}</h3>
              <p className="work-track-sub">{track.subtitle}</p>

              <ul className="work-track-steps">
                {track.steps.map((stepItem) => (
                  <li key={stepItem.step}>
                    <span>{stepItem.step}</span>
                    <div>
                      <b>{stepItem.title}</b>
                      <p>{stepItem.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="work-track-foot">
              <span className="work-track-foot-label">
                Production Environments
              </span>
              <div className="work-track-orgs">
                {idx === 0 ? (
                  <>
                    <span>Logic Powered Solutions</span>
                    <span>Watermark Constructions</span>
                    <span>COMSATS</span>
                  </>
                ) : (
                  <>
                    <span>Builders of Authority</span>
                    <span>WhatConverts → Salesforce</span>
                    <span>GoHighLevel</span>
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Filterable Journey Timeline */}
      <div className="mt-16 raised rounded-[28px] p-6 sm:p-9">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--hairline)] pb-6">
          <div>
            <div className="label">Experience &amp; Milestones</div>
            <h3 className="mt-1 text-[clamp(22px,2.8vw,30px)] font-semibold tracking-tight text-[var(--fg)]">
              Verified Career &amp; Delivery Timeline
            </h3>
            <p className="mt-1 text-[13px] text-[var(--muted)]">
              Roles, client deployments, internships, degree, and verified
              credentials — clearly distinguished.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5"
            role="tablist"
            aria-label="Filter career timeline"
          >
            {filterOptions.map((opt) => {
              const active = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition ${
                    active
                      ? "bg-[var(--fg)] text-[var(--bg)]"
                      : "border border-[var(--hairline)] bg-[var(--card-2)] text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 divide-y divide-[var(--hairline)]">
          {filteredEntries.map((entry) => {
            const style = categoryBadgeStyles[entry.type];
            return (
              <div
                key={entry.id}
                className="py-5 first:pt-1 last:pb-1 grid gap-4 md:grid-cols-[190px_1fr_auto] md:items-start"
              >
                <div>
                  <div className="font-mono text-[12px] font-medium text-[var(--fg)]">
                    {entry.period}
                  </div>
                  <span
                    className="mt-1.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10.5px] font-mono uppercase tracking-wider"
                    style={{ background: style.bg, color: style.text }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: style.dot }}
                    />
                    {entry.typeLabel}
                  </span>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold tracking-tight text-[var(--fg)]">
                    {entry.title}
                  </h4>
                  <div className="mt-0.5 text-[12.5px] font-medium text-[var(--muted)]">
                    {entry.organization}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--muted)]">
                    {entry.summary}
                  </p>
                </div>

                {entry.href && (
                  <div className="md:text-right">
                    {entry.href.startsWith("http") ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-3 py-1.5 text-[12px] font-medium text-[var(--fg)] hover:border-[var(--fg)]/30 transition"
                      >
                        {entry.linkLabel ?? "Verify"} ↗
                      </a>
                    ) : (
                      <Link
                        href={entry.href}
                        className="inline-flex items-center gap-1 rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-3 py-1.5 text-[12px] font-medium text-[var(--fg)] hover:border-[var(--fg)]/30 transition"
                      >
                        {entry.linkLabel ?? "Inspect"} →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
