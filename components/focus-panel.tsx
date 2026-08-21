"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "@/components/icons";

const focusItems = [
  {
    label: "Automate",
    title: "Operational workflows",
    detail:
      "n8n workflows with structured intake, branching, human approvals, persistence, monitoring, and explicit error paths.",
    meta: "Workflow ownership",
  },
  {
    label: "Integrate",
    title: "Connected business systems",
    detail:
      "REST APIs, webhooks, JSON payloads, databases, Azure services, and AI tools joined through clear contracts and validation.",
    meta: "APIs + data flow",
  },
  {
    label: "Deliver",
    title: "Client-ready implementation",
    detail:
      "Technical discovery, implementation updates, workflow QA, walkthroughs, documentation, and practical handover for the next operator.",
    meta: "Clear communication",
  },
];

export function FocusPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = focusItems[activeIndex];

  return (
    <aside className="focus-panel" aria-label="Systems automation profile">
      <div className="focus-panel-top">
        <div className="focus-portrait-frame">
          <Image
            src="/rehan-profile-suit.png"
            alt="Portrait of Syed Muhammad Rehan"
            width={546}
            height={540}
            priority
          />
        </div>
        <div>
          <p className="eyebrow">Current focus</p>
          <h2>{active.title}</h2>
        </div>
      </div>

      <div className="focus-tabs" role="tablist" aria-label="Portfolio focus areas">
        {focusItems.map((item, index) => (
          <button
            aria-selected={activeIndex === index}
            className={activeIndex === index ? "is-active" : ""}
            key={item.label}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="focus-panel-body" role="tabpanel">
        <p>{active.detail}</p>
        <span>{active.meta}</span>
      </div>

      <div className="focus-panel-footer">
        <div>
          <Sparkles aria-hidden="true" size={16} />
          Workflow ownership
        </div>
        <div>
          <CheckCircle2 aria-hidden="true" size={16} />
          Client delivery
        </div>
      </div>
    </aside>
  );
}
