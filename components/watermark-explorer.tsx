"use client";

import { useRef, useState } from "react";
import { ArrowRight, Database, FileText, ShieldCheck, Download, Check, CircleAlert } from "lucide-react";
import { examples, type ExampleResult } from "@/lib/watermark-example";
import styles from "./watermark-explorer.module.css";

export function WatermarkExplorer() {
  const [lane, setLane] = useState("knowledge");
  const [selected, setSelected] = useState("access");
  const [result, setResult] = useState<ExampleResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const generation = useRef(0);
  function choose(id: string) { generation.current += 1; setSelected(id); setResult(null); setError(""); setBusy(false); }
  async function inspect() {
    const request = ++generation.current;
    setBusy(true); setError(""); setResult(null);
    try {
      const response = await fetch("/api/watermark-example", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: selected }) });
      const value = await response.json();
      if (!response.ok) throw new Error(value.error || "The example could not be loaded.");
      if (request === generation.current) setResult(value);
    } catch (e) { if (request === generation.current) setError(e instanceof Error ? e.message : "Unable to load example."); }
    finally { if (request === generation.current) setBusy(false); }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([JSON.stringify({ ...result, provenance: "Synthetic public example, not client output" }, null, 2)], { type: "application/json" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = `watermark-example-${selected}.json`; anchor.click(); URL.revokeObjectURL(url);
  }
  return <section className={styles.explorer} aria-labelledby="watermark-explorer-title">
    <header><div><p className="eyebrow">INTERACTIVE ARCHITECTURE WALKTHROUGH</p><h2 id="watermark-explorer-title">Follow a question to its evidence.</h2></div><span className={styles.label}>Synthetic public examples</span></header>
    <p className={styles.disclosure}>An independent reconstruction of the design decisions. No connection to Watermark’s systems. SQL is displayed as a template; sample results are computed from fixed records.</p>
    <div className={styles.workspace}>
      <aside><div className={styles.tabs} role="group" aria-label="Example path">{["knowledge", "analytics"].map(value => <button key={value} aria-pressed={lane === value} onClick={() => { setLane(value); choose(value === "knowledge" ? "access" : "overdue"); }}>{value === "knowledge" ? <FileText size={16} /> : <Database size={16} />}{value === "knowledge" ? "Knowledge" : "Analytics"}</button>)}</div>
      <h3>Choose a question</h3><div className={styles.questions}>{examples.filter(item => item.lane === lane).map(item => <button key={item.id} aria-pressed={selected === item.id} onClick={() => choose(item.id)}>{item.title}<ArrowRight size={15} /></button>)}</div>
      <button className={styles.run} disabled={busy} onClick={inspect}>{busy ? "Inspecting…" : "Inspect this path"}<ArrowRight size={16} /></button>
      <small>Includes a supported answer, missing evidence and a refused write request.</small></aside>
      <div className={styles.output} aria-live="polite">{error && <p role="alert">{error}</p>}{!result ? <div className={styles.empty}><ShieldCheck size={38} /><h3>Inspect the checks before the answer.</h3><p>Choose a question to see its route, evidence and execution boundary.</p></div> : <>
        <div className={styles.resultHeader}><span className={styles.label}>{result.status.replaceAll("_", " ")}</span><button onClick={download} aria-label="Download example evidence"><Download size={17} /></button></div>
        <h3>{result.title}</h3><p className={styles.answer}>{result.answer}</p>
        <ol className={styles.checks}>{result.checks.map((check, index) => <li key={check.title}><span className={styles.step}>{index + 1}</span><div><strong>{check.title}</strong><p>{check.detail}</p></div>{check.state === "passed" ? <Check size={18} /> : <CircleAlert size={18} />}</li>)}</ol>
        {result.citations.map(citation => <article className={styles.citation} key={citation.id}><strong>[{citation.id}] {citation.title}</strong><small>{citation.location}</small><blockquote>{citation.passage}</blockquote></article>)}
        {result.sql && <details open><summary>Query template and bound parameters</summary><pre>{result.sql}</pre><pre>{JSON.stringify(result.parameters, null, 2)}</pre></details>}
        {result.columns.length > 0 && <div className={styles.table}><table><caption>{result.source} · {result.rows.length} matching sample records</caption><thead><tr>{result.columns.map(column => <th key={column}>{column}</th>)}</tr></thead><tbody>{result.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>}
      </>}</div>
    </div>
  </section>;
}
