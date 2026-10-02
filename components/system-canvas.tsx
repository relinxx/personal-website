"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Bot, Braces, Database, FileText, FlaskConical, Layers3, MessageSquare, Pause, Play, ScanSearch, ShieldCheck } from "lucide-react";
import styles from "./system-canvas.module.css";
const systems = [
 { name: "Knowledge", label: "01 / GROUNDED INTELLIGENCE", title: "Context in. Answers out.", input: "SharePoint", inputDetail: "Company knowledge", middle: "Retrieve + ground", middleDetail: "Azure AI Search · RAG", output: "Copilot + Teams", outputDetail: "Answers with citations", guard: "Grounding + evaluation", detail: "A delivered knowledge assistant with source retrieval and a separate guarded analytics path.", metric: "20,934", metricLabel: "indexed records", method: "RAG", methodLabel: "source-grounded retrieval", href: "/projects/watermark-enterprise-automation", inputIcon: FileText, middleIcon: Database, outputIcon: MessageSquare },
 { name: "Agents", label: "02 / MULTI-AGENT ORCHESTRATION", title: "Research. Review. Refine.", input: "Sources + evidence", inputDetail: "Retrieve and deduplicate", middle: "Specialist agents", middleDetail: "Research · review · synthesize", output: "Structured report", outputDetail: "Validate and persist", guard: "Quality gate + revision", detail: "Research moves through specialist agents, a review gate, and an explicit revision branch.", metric: "Review", metricLabel: "before delivery", method: "n8n + API", methodLabel: "workflow orchestration", href: "/projects/multi-agent-research-automation", inputIcon: ScanSearch, middleIcon: Layers3, outputIcon: Braces },
 { name: "Quality", label: "03 / AGENTIC SOFTWARE TESTING", title: "From intent to test evidence.", input: "Browser state", inputDetail: "Discover application flows", middle: "QA agent", middleDetail: "MCP + Playwright", output: "Test + result", outputDetail: "Stream execution progress", guard: "URL checks + run limits", detail: "An implementation for test generation and bounded execution. The public worker is currently unavailable.", metric: "Playwright", metricLabel: "generated test execution", method: "SSE", methodLabel: "streamed progress", href: "/projects/qa-application", inputIcon: ScanSearch, middleIcon: Bot, outputIcon: FlaskConical },
] as const;
export function SystemCanvas() {
 const [active, setActive] = useState(0);
 const [paused, setPaused] = useState(false);
 const system = systems[active];
 const nodes = [
  { title: system.input, detail: system.inputDetail, Icon: system.inputIcon },
  { title: system.middle, detail: system.middleDetail, Icon: system.middleIcon },
  { title: system.output, detail: system.outputDetail, Icon: system.outputIcon },
 ];
 return <div className={styles.canvas} data-paused={paused}>
  <div className={styles.top}><span className={styles.ident}><span className={styles.dot} /> SYSTEM EXPLORER</span><span className={styles.topNote}>ARCHITECTURE / 0{active + 1}</span></div>
  <div className={styles.tabs} aria-label="Explore system architectures">{systems.map((item,index) => <button type="button" key={item.name} aria-pressed={active === index} onClick={() => setActive(index)}><span className={styles.tabNumber}>0{index + 1}</span>{item.name}<span className={styles.tabIndicator} /></button>)}</div>
  <div key={system.name} className={styles.content}>
   <div className={styles.heading}><p>{system.label}</p><h2>{system.title}</h2></div>
   <div className={styles.stage} aria-label={`${system.input} to ${system.middle} to ${system.output}`}>
    <div className={styles.grid} aria-hidden="true" /><div className={styles.wire} aria-hidden="true"><span className={styles.packet} /><span className={styles.packetSecond} /></div>
    <span className={styles.sideLabel} aria-hidden="true">INPUT<br />↓<br />PROCESS<br />↓<br />OUTPUT</span><span className={styles.guard}><ShieldCheck size={15} aria-hidden="true" /><span>Validation<br />at the boundary</span></span>
    <ol className={styles.nodes}>{nodes.map(({title,detail,Icon},index) => <li className={`${styles.node} ${index === 1 ? styles.engine : ""}`} key={title} style={{animationDelay:`${index * 2}s`}}><span className={styles.nodeIcon}><Icon size={index === 1 ? 23 : 18} strokeWidth={1.5} aria-hidden="true" /></span><span><strong>{title}</strong><small>{detail}</small></span><span className={styles.nodeLight} aria-hidden="true" /></li>)}</ol>
    <div className={styles.walkthrough}><span>Animated architecture illustration</span><button type="button" aria-label={paused ? "Play architecture animation" : "Pause architecture animation"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}</button></div>
   </div>
   <div className={styles.guardLine}><ShieldCheck size={15} aria-hidden="true" />{system.guard}</div>
   <div className={styles.facts}><div><strong>{system.metric}</strong><span>{system.metricLabel}</span></div><div><strong>{system.method}</strong><span>{system.methodLabel}</span></div></div>
   <p className={styles.detail}>{system.detail}</p><Link className={styles.link} href={system.href}>Explore the implementation <ArrowUpRight size={17} aria-hidden="true" /></Link>
  </div>
 </div>;
}
