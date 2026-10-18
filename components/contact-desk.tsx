"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

const inquiryTopics = [
  "AI / RAG System",
  "CRM & Webhook Automation",
  "Guardrailed NL2SQL",
  "Full-Time / Contract Role",
];

const overlapSlots = [
  {
    id: "eu-uk",
    label: "UK / EU Overlap",
    window: "13:00 – 19:00 PKT (09:00 – 15:00 London)",
  },
  {
    id: "us-east",
    label: "US East Overlap",
    window: "18:00 – 23:00 PKT (09:00 – 14:00 EST)",
  },
  {
    id: "async-loom",
    label: "Async Walkthrough",
    window: "Same-day architecture brief or Loom review",
  },
];

const walkthroughTopics = [
  "Watermark Enterprise RAG & 3-DB NL2SQL Deep Dive",
  "Builders of Authority 20-View CRM & Attribution Audit",
  "Live n8n + FastAPI + Next.js Workflow Demos",
];

export function ContactDesk() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(inquiryTopics[0]);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(overlapSlots[0].id);
  const [selectedWalkthrough, setSelectedWalkthrough] = useState(
    walkthroughTopics[0]
  );

  function handleCopyEmail() {
    navigator.clipboard
      ?.writeText(profile.email)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      })
      .catch(() => {
        /* ignore */
      });
  }

  function handleInquirySubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio Inquiry · ${selectedTopic}] from ${senderName || "Hiring Team"}`
    );
    const body = encodeURIComponent(
      `Hi Rehan,\n\nTopic: ${selectedTopic}\nName: ${senderName || "—"}\nEmail: ${senderEmail || "—"}\n\nDetails:\n${
        message || "I'd love to discuss an engineering role or project with you."
      }\n`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  function handleRequestWalkthrough() {
    const slotObj =
      overlapSlots.find((s) => s.id === selectedSlot) ?? overlapSlots[0];
    const subject = encodeURIComponent(
      `[Walkthrough Request] ${selectedWalkthrough}`
    );
    const body = encodeURIComponent(
      `Hi Rehan,\n\nI'd like to schedule a walkthrough covering:\n• Focus: ${selectedWalkthrough}\n• Preferred Window: ${slotObj.label} (${slotObj.window})\n\nBest regards,`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="mt-24 scroll-mt-24">
      <div className="talk-stage raised rounded-[32px] p-7 sm:p-11">
        <div className="talk-glow talk-glow--a" />
        <div className="talk-glow talk-glow--b" />

        {/* Header Row */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
          <span className="island-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11.5px] font-medium text-white">
            <span className="h-2 w-2 rounded-full bg-[#30d158]" />
            {profile.availability} · {profile.location}
          </span>
          <span className="font-mono text-[11.5px] text-[var(--muted)]">
            Response time · typically &lt; 12h
          </span>
        </div>

        <div className="relative z-10 mt-6 max-w-[760px]">
          <h2 className="text-[clamp(28px,4vw,46px)] font-semibold tracking-tight leading-[1.08] text-[var(--fg)]">
            Have an AI system, RAG pipeline, or CRM workflow that needs to work
            in production?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
            Whether you’re hiring for an Applied AI / Backend Engineer, a
            Systems &amp; Revenue Operations Specialist, or scoping a client
            build — reach out directly or pick a walkthrough topic below.
          </p>
        </div>

        {/* Direct Email & Copy Bar */}
        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2.5">
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-2.5 text-[13px] font-medium text-[var(--bg)] hover:opacity-90 transition"
          >
            <span>{profile.email}</span>
            <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-4 py-2.5 text-[12.5px] font-medium text-[var(--fg)] hover:border-[var(--fg)]/30 transition"
          >
            {copied ? "✓ Copied to clipboard" : "Copy email address"}
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] px-4 py-2.5 text-[12.5px] font-medium text-[var(--muted)] hover:text-[var(--fg)] transition"
          >
            Download Resume PDF ↗
          </a>
        </div>

        {/* Two-Column Interactive Desk */}
        <div className="desk relative z-10 mt-8">
          {/* LEFT DESK CARD: Quick Message Composer */}
          <form onSubmit={handleInquirySubmit} className="desk-card">
            <div>
              <div className="desk-card-head">
                <span className="desk-step">01 · Direct Brief</span>
                <span className="text-[11px] font-mono text-[var(--muted)]">
                  Opens pre-filled email
                </span>
              </div>
              <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-[var(--fg)]">
                Send a role or project brief
              </h3>
              <p className="mt-0.5 text-[12.5px] text-[var(--muted)]">
                Select what you’re hiring or building for:
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {inquiryTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`desk-chip ${
                      selectedTopic === topic ? "is-on" : ""
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                <label className="desk-field">
                  <span>Your Name</span>
                  <input
                    type="text"
                    placeholder="Alex Rivera"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                </label>
                <label className="desk-field">
                  <span>Work Email</span>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                  />
                </label>
              </div>

              <label className="desk-field mt-2.5">
                <span>Role / System Context</span>
                <textarea
                  rows={3}
                  placeholder="Tell me about the stack, role scope, or workflow bottleneck..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-[var(--hairline)]">
              <span className="text-[11px] text-[var(--muted)]">
                Direct to {profile.email}
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--fg)] px-4 py-2 text-[12.5px] font-medium text-[var(--bg)] hover:opacity-90 transition"
              >
                Compose Brief <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>

          {/* RIGHT DESK CARD: Live System Walkthrough Picker */}
          <div className="desk-card">
            <div>
              <div className="desk-card-head">
                <span className="desk-step">02 · Live Walkthrough</span>
                <span className="text-[11px] font-mono text-[#30d158]">
                  ● PKT (UTC+5) Overlap
                </span>
              </div>
              <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-[var(--fg)]">
                Book a 20-minute architecture walkthrough
              </h3>
              <p className="mt-0.5 text-[12.5px] text-[var(--muted)]">
                Pick a production system to inspect together:
              </p>

              <div className="mt-3 space-y-1.5">
                {walkthroughTopics.map((topic) => {
                  const active = selectedWalkthrough === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedWalkthrough(topic)}
                      className={`w-full text-left rounded-xl border px-3.5 py-2.5 text-[12.5px] font-medium transition flex items-center justify-between gap-2 ${
                        active
                          ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]"
                          : "border-[var(--hairline)] bg-[var(--card)] text-[var(--fg)] hover:border-[var(--fg)]/30"
                      }`}
                    >
                      <span className="line-clamp-1">{topic}</span>
                      <span className="font-mono text-[11px] shrink-0">
                        {active ? "Selected" : "Select"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <div className="text-[10.5px] font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                  Preferred Timezone Window
                </div>
                <div className="grid gap-1.5">
                  {overlapSlots.map((slot) => {
                    const active = selectedSlot === slot.id;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlot(slot.id)}
                        className={`rounded-xl border px-3.5 py-2 text-left transition flex items-center justify-between gap-2 ${
                          active
                            ? "border-[#2997ff] bg-[#2997ff]/12 text-[var(--fg)]"
                            : "border-[var(--hairline)] bg-[var(--card)] text-[var(--muted)] hover:text-[var(--fg)]"
                        }`}
                      >
                        <span className="text-[12px] font-semibold text-[var(--fg)]">
                          {slot.label}
                        </span>
                        <span className="text-[11px] font-mono">
                          {slot.window}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-[var(--hairline)]">
              <span className="text-[11px] text-[var(--muted)]">
                Includes live demos &amp; repo tour
              </span>
              <button
                type="button"
                onClick={handleRequestWalkthrough}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#2997ff] px-4 py-2 text-[12.5px] font-medium text-white hover:opacity-90 transition"
              >
                Request Walkthrough <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom 6 Tactile Contact Cards */}
        <div className="relative z-10 mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          <a href={profile.links.email} className="contact-card">
            <span className="contact-ic">@</span>
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold text-[var(--fg)] truncate">
                Email Direct
              </div>
              <div className="text-[11px] text-[var(--muted)] truncate">
                {profile.email}
              </div>
            </div>
            <span className="contact-arr">↗</span>
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-ic">in</span>
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold text-[var(--fg)] truncate">
                LinkedIn
              </div>
              <div className="text-[11px] text-[var(--muted)] truncate">
                linkedin.com/in/relinxx
              </div>
            </div>
            <span className="contact-arr">↗</span>
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-ic">GH</span>
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold text-[var(--fg)] truncate">
                GitHub
              </div>
              <div className="text-[11px] text-[var(--muted)] truncate">
                github.com/relinxx
              </div>
            </div>
            <span className="contact-arr">↗</span>
          </a>

          <Link href="/reports/builders-of-authority" className="contact-card">
            <span className="contact-ic">20</span>
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold text-[var(--fg)] truncate">
                BOA 20-View Report
              </div>
              <div className="text-[11px] text-[var(--muted)] truncate">
                Salesforce · Zapier · GHL · ClickUp
              </div>
            </div>
            <span className="contact-arr">→</span>
          </Link>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-ic">CV</span>
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold text-[var(--fg)] truncate">
                Resume PDF
              </div>
              <div className="text-[11px] text-[var(--muted)] truncate">
                Syed-Muhammad-Rehan-Resume.pdf
              </div>
            </div>
            <span className="contact-arr">↗</span>
          </a>

          <Link href="/projects" className="contact-card">
            <span className="contact-ic">19</span>
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold text-[var(--fg)] truncate">
                All Projects &amp; Apps
              </div>
              <div className="text-[11px] text-[var(--muted)] truncate">
                10 Case Studies + 9 Workflow Apps
              </div>
            </div>
            <span className="contact-arr">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
