"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, Check, CircleAlert, CircleCheck, FileText, Gauge, MapPin, ShieldCheck } from "lucide-react";
import { liveDemoEvidence } from "@/data/live-demo-evidence";
import { WatermarkExplorer } from "@/components/watermark-explorer";
import styles from "./portfolio-live-demos.module.css";

type DemoSlug = "watermark" | "qa" | "sentinel" | "geovision";
const projectFor: Record<DemoSlug, string> = {
  watermark: "watermark-enterprise-automation",
  qa: "qa-application",
  sentinel: "industrial-sentinel",
  geovision: "geovision",
};
const productInfo: Record<DemoSlug, { name: string; eyebrow: string; title: string; summary: string }> = {
  watermark: {
    name: "Knowledge and Analytics",
    eyebrow: "WATERMARK · INDEPENDENT PUBLIC EXAMPLE",
    title: "Follow the question to its evidence.",
    summary: "Explore citation-backed answers and guarded read-only analytics with invented records.",
  },
  qa: {
    name: "Release Checks",
    eyebrow: "QA AGENT LAB · SAVED RUN EVIDENCE",
    title: "Tests that earn their pass.",
    summary: "Review a generated browser journey, its repeat run, and the defects the assertions caught.",
  },
  sentinel: {
    name: "Pump Inspection",
    eyebrow: "INDUSTRIAL SENTINEL · SAVED INFERENCE",
    title: "Every prediction has a history.",
    summary: "Replay a simulated sensor episode and inspect model evidence, uncertainty, and review state.",
  },
  geovision: {
    name: "Site Comparison",
    eyebrow: "GEOVISION · SYNTHETIC PARCELS",
    title: "Compare the land. Keep the reasoning.",
    summary: "Change the scoring balance, inspect data gaps, and record a local shortlist decision.",
  },
};

export function PortfolioProjectDemo({ slug }: { slug: DemoSlug }) {
  const info = productInfo[slug];
  return (
    <main className={styles.page + " " + styles[slug]}>
      <header className={styles.topbar}>
        <Link className={styles.brand} href="/projects" aria-label="Back to projects">
          <span className={styles.brandMark}>{slug === "qa" ? "Q/" : slug === "sentinel" ? "IS" : slug === "geovision" ? "G" : "W"}</span>
          <span>{info.name}<small>{info.eyebrow}</small></span>
        </Link>
        <nav className={styles.topLinks} aria-label="Demo navigation">
          <Link href={"/projects/" + projectFor[slug]}><ArrowLeft size={15} /> Case study</Link>
          <span className={styles.demoBadge}><span /> Interactive public demo</span>
        </nav>
      </header>
      {slug === "watermark" ? <WatermarkDemo info={info} /> : null}
      {slug === "qa" ? <QaDemo info={info} /> : null}
      {slug === "sentinel" ? <SentinelDemo info={info} /> : null}
      {slug === "geovision" ? <GeoDemo info={info} /> : null}
      <footer className={styles.disclosure}>
        <ShieldCheck size={15} aria-hidden="true" />
        <span>Public sample only. It uses saved or synthetic evidence; it does not connect to client systems, live equipment, or an arbitrary browser target.</span>
      </footer>
    </main>
  );
}

function WatermarkDemo({ info }: { info: (typeof productInfo)["watermark"] }) {
  return (
    <section className={styles.ragContent}>
      <div className={styles.intro}>
        <p className={styles.kicker}>{info.eyebrow}</p>
        <h1>{info.title}</h1>
        <p>{info.summary}</p>
      </div>
      <div className={styles.ragFacts}>
        <span><FileText size={16} /> Passage citations</span>
        <span><ShieldCheck size={16} /> Read-only analytics</span>
        <span><CircleAlert size={16} /> Missing evidence stays visible</span>
      </div>
      <WatermarkExplorer />
    </section>
  );
}

