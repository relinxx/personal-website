"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Database, Layers3, ScanSearch, ShieldCheck } from "lucide-react";
const systems = [
 { name: "Knowledge", title: "From company context to useful answers.", input: "SharePoint content", middle: "Azure AI Search", output: "Copilot + Teams", guard: "Grounded answers · citations · evaluation", detail: "A delivered enterprise knowledge assistant, with a separate guarded analytics path.", href: "/projects/watermark-enterprise-automation", icon: Database },
 { name: "Agents", title: "Research. Review. Refine.", input: "Sources + evidence", middle: "Specialist agents", output: "Validated report", guard: "Quality review · revision · persistence", detail: "Explicit routing controls the path from collected evidence to a structured research output.", href: "/projects/multi-agent-research-automation", icon: Layers3 },
 { name: "Quality", title: "From browser actions to test evidence.", input: "Browser state", middle: "MCP + Playwright", output: "Test + execution result", guard: "URL checks · timeouts · file limits", detail: "An agent implementation with test generation, execution controls, and streamed progress.", href: "/projects/qa-application", icon: ScanSearch },
] as const;
export function SystemCanvas() {
 const [active, setActive] = useState(0); const system = systems[active]; const Icon = system.icon;
 return <div className="system-canvas"><div className="canvas-top"><span className="tiny-square" /> INSIDE THE ENGINEERING</div><div className="canvas-tabs" aria-label="Explore system architectures">{systems.map((item,index) => <button type="button" key={item.name} aria-pressed={active === index} onClick={() => setActive(index)}>{item.name}</button>)}</div><div className="canvas-body" aria-live="polite" aria-atomic="true"><Icon size={25} className="canvas-icon" aria-hidden="true" /><h2>{system.title}</h2><ol className="hero-flow"><li>{system.input}</li><li>{system.middle}</li><li>{system.output}</li></ol><p className="flow-guard"><ShieldCheck size={17} aria-hidden="true" />{system.guard}</p><p className="canvas-detail">{system.detail}</p><Link className="text-link" href={system.href}>Explore the implementation <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>;
}
