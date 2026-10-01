"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Braces, Database, Layers3, ScanSearch, ShieldCheck, Workflow } from "lucide-react";
const systems = [
  { name: "Knowledge", code: "RAG / 01", title: "From documents to grounded answers.", input: "SharePoint", middle: "Retrieve + ground", output: "Teams assistant", branch: "Azure AI Search", guard: "Citations + evaluation", detail: "Enterprise knowledge retrieval with indexed source material, grounded responses, and a defined evaluation set.", href: "/projects/watermark-enterprise-automation", icon: Database },
  { name: "Agents", code: "AGENTS / 02", title: "Research. Review. Refine.", input: "Research request", middle: "Specialist agents", output: "Validated report", branch: "Evidence + vectors", guard: "Review + revision", detail: "Multiple evidence sources feed researcher, reviewer, and synthesis agents. Quality gates control revision and structured delivery.", href: "/projects/multi-agent-research-automation", icon: Layers3 },
  { name: "Quality", code: "QA / 03", title: "Give software a second set of eyes.", input: "Browser flow", middle: "MCP + Playwright", output: "Streamed results", branch: "Test generation", guard: "URL + path checks", detail: "A browser QA agent discovers application flows, generates and executes tests, and streams progress through server-sent events.", href: "/projects/qa-application", icon: ScanSearch },
] as const;
export function SystemCanvas() {
  const [active, setActive] = useState(0);
  const system = systems[active]; const Icon = system.icon;
  return <div className="system-canvas">
    <div className="canvas-top"><span><span className="tiny-square" /> SYSTEM ARCHITECTURE</span><Braces size={17} aria-hidden="true" /></div>
    <div className="canvas-tabs" aria-label="Explore system architectures">{systems.map((item, index) => <button type="button" key={item.name} aria-pressed={active === index} onClick={() => setActive(index)}>{item.name}<span>0{index + 1}</span></button>)}</div>
    <div className="canvas-body" aria-live="polite" aria-atomic="true">
      <div className="canvas-title"><span className="mono">{system.code}</span><h2>{system.title}</h2></div>
      <div className="flow-diagram" aria-label={`${system.input} connects to ${system.middle}, with ${system.branch} and ${system.guard}, then ${system.output}`}>
        <svg viewBox="0 0 500 250" preserveAspectRatio="none" aria-hidden="true"><path d="M250 38 V87 M250 150 V214 M96 126 H179 M321 126 H404" /><path className="flow-signal" d="M250 38 V87 M250 150 V214" /></svg>
        <div className="flow-node node-input"><Workflow size={14} />{system.input}</div><div className="flow-node node-branch"><Database size={14} />{system.branch}</div>
        <div className="flow-node node-center"><Icon size={26} /><strong>{system.middle}</strong><span>ORCHESTRATION LAYER</span></div>
        <div className="flow-node node-guard"><ShieldCheck size={14} />{system.guard}</div><div className="flow-node node-output"><span className="signal-dot" />{system.output}</div>
      </div>
      <p className="canvas-detail">{system.detail}</p><div className="canvas-bottom"><span>Architecture overview</span><Link href={system.href}>Explore the build <ArrowUpRight size={15} /></Link></div>
    </div>
  </div>;
}