function QaDemo({ info }: { info: (typeof productInfo)["qa"] }) {
  const [journey, setJourney] = useState<"purchase" | "lead">("purchase");
  const [variant, setVariant] = useState("healthy");
  const [tab, setTab] = useState<"results" | "plan" | "method">("results");
  const suite = liveDemoEvidence.qa[journey];
  const selected = suite.results.find((result) => result.variant === variant) || suite.results[0];
  const passed = suite.results.filter((result) => result.status === "passed").length;
  const failed = suite.results.filter((result) => result.status === "failed").length;
  function chooseJourney(next: "purchase" | "lead") {
    setJourney(next);
    setVariant("healthy");
    setTab("results");
  }
  return (
    <section className={styles.qaContent}>
      <div className={styles.qaHero}>
        <div><p className={styles.kicker}>{info.eyebrow}</p><h1>{info.title}</h1><p>{info.summary}</p></div>
        <div className={styles.scoreCard}><span>SEED DEFECTS CAUGHT</span><strong>{suite.quality.detected}<i>/{suite.quality.total}</i></strong><small>in this isolated fixture</small></div>
      </div>
      <div className={styles.qaSteps}>
        {["Observe the page", "Lock the outcome", "Run it twice", "Challenge the test"].map((label, i) => <div key={label}><b>0{i + 1}</b><span>{label}</span></div>)}
      </div>
      <div className={styles.qaGrid}>
        <aside className={styles.qaRail}>
          <p className={styles.kicker}>RECORDED JOURNEYS</p>
          <h2>Choose a run</h2>
          <button className={journey === "purchase" ? styles.selectedJourney : ""} onClick={() => chooseJourney("purchase")}>Purchase approval <small>3 assertions</small></button>
          <button className={journey === "lead" ? styles.selectedJourney : ""} onClick={() => chooseJourney("lead")}>CRM lead creation <small>5 assertions</small></button>
          <div className={styles.qaContract}><span>ACCEPTANCE CONTRACT</span><p>{suite.goal}</p><b>{suite.target} → {suite.expected}</b></div>
          <p className={styles.qaNote}>These are saved local fixture results. The public page does not run generated code.</p>
        </aside>
        <div className={styles.qaReport}>
          <div className={styles.reportHead}><div><p className={styles.kicker}>VERIFIED RUN RECORD</p><h2>{suite.title}</h2></div><span className={styles.statusPill}><CircleCheck size={15} /> Verified</span></div>
          <div className={styles.qaMetrics}>
            <div><span>DEFECTS FOUND</span><strong>{suite.quality.detected}/{suite.quality.total}</strong></div>
            <div><span>REPEATABLE</span><strong>{suite.quality.repeatable ? "Yes" : "No"}</strong></div>
            <div><span>RUNS</span><strong>{suite.results.length}</strong></div>
            <div><span>GREEN / RED</span><strong>{passed} / {failed}</strong></div>
          </div>
          <div className={styles.qaTabs} role="tablist" aria-label="Run evidence">
            <button role="tab" aria-selected={tab === "results"} onClick={() => setTab("results")}>Results</button>
            <button role="tab" aria-selected={tab === "plan"} onClick={() => setTab("plan")}>Validated plan</button>
            <button role="tab" aria-selected={tab === "method"} onClick={() => setTab("method")}>Quality gate</button>
          </div>
          {tab === "results" ? <div className={styles.qaRunBody}>
            <p className={styles.kicker}>ASSERTION RESULT · {selected.variant.toUpperCase()}</p>
            <div className={styles.expectation}><span>Expected outcome</span><strong>{selected.expected}</strong></div>
            <div className={styles.expectation}><span>Observed outcome</span><strong className={selected.status === "passed" ? styles.good : styles.bad}>{selected.received}</strong></div>
            {selected.status === "failed" ? <div className={styles.failedCall}><CircleAlert size={16} /><span>Correctly failed at <code>{selected.failedStep}</code></span></div> : <div className={styles.passCall}><Check size={16} /><span>Assertion passed in {(selected.duration / 1000).toFixed(1)}s</span></div>}
            <div className={styles.variantList}>{suite.results.map((result) => <button key={result.variant} aria-pressed={variant === result.variant} onClick={() => setVariant(result.variant)}><span className={result.status === "passed" ? styles.statusDotGood : styles.statusDotBad} />{result.variant}<small>{result.status}</small></button>)}</div>
          </div> : null}
          {tab === "plan" ? <ol className={styles.planList}>{suite.steps.map((step, i) => <li key={i}><span>0{i + 1}</span><div><b>{step.action.replace("_", " ")}</b><code>{step.target}{step.value ? " → " + step.value : ""}</code></div><Check size={15} /></li>)}</ol> : null}
          {tab === "method" ? <div className={styles.methodBody}>
            <div className={styles.passCall}><ShieldCheck size={17} /><span>Repeatability gate passed; the two known defects failed at the expected outcome assertion.</span></div>
            <p>{suite.quality.scope}</p>
            <div className={styles.methodSteps}><span>Observed targets only</span><span>Expected result held constant</span><span>Fresh browser contexts</span><span>Known defects challenged</span></div>
            <small>Runs were captured on 15–16 October 2026 in a local isolated fixture. No claim is made about coverage across an entire application.</small>
          </div> : null}
        </div>
      </div>
    </section>
  );
}

