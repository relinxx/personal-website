"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  bentoCycleItems,
  buildingNowItems,
  heroRotatorWords,
  profile,
  stackTools,
} from "@/data/portfolio";

const showcaseSlides = [
  {
    badge: "Client · Builders of Authority",
    year: "2026 · Remote",
    title: "WhatConverts → Zapier → Salesforce Attribution",
    subtitle: "20-view public systems & CRM operations proof report",
    href: "/reports/builders-of-authority",
    image: "/reports/boa/02-zapier-quote-workflow.jpg",
    secondaryImage: "/reports/boa/08-zapier-estate-overview.jpg",
    bg: "linear-gradient(155deg,#071426 0%,#0f2942 55%,#09131c 100%)",
  },
  {
    badge: "Client · Watermark Constructions",
    year: "2025 – 2026 · LPS",
    title: "Enterprise RAG + Guardrailed 3-DB NL2SQL",
    subtitle: "20,934 indexed records · 15/15 benchmark pass rate",
    href: "/projects/watermark-enterprise-automation",
    image: "/reports/boa/14-state-floors-sales-workflow.jpg",
    secondaryImage: "/reports/boa/09-clickup-triad-qa.jpg",
    bg: "linear-gradient(155deg,#071f18 0%,#0d382b 55%,#071510 100%)",
  },
  {
    badge: "Workflow · n8n + FastAPI + Qdrant",
    year: "2025 · Live System",
    title: "Multi-Agent Research & Content Pipeline",
    subtitle: "n8n · FastAPI · Qdrant · PostgreSQL orchestration",
    href: "/projects/multi-agent-research-automation",
    image: "/projects/multi-agent-rag-research-pipeline.png",
    secondaryImage: "/projects/leadership-briefing-approval-workflow.png",
    bg: "linear-gradient(155deg,#1d1128 0%,#2d1b4e 55%,#120b1d 100%)",
  },
  {
    badge: "CRM · GoHighLevel + n8n",
    year: "2026 · Production",
    title: "GHL Subaccount Automation & Review Monitoring",
    subtitle: "Lead capture, review heartbeat & webhook alerts",
    href: "/reports/builders-of-authority",
    image: "/reports/boa/05-ghl-review-heartbeat.jpg",
    secondaryImage: "/reports/boa/03-n8n-review-monitor.jpg",
    bg: "linear-gradient(155deg,#231407 0%,#3f230d 55%,#160d05 100%)",
  },
];

const heatmapColumns: number[][] = [
  [0, 1, 2, 1, 0, 2, 1],
  [1, 2, 3, 2, 1, 0, 2],
  [0, 1, 1, 3, 2, 2, 0],
  [2, 3, 4, 2, 1, 3, 1],
  [1, 0, 2, 3, 4, 2, 2],
  [0, 2, 3, 1, 2, 3, 1],
  [2, 4, 3, 2, 3, 1, 0],
  [1, 2, 2, 4, 3, 2, 1],
  [3, 1, 3, 2, 1, 4, 2],
  [2, 3, 4, 3, 2, 3, 1],
  [1, 2, 3, 4, 3, 2, 2],
  [2, 4, 3, 2, 4, 3, 1],
  [3, 2, 4, 3, 2, 4, 3],
  [2, 3, 4, 4, 3, 2, 2],
  [3, 4, 3, 2, 4, 3, 2],
  [4, 3, 4, 4, 3, 4, 3],
];

const stackRows = [stackTools.row1, stackTools.row2, stackTools.row3] as const;
const totalStackCount =
  stackTools.row1.length + stackTools.row2.length + stackTools.row3.length;