const sensorChoices = [
  { key: "vibration_rms", label: "Vibration", unit: "mm/s", color: "#ffb454" },
  { key: "bearing_temp", label: "Bearing temperature", unit: "°C", color: "#61d7c5" },
  { key: "flow_rate", label: "Flow rate", unit: "m³/h", color: "#92aaff" },
  { key: "motor_current", label: "Motor current", unit: "A", color: "#f37d78" },
] as const;
type SensorKey = (typeof sensorChoices)[number]["key"];

function SentinelDemo({ info }: { info: (typeof productInfo)["sentinel"] }) {
  const record = liveDemoEvidence.sentinel;
  const [signal, setSignal] = useState<SensorKey>("vibration_rms");
  const [cursor, setCursor] = useState(359);
  const timelineAt = record.timeline.findIndex((item) => item.second <= record.trace[cursor].second);
  const activeTimeline = record.timeline[Math.max(0, timelineAt)];
  const sensor = sensorChoices.find((item) => item.key === signal) || sensorChoices[0];
  const series = record.trace.map((point) => point[signal]);
  const min = Math.min(...series);
  const max = Math.max(...series);
  const path = useMemo(() => {
    const span = max - min || 1;
    return series.map((value, i) => (i === 0 ? "M " : "L ") + (18 + (i / (series.length - 1)) * 764).toFixed(1) + " " + (176 - ((value - min) / span) * 150).toFixed(1)).join(" ");
  }, [series, min, max]);
  const sample = record.trace[cursor];
  return (
    <section className={styles.sentinelContent}>
      <div className={styles.sentinelHero}><div><p className={styles.kicker}>{info.eyebrow}</p><h1>{info.title}</h1><p>{info.summary}</p></div><div className={styles.modelChip}><span>MODEL CANDIDATE</span><strong>{record.predicted.replace("_", " ")}</strong><small>Operator review suggested</small></div></div>
      <div className={styles.assetStrip}><div className={styles.pumpDrawing}><span className={styles.pumpPipe} /><span className={styles.pumpBody}><Gauge size={34} /></span><span className={styles.pumpEngine} /><span className={styles.pumpLabel}>SIMULATED PUMP · 01</span></div><div className={styles.sensorReadings}>{sensorChoices.map((item) => <div key={item.key}><span>{item.label}</span><strong>{Number(sample[item.key]).toFixed(1)} <small>{item.unit}</small></strong></div>)}</div></div>
      <div className={styles.sentinelGrid}>
        <aside className={styles.signalControls}>
          <p className={styles.kicker}>REPLAY THE HISTORY</p><h2>Sensor trace</h2>
          <label htmlFor="sensor-choice">Signal</label><select id="sensor-choice" value={signal} onChange={(event) => setSignal(event.target.value as SensorKey)}>{sensorChoices.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}</select>
          <div className={styles.cursorValue}><span>Sample {sample.second + 1} / {record.totalSamples}</span><strong>{Number(sample[signal]).toFixed(2)} <small>{sensor.unit}</small></strong></div>
          <input aria-label="Sensor history position" type="range" min={0} max={record.trace.length - 1} value={cursor} onChange={(event) => setCursor(Number(event.target.value))} />
          <p className={styles.smallNote}>The model uses a 60-sample feature window. Earlier readings are exploratory.</p>
          <div className={styles.uncertainty}><CircleAlert size={16} /><p><b>Review before action.</b> A simulator result is not a maintenance diagnosis.</p></div>
        </aside>
        <div className={styles.sensorPanel}>
          <div className={styles.panelHeading}><div><p className={styles.kicker}>INDEPENDENT SIMULATED EPISODE</p><h2>{sensor.label} · {sensor.unit}</h2></div><span>1 Hz · {record.totalSamples} samples</span></div>
          <div className={styles.chartWrap}><svg viewBox="0 0 800 210" role="img" aria-label={sensor.label + " sensor history line chart"}><path className={styles.chartGrid} d="M18 26H782 M18 76H782 M18 126H782 M18 176H782" /><path className={styles.chartArea} d={path + " L 782 184 L 18 184 Z"} /><path className={styles.chartLine} d={path} style={{ stroke: sensor.color }} /><line className={styles.cursorLine} x1={18 + (cursor / (series.length - 1)) * 764} x2={18 + (cursor / (series.length - 1)) * 764} y1="18" y2="184" /><circle cx={18 + (cursor / (series.length - 1)) * 764} cy={176 - ((Number(sample[signal]) - min) / (max - min || 1)) * 150} r="5" fill={sensor.color} /></svg><div className={styles.chartAxis}><span>0 sec</span><span>359 sec</span></div></div>
          <div className={styles.panelHeading}><div><p className={styles.kicker}>MODEL RELEASE · {record.model}</p><h3>Classification evidence</h3></div><span>{record.inferenceMs.toFixed(2)} ms inference</span></div>
          <div className={styles.probabilityList}>{Object.entries(record.probabilities).map(([name, value]) => <div key={name}><span>{name.replace("_", " ")}</span><div><i style={{ width: (value * 100) + "%", background: name === record.predicted ? sensor.color : undefined }} /></div><b>{(value * 100).toFixed(1)}%</b></div>)}</div>
          <details className={styles.featureDetails}><summary>What influenced this candidate?</summary><ol>{record.explanations.map((item) => <li key={item.feature}><span>{item.feature.replaceAll("_", " ")}</span><b>{item.contribution > 0 ? "+" : ""}{item.contribution.toFixed(3)}</b></li>)}</ol><small>Feature contributions explain model log-odds; they do not establish physical cause.</small></details>
        </div>
      </div>
      <div className={styles.sentinelBottom}>
        <section className={styles.benchmarkCard}><p className={styles.kicker}>HELD-OUT SYNTHETIC BENCHMARK</p><h2>500 independent episodes</h2><div className={styles.benchmarkStats}><div><strong>{record.benchmark.macroF1.toFixed(3)}</strong><span>Macro F1</span></div><div><strong>{record.benchmark.accepted}</strong><span>Accepted</span></div><div><strong>{record.benchmark.abstained}</strong><span>Abstained</span></div><div><strong>{(record.benchmark.coverage * 100).toFixed(1)}%</strong><span>Set coverage</span></div></div><p>Class and selection decisions use separate train, validation, calibration, and test episode splits.</p></section>
        <section className={styles.timelineCard}><p className={styles.kicker}>CALIBRATED SET OVER TIME</p><h2>Decision timeline</h2><div className={styles.timeline}>{record.timeline.map((item) => <button key={item.second} aria-pressed={activeTimeline.second === item.second} onClick={() => setCursor(Math.min(record.trace.length - 1, item.second))}><span>{item.second}s</span><i className={item.accepted ? styles.timelineAccepted : styles.timelineReview} /><small>{item.accepted ? "accepted" : "review"}</small></button>)}</div><p>At {activeTimeline.second}s the candidate is {activeTimeline.candidate.replace("_", " ")}; {activeTimeline.accepted ? "the calibrated set supports the candidate." : "the calibrated set abstains."}</p></section>
      </div>
      <p className={styles.limitations}>{record.limitations.join(" ")}</p>
    </section>
  );
}