export function BentoHero() {
  const [rotatorIndex, setRotatorIndex] = useState(0);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [ghStats, setGhStats] = useState({ repos: 22, followers: 18 });
  const [pktNow, setPktNow] = useState<{
    timeStr: string;
    isDay: boolean;
    hDeg: number;
    mDeg: number;
    sDeg: number;
  }>({
    timeStr: "17:00:00",
    isDay: true,
    hDeg: 150,
    mDeg: 0,
    sDeg: 0,
  });

  useEffect(() => {
    const id = window.setInterval(() => {
      setRotatorIndex((prev) => (prev + 1) % heroRotatorWords.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % bentoCycleItems.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setShowcaseIndex((prev) => (prev + 1) % showcaseSlides.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const pktString = now.toLocaleString("en-US", {
        timeZone: "Asia/Karachi",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const parts = pktString.split(":").map((n) => parseInt(n, 10) || 0);
      const [hours24, minutes, seconds] = [
        parts[0] ?? 12,
        parts[1] ?? 0,
        parts[2] ?? 0,
      ];
      const hours12 = hours24 % 12;
      const hDeg = hours12 * 30 + minutes * 0.5;
      const mDeg = minutes * 6 + seconds * 0.1;
      const sDeg = seconds * 6;
      const isDay = hours24 >= 6 && hours24 < 19;

      setPktNow({
        timeStr: pktString,
        isDay,
        hDeg,
        mDeg,
        sDeg,
      });
    };

    updateClock();
    const id = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let active = true;
    fetch("https://api.github.com/users/relinxx")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data) return;
        if (typeof data.public_repos === "number") {
          setGhStats({
            repos: data.public_repos,
            followers:
              typeof data.followers === "number" ? data.followers : 18,
          });
        }
      })
      .catch(() => {
        /* Fallback values already set */
      });
    return () => {
      active = false;
    };
  }, []);

  const currentWord = heroRotatorWords[rotatorIndex] ?? heroRotatorWords[0];

  return (
    <section
      aria-label="Overview bento grid"
      className="grid auto-rows-[minmax(150px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* TILE 1: Hero Identity (2x2 on lg) */}
      <div className="raised relative overflow-hidden rounded-[26px] p-7 sm:p-9 md:col-span-2 lg:row-span-2 flex flex-col justify-between">
        <div className="hero-shine pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/rehan-profile-suit.png"
                alt={profile.name}
                width={52}
                height={52}
                priority
                className="h-12 w-12 rounded-2xl object-cover object-top ring-1 ring-black/10"
              />
              <span
                className="avatar-online"
                title="Available for Remote AI & Automation Engineering roles"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[14px] font-semibold tracking-tight text-[var(--fg)]">
                <span>{profile.name}</span>
                <span className="text-[11px] font-mono text-[var(--muted)]">
                  {profile.handle}
                </span>
              </div>
              <p className="text-[12px] text-[var(--muted)]">
                {profile.role} · {profile.location}
              </p>
            </div>
          </div>

          <span className="island-pill">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#30d158] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#30d158]" />
            </span>
            {profile.availability}
          </span>
        </div>

        <div className="my-7">
          <h1 className="hero-title text-[clamp(26px,3.6vw,44px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--fg)]">
            I engineer{" "}
            <span className="hero-chip hero-chip--blue">
              <span className="hero-chip-dot" />
              AI &amp; RAG Systems
            </span>{" "}
            <span className="hero-chip hero-chip--green">
              <span className="hero-chip-dot" />
              CRM &amp; Ops Automation
            </span>{" "}
            and{" "}
            <span className="hero-chip hero-chip--amber">
              <span className="hero-chip-dot" />
              Guardrailed NL2SQL
            </span>{" "}
            across{" "}
            <span className="rotator-wrap">
              <span
                key={rotatorIndex}
                className="rotator-word"
                style={{ color: currentWord.color }}
              >
                {currentWord.text}
              </span>
            </span>
            <span className="text-[var(--accent)]">.</span>
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13.5px] text-[var(--muted)]">
            <span className="font-medium text-[var(--fg)]">
              Azure OpenAI · FastAPI · Next.js
            </span>
            <span aria-hidden="true">·</span>
            <span>n8n · Zapier · Salesforce · GoHighLevel</span>
            <span aria-hidden="true">·</span>
            <span>Sole-engineer client delivery</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[var(--hairline)]">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-4 py-2 text-[13px] font-medium text-[var(--bg)] hover:opacity-90 transition"
            >
              Selected Work <span aria-hidden="true">↓</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-4 py-2 text-[13px] font-medium text-[var(--fg)] hover:border-[var(--fg)]/30 transition"
            >
              Let’s Talk
            </Link>
            <Link
              href="/reports/builders-of-authority"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] px-3.5 py-2 text-[12px] font-medium text-[var(--muted)] hover:text-[var(--fg)] transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" />
              20-View BOA Report
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[var(--hairline)] px-3.5 py-2 text-[12px] font-medium text-[var(--muted)] hover:text-[var(--fg)] transition"
            >
              Resume PDF <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub (@relinxx)"
              className="dock-icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="dock-icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
              </svg>
            </a>
            <a
              href={profile.links.email}
              aria-label="Email"
              title={profile.email}
              className="dock-icon"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* TILE 2: Auto-cycling Proof & Impact Tile */}
      <div className="raised raised-hover relative overflow-hidden rounded-[26px] p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="label">Verified Impact</span>
          <div className="flex items-center gap-1" role="tablist">
            {bentoCycleItems.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show proof metric ${idx + 1}: ${item.title}`}
                onClick={() => setCycleIndex(idx)}
                className={`cycle-dot ${idx === cycleIndex ? "is-active" : ""}`}
              >
                <span />
              </button>
            ))}
          </div>
        </div>

        <div className="cycle-stage my-3">
          {bentoCycleItems.map((item, idx) => (
            <div
              key={item.title}
              className={`cycle-item ${idx === cycleIndex ? "is-active" : ""}`}
            >
              <div className="cycle-kicker">{item.title}</div>
              <div className="cycle-big" style={{ color: item.badgeColor }}>
                {item.badge}
              </div>
              <p className="cycle-sub">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] text-[var(--muted)] pt-2 border-t border-[var(--hairline)]">
          <span>Client &amp; production benchmarks</span>
          <Link
            href={bentoCycleItems[cycleIndex]?.href ?? "#proof"}
            className="font-medium text-[var(--fg)] hover:text-[var(--accent)] transition"
          >
            Inspect proof →
          </Link>
        </div>
      </div>

      {/* TILE 3: Synced GitHub Activity Tile */}
      <a
        href={profile.links.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub @relinxx activity"
        className="gh-tile raised raised-hover rounded-[26px] p-5 flex flex-col justify-between gap-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="gh-mark">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </span>
            <div>
              <div className="text-[12px] font-semibold leading-tight text-[var(--fg)]">
                @relinxx
              </div>
              <div className="text-[10px] text-[var(--muted)]">
                GitHub · Active shipping
              </div>
            </div>
          </div>
          <span className="gh-live">
            <span className="gh-live-dot" />
            Synced
          </span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <div>
            <div className="text-[22px] font-semibold tracking-tight leading-none text-[var(--fg)] font-mono">
              {ghStats.repos}+
            </div>
            <div className="text-[10px] text-[var(--muted)] mt-0.5">
              public repositories &amp; workflows
            </div>
          </div>
          <div className="flex gap-3 text-right">
            <div>
              <div className="text-[12px] font-semibold font-mono leading-tight text-[var(--fg)]">
                9
              </div>
              <div className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                live apps
              </div>
            </div>
            <div>
              <div className="text-[12px] font-semibold font-mono leading-tight text-[#39d353]">
                AI + Ops
              </div>
              <div className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                focus
              </div>
            </div>
          </div>
        </div>

        <div className="gh-grid-mini" aria-hidden="true">
          {heatmapColumns.map((col, cIdx) => (
            <div key={cIdx} className="gh-col">
              {col.map((lvl, rIdx) => (
                <span key={rIdx} className="gh-cell" data-l={lvl} />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] text-[var(--muted)]">
          <span>Python · TypeScript · n8n · FastAPI</span>
          <span className="inline-flex items-center gap-1 font-medium text-[var(--fg)]">
            github.com/relinxx ↗
          </span>
        </div>
      </a>

      {/* TILE 4: Building & Owning Now */}
      <div className="build-tile raised raised-hover relative overflow-hidden rounded-[26px] p-5 flex flex-col justify-between gap-3">
        <div className="flex items-center justify-between">
          <span className="label">Building &amp; Owning</span>
          <span className="build-live">
            <span className="build-live-dot" />4 systems
          </span>
        </div>

        <ul className="build-list">
          {buildingNowItems.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="build-row">
                <span
                  className="build-dot"
                  style={{ background: item.brand }}
                />
                <div className="build-body">
                  <div className="build-top">
                    <span className="build-name">{item.title}</span>
                  </div>
                  <p className="build-sub">{item.stack}</p>
                </div>
                <span className="build-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between text-[10px] text-[var(--muted)]">
          <span>Client delivery &amp; deployed labs</span>
          <Link
            href="/projects"
            className="font-mono text-[var(--fg)] hover:text-[var(--accent)] transition"
          >
            all 19 builds →
          </Link>
        </div>
      </div>

      {/* TILE 5: Tall Flagship Visual Showcase (lg:row-span-2) */}
      <div className="cover-tile raised raised-hover relative overflow-hidden rounded-[26px] lg:row-span-2 min-h-[340px] flex flex-col justify-between p-6 text-white">
        {showcaseSlides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`cover-slide ${idx === showcaseIndex ? "is-active" : ""}`}
            style={{ background: slide.bg }}
          >
            <div className="cover-art">
              <div className="web-shot web-shot--back">
                <div className="web-shot-bar">
                  <span />
                  <span />
                  <span />
                  <i>relinxx.vercel.app</i>
                </div>
                <Image
                  src={slide.secondaryImage}
                  alt={slide.title}
                  width={640}
                  height={400}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="web-shot web-shot--front">
                <div className="web-shot-bar">
                  <span />
                  <span />
                  <span />
                  <i>production-proof</i>
                </div>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={640}
                  height={400}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="cover-shade" />
          </div>
        ))}

        <div className="relative z-10 flex items-center justify-between text-[11px] font-medium text-white/85">
          <span className="rounded-full bg-white/15 px-2.5 py-1 backdrop-blur-md">
            {showcaseSlides[showcaseIndex]?.badge}
          </span>
          <span className="font-mono text-white/75">
            {showcaseSlides[showcaseIndex]?.year}
          </span>
        </div>

        <div className="relative z-10 mt-auto pt-44">
          <div className="flex items-center gap-1.5 mb-2">
            {showcaseSlides.map((s, idx) => (
              <button
                key={s.title}
                type="button"
                aria-label={`View showcase slide ${idx + 1}`}
                onClick={() => setShowcaseIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === showcaseIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <div className="text-[11px] uppercase tracking-wider text-white/75">
            {showcaseSlides[showcaseIndex]?.subtitle}
          </div>
          <div className="mt-0.5 text-[19px] font-semibold tracking-tight leading-snug">
            {showcaseSlides[showcaseIndex]?.title}
          </div>
          <Link
            href={showcaseSlides[showcaseIndex]?.href ?? "#work"}
            className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-white/90 hover:text-white underline underline-offset-4"
          >
            Open case study <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* TILE 6: Live PKT Analog + Digital Clock */}
      <div className="clock-tile raised raised-hover relative overflow-hidden rounded-[26px] p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="label">Time Zone</span>
          <span className="clock-state">
            <span className="clock-state-dot" />
            <span>{pktNow.isDay ? "Daylight · PKT" : "Evening · PKT"}</span>
          </span>
        </div>

        <div className="my-2 flex items-center gap-4">
          <div className="clock-face" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.14"
                strokeWidth="1.5"
              />
              <g
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeLinecap="round"
              >
                <line x1="50" y1="7" x2="50" y2="12" strokeWidth="2" />
                <line x1="93" y1="50" x2="88" y2="50" strokeWidth="2" />
                <line x1="50" y1="93" x2="50" y2="88" strokeWidth="2" />
                <line x1="7" y1="50" x2="12" y2="50" strokeWidth="2" />
                <line x1="71.5" y1="12.8" x2="69.5" y2="16.2" strokeWidth="1.2" />
                <line x1="87.2" y1="28.5" x2="83.8" y2="30.5" strokeWidth="1.2" />
                <line x1="87.2" y1="71.5" x2="83.8" y2="69.5" strokeWidth="1.2" />
                <line x1="71.5" y1="87.2" x2="69.5" y2="83.8" strokeWidth="1.2" />
                <line x1="28.5" y1="87.2" x2="30.5" y2="83.8" strokeWidth="1.2" />
                <line x1="12.8" y1="71.5" x2="16.2" y2="69.5" strokeWidth="1.2" />
                <line x1="12.8" y1="28.5" x2="16.2" y2="30.5" strokeWidth="1.2" />
                <line x1="28.5" y1="12.8" x2="30.5" y2="16.2" strokeWidth="1.2" />
              </g>
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="26"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${pktNow.hDeg} 50 50)`}
              />
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                transform={`rotate(${pktNow.mDeg} 50 50)`}
              />
              <line
                x1="50"
                y1="55"
                x2="50"
                y2="13"
                stroke="#ff9f0a"
                strokeWidth="1.2"
                strokeLinecap="round"
                transform={`rotate(${pktNow.sDeg} 50 50)`}
              />
              <circle cx="50" cy="50" r="3" fill="#ff9f0a" />
            </svg>
          </div>

          <div className="min-w-0">
            <div className="text-[22px] font-semibold tracking-tight leading-none font-mono tabular-nums text-[var(--fg)]">
              {pktNow.timeStr}
            </div>
            <div className="mt-1.5 text-[12px] font-medium text-[var(--fg)] truncate">
              Rawalpindi, Pakistan
            </div>
            <div className="text-[11px] text-[var(--muted)] font-mono">
              PKT · UTC+5 (Overlap w/ UK, EU &amp; US East)
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span>Async-first · Daily overlap</span>
          <span className="font-mono text-[#30d158]">● Online</span>
        </div>
      </div>

      {/* TILE 7: The Stack (3-Row Infinite Marquee) */}
      <div className="raised raised-hover relative overflow-hidden rounded-[26px] py-5 flex flex-col justify-between gap-3">
        <div className="flex items-center justify-between px-6">
          <span className="label">The Stack</span>
          <span className="text-[11px] text-[var(--muted)] font-mono">
            {totalStackCount} tools
          </span>
        </div>

        <div className="stack-marquee space-y-2 py-1">
          {stackRows.map((row, rIdx) => (
            <div
              key={rIdx}
              className={`marquee-row ${rIdx === 1 ? "marquee-row--rev" : ""}`}
            >
              <div className="marquee-track">
                {[...row, ...row].map((tool, tIdx) => (
                  <span key={`${tool.name}-${tIdx}`} className="stack-pill">
                    <i style={{ background: tool.color }} />
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-6 text-[11px] text-[var(--muted)]">
          <span>AI, Backend &amp; CRM Ops</span>
          <span className="font-mono text-[var(--fg)]">production-tested</span>
        </div>
      </div>

      {/* TILE 8: Inside the Work / 20-View BOA Report Tile */}
      <Link
        href="/reports/builders-of-authority"
        className="talk-tile raised raised-hover relative overflow-hidden rounded-[26px] p-5 flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <span className="label">Inside the Work</span>
          <span className="talk-badge">
            <span className="talk-badge-dot" />
            20 Screenshots
          </span>
        </div>

        <div className="my-2">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
            Builders of Authority · Systems QA
          </div>
          <div className="mt-0.5 text-[16px] font-semibold tracking-tight leading-snug text-[var(--fg)]">
            “Trace every lead from WhatConverts through Zapier into Salesforce.”
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="talk-wave" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="text-[11px] font-medium text-[var(--fg)] inline-flex items-center gap-1">
            Open 20-view report <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </section>
  );
}