function GeoDemo({ info }: { info: (typeof productInfo)["geovision"] }) {
  const data = liveDemoEvidence.geo;
  const [riskWeight, setRiskWeight] = useState<number>(data.riskWeight);
  const [selected, setSelected] = useState("SAMPLE-01");
  const [shortlist, setShortlist] = useState<string[]>(["SAMPLE-01"]);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const maxArea = Math.max(...data.parcels.map((parcel) => parcel.area));
  const ranked = data.parcels.map((parcel) => ({
    ...parcel,
    score: parcel.risk === null ? null : (1 - parcel.risk) * riskWeight + (parcel.area / maxArea) * (100 - riskWeight),
  })).sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
  const selectedParcel = ranked.find((parcel) => parcel.id === selected) || ranked[0];
  const pointsFor = (parcel: (typeof ranked)[number]) => parcel.coordinates.map((point) => ((point[0] * 72 + 34).toFixed(1) + "," + (340 - point[1] * 34).toFixed(1))).join(" ");
  function toggleShortlist(id: string) {
    setSaved(false);
    setShortlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }
  function exportReview() {
    const payload = { source: data.source, criteria: { lowerRisk: riskWeight, parcelArea: 100 - riskWeight }, shortlist, note, limitations: data.limitations };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "synthetic-site-comparison.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }
  return (
    <section className={styles.geoContent}>
      <div className={styles.geoHero}><div><p className={styles.kicker}>{info.eyebrow}</p><h1>{info.title}</h1><p>{info.summary}</p></div><button className={styles.exportButton} onClick={exportReview}><ArrowDownToLine size={16} /> Export review</button></div>
      <div className={styles.geoCanvas}>
        <aside className={styles.criteriaPanel}><p className={styles.kicker}>01 / CRITERIA</p><h2>What matters most?</h2><p>Move the balance to see which measurements change the order.</p><label htmlFor="risk-weight">Lower environmental risk <b>{riskWeight}%</b></label><input id="risk-weight" type="range" min={0} max={100} value={riskWeight} onChange={(event) => { setRiskWeight(Number(event.target.value)); setSaved(false); }} /><label>Parcel area <b>{100 - riskWeight}%</b></label><div className={styles.formula}><b>How scores work</b><p>Risk points = (1 − risk) × weight.<br />Area points = relative area × weight.</p><p>Missing risk remains unknown. Constraint flags need review.</p></div><div className={styles.scopeBox}><b>Scope</b><p>Three invented parcels. Outlines are normalized, not georeferenced.</p></div></aside>
        <div className={styles.geoMain}>
          <div className={styles.geoMapCard}><div className={styles.mapHead}><div><p className={styles.kicker}>02 / PARCEL LAYOUT</p><h2>Explore the candidates</h2></div><span><MapPin size={14} /> Synthetic shapes</span></div><svg className={styles.parcelMap} viewBox="0 0 840 380" role="img" aria-label="Three synthetic parcel polygons; not a geographic map"><defs><pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth="1" /></pattern></defs><rect width="840" height="380" fill="url(#grid)" />{ranked.map((parcel) => <g key={parcel.id} onClick={() => setSelected(parcel.id)} className={selected === parcel.id ? styles.parcelSelected : styles.parcelShape} role="button" tabIndex={0} aria-label={"Select " + parcel.id} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setSelected(parcel.id); }}><polygon points={pointsFor(parcel)} /><text x={Number(parcel.coordinates[0][0]) * 72 + 52} y={340 - Number(parcel.coordinates[0][1]) * 34 + 24}>{parcel.id}</text></g>)}</svg><div className={styles.mapLegend}><span><i /> Lower risk contribution</span><span><i /> Relative area contribution</span><span><i /> Missing evidence</span></div></div>
          <div className={styles.parcelGrid}>{ranked.map((parcel) => <article key={parcel.id} className={selected === parcel.id ? styles.activeParcel : styles.parcelCard} onClick={() => setSelected(parcel.id)}><div className={styles.parcelCardTop}><span>{parcel.score === null ? "NOT RANKED" : "RANK " + (ranked.filter((item) => item.score !== null).findIndex((item) => item.id === parcel.id) + 1)}</span><span>{parcel.flags.length ? "Review flags" : parcel.risk === null ? "Check data" : "Comparable"}</span></div><h3>{parcel.id}</h3><p>{parcel.zone}</p><strong className={styles.parcelScore}>{parcel.score === null ? "—" : parcel.score.toFixed(1)}<small>{parcel.score === null ? "incomplete evidence" : "/ 100 · weighted score"}</small></strong><dl><div><dt>Area</dt><dd>{parcel.area.toLocaleString()} m²</dd></div><div><dt>Risk</dt><dd>{parcel.risk === null ? "Unknown" : (parcel.risk * 100).toFixed(0) + "%"}</dd></div><div><dt>Flags</dt><dd>{parcel.flags.length ? parcel.flags.join(", ") : "None supplied"}</dd></div></dl><button onClick={(event) => { event.stopPropagation(); toggleShortlist(parcel.id); }}>{shortlist.includes(parcel.id) ? <><Check size={14} /> Shortlisted</> : "Shortlist this parcel"}</button></article>)}</div>
          <div className={styles.decisionArea}><div><p className={styles.kicker}>03 / YOUR DECISION</p><h2>Record the trade-off.</h2><p>Selection changes when criteria change. Save a note with the current shortlist.</p></div><div className={styles.decisionForm}><label htmlFor="decision-note">Why this parcel? What still needs checking?</label><textarea id="decision-note" value={note} onChange={(event) => { setNote(event.target.value); setSaved(false); }} placeholder={"Explain the evidence, compromise, and next check for " + selectedParcel.id + "."} /><div><span>{shortlist.length} shortlisted · saved only in this page</span><button onClick={() => setSaved(true)}>{saved ? <><Check size={14} /> Review saved</> : "Save review"}</button></div>{saved ? <p className={styles.savedNote}>Review captured in page state. Refreshing clears this sample decision.</p> : null}</div></div>
        </div>
      </div>
      <p className={styles.limitations}>{data.source}. {data.limitations.join(" ")}</p>
    </section>
  );
}
