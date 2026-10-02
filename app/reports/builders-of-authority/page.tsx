import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { screenshots } from "./screenshots";
import { ArrowLeft, ArrowUpRight, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Builders of Authority — Work Report",
  description: "A closer look at Rehan’s CRM integration, automation development, attribution QA, and technical delivery at Builders of Authority.",
  alternates: { canonical: "/reports/builders-of-authority" },
  openGraph: { title: "Builders of Authority — Integration Work Report", description: "Workflow architecture, record reconciliation, and delivery evidence from Rehan’s systems automation work.", url: "/reports/builders-of-authority", images: [{ url: "/reports/builders-of-authority/opengraph-image", width: 1200, height: 630 }] },
};

const contributions = [
  { status: "Follow-up required", title: "Lead synchronization QA", type: "Investigate / validate", body: "Compared WhatConverts lead events, Zapier execution steps, and Salesforce destination records. A five-form sample matched the CRM; a later two-form check surfaced a duplicate customer account.", outcome: "Recorded sample-level evidence and flagged the duplicate for follow-up. Its final resolution was not established in the report." },
  { status: "Sample verified", title: "Routing and record reconciliation", type: "Trace / explain", body: "Investigated missing call records and excluded wrong-number events. For a separate three-form sample, traced the active global integration even though a dedicated Zap was disabled.", outcome: "Confirmed destination creation for the reviewed forms and distinguished completed actions from halted lookup branches." },
  { status: "Verification pending", title: "CRM onboarding", type: "Configure / coordinate", body: "Configured a GoHighLevel subaccount using available business information and documented the dependencies for colleague verification and landing-page delivery.", outcome: "Setup documented; verification and revision remained part of the delivery process." },
  { status: "Access blocked", title: "Attribution rebuild", type: "Plan / diagnose", body: "Worked on the requirements for a Housecall Pro → Zapier → WhatConverts rebuild: source events, matching, value accuracy, duplicate handling, and reconciliation.", outcome: "Documented an access blocker. Deployment acceptance remained dependent on restored client access." },
  { status: "Decision pending", title: "Booking attribution", type: "Troubleshoot / escalate", body: "Investigated a WhatConverts permission error and a Calendly plan dependency affecting the proposed booking-tracking path.", outcome: "Communicated the constraints and requested internal sign-off while the client decision remained pending." },
];
const systems = [
  { name: "Zapier", detail: "Event routing, conditional paths, JavaScript transformations, lead matching, and quote / sales-value updates." },
  { name: "GoHighLevel", detail: "Client CRM configuration, follow-up sequences, enrollment rules, response handling, and operational handoffs." },
  { name: "n8n", detail: "Webhooks, payload preparation, state persistence, scheduled checks, and AI-assisted workflows with explicit review." },
  { name: "ClickUp", detail: "Requirements, QA evidence, access dependencies, implementation updates, and technical handover." },
];

export default function BoaWorkReport() {
  return <main id="main-content"><article className="case-study shell boa-report">
    <Link className="report-back" href="/#work"><ArrowLeft size={15} aria-hidden="true" /> Back to selected work</Link>
    <header className="report-hero">
      <p className="eyebrow">BUILDERS OF AUTHORITY / WORK REPORT</p>
      <h1>Connecting leads.<br /><span>Keeping the evidence.</span></h1>
      <p className="report-lead">CRM integrations, automation development, and the judgment behind reliable technical delivery.</p>
      <div className="report-byline"><span>Syed Muhammad Rehan</span><span>Senior Systems Automation Specialist</span><span>October 2026</span></div>
    </header>
    <aside className="report-summary"><p className="eyebrow">AT A GLANCE</p><h2>Integration delivery, with a traceable record.</h2><p>I build, modify, and investigate the workflows connecting lead capture, CRMs, quote and sales values, and operational reporting. This report follows the work across Zapier, n8n, GoHighLevel, and ClickUp: what I checked, what the evidence confirmed, and what still depended on access or follow-up.</p><div><span>Workflow logic</span><span>Execution & reconciliation</span><span>Delivery & handover</span></div></aside>
    <nav className="report-nav" aria-label="Report sections"><a href="#scope">Role & scope</a><a href="#contributions">Contributions</a><a href="#architecture">Architecture</a><a href="#screenshots">Screenshot evidence</a><a href="#delivery">Delivery practice</a></nav>
    <section className="case-section" id="scope"><div className="case-section-heading"><p className="eyebrow">01 / THE ROLE</p><h2>Engineering across the handoffs.</h2></div><div className="report-prose"><p>I work on the systems connecting marketing inquiries, client CRMs, quotes, sales events, and operational reporting. My responsibilities span integration development, technical investigation, QA, CRM onboarding, and delivery coordination.</p><p>The senior responsibility is the judgment across those systems: translating business stages into events, validating destination records, investigating exceptions, preserving attribution, and explaining what still needs attention.</p><ul className="tag-list">{["Zapier", "n8n", "GoHighLevel", "WhatConverts", "Salesforce", "JavaScript", "ClickUp"].map(tool => <li key={tool}>{tool}</li>)}</ul></div></section>
    <section className="report-contributions" id="contributions"><div className="report-section-title"><p className="eyebrow">02 / DOCUMENTED CONTRIBUTIONS</p><h2>Specific work.<br /><span>Clear outcomes.</span></h2><p>Examples from authored QA reports and delivery assignments. Each distinguishes the work performed from the outcome confirmed.</p></div><div className="report-card-grid">{contributions.map((item, index) => <article className="report-card" key={item.title}><div className="report-card-top"><span className="mono">0{index + 1}</span><span>{item.type}</span></div><h3>{item.title}</h3><p>{item.body}</p><div className="report-outcome"><span className={`outcome-status ${item.status === "Sample verified" ? "verified" : "pending"}`}>{item.status}</span><p>{item.outcome}</p></div></article>)}</div></section>
    <section className="report-architecture" id="architecture"><div className="report-section-title"><p className="eyebrow">03 / SYSTEMS ARCHITECTURE</p><h2>From the event<br /><span>to the correct record.</span></h2><p>Illustrated workflow patterns, with client identities and production payloads omitted.</p></div>
      <div className="report-flow"><div><Workflow size={22} aria-hidden="true" /><h3>Lead synchronization</h3></div><ol>{["Form / call event", "WhatConverts", "Route & transform", "Find CRM record", "Validate destination"].map(step => <li key={step}>{step}</li>)}</ol><p>Trace the source event and routing decision, then compare the destination record with the expected fields.</p></div>
      <div className="report-flow"><div><Workflow size={22} aria-hidden="true" /><h3>Quote & sales attribution</h3></div><ol>{["Quote / sales event", "Normalize values", "Match original lead", "Apply conditions", "Update attributed value"].map(step => <li key={step}>{step}</li>)}</ol><p>Keep the source event, identity match, and value mapping connected so a commercial outcome updates the relevant lead.</p></div>
      <div className="report-flow"><div><Workflow size={22} aria-hidden="true" /><h3>Review activity monitoring</h3></div><ol>{["Review webhook", "Persist baseline", "Scheduled check", "Silence & cooldown", "Alert for review"].map(step => <li key={step}>{step}</li>)}</ol><p>A stateful monitoring pattern in the supported environment. A review gap prompts investigation; it does not by itself establish a failed connection.</p></div>
      <div className="report-systems">{systems.map(system => <article key={system.name}><h3>{system.name}</h3><p>{system.detail}</p></article>)}</div>
    </section>
    <section className="report-gallery" id="screenshots" aria-labelledby="screenshots-title">
      <div className="report-section-title"><p className="eyebrow">04 / SCREENSHOT EVIDENCE · 20 VIEWS</p><h2 id="screenshots-title">The systems.<br /><span>The work behind them.</span></h2><p>Actual screenshots from my work record, spanning workflow architecture, execution history, CRM configuration, and delivery documentation. Select an image to inspect it at full size. Solid boxes cover private customer records, contact details, and webhook addresses; the remaining screenshot content is preserved.</p></div>
      <h3 className="gallery-subtitle">Start here: three representative views</h3>
      <div className="report-gallery-grid representative-gallery">{[1, 3, 5].map(index => <Screenshot key={index} index={index} />)}</div>
      {[
        { title: "Workflow architecture & transformations", indices: [2, 12, 13, 15, 16, 17] },
        { title: "Reconciliation & delivery evidence", indices: [0, 8, 11, 18] },
        { title: "CRM configuration & shared systems", indices: [4, 6, 7, 9, 10, 14, 19] },
      ].map(group => <details className="gallery-group" key={group.title}><summary>{group.title}<span>{group.indices.length} views · expand</span></summary><div className="report-gallery-grid">{group.indices.map(index => <Screenshot key={index} index={index} />)}</div></details>)}
    </section>
    <section className="case-section" id="delivery"><div className="case-section-heading"><p className="eyebrow">05 / DELIVERY PRACTICE</p><h2>A useful handover starts with usable evidence.</h2></div><ol className="architecture-list">{["Define the trigger, inputs, mapping, routing, and expected result before declaring the integration complete.", "Compare source events, execution steps, and destination records. Record the sample, exceptions, and unresolved follow-up.", "Distinguish built, modified, maintained, reviewed, and coordinated work when documenting personal contributions.", "Communicate access and platform dependencies clearly; retain walkthroughs and acceptance evidence for the next operator."].map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol></section>
    <aside className="report-note"><p className="eyebrow">ABOUT THIS REPORT</p><p>Adapted from my October 2026 work record. Sample checks describe their reviewed events, not a full historical audit or a measured business-wide improvement. Shared workflows are distinguished from individual contributions. Screenshots show the recorded state at capture time. Selected private details are redacted in the public images; private source links are excluded.</p></aside>
    <div className="case-next"><p>Explore the broader integration case study.</p><Link href="/projects/boa-crm-integrations">CRM integration & revenue attribution <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
  </article></main>;
}

function Screenshot({ index }: { index: number }) {
 const shot = screenshots[index];
 return <figure className="report-shot"><a className="report-shot-image" href={`/reports/boa/${shot.file}`} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${shot.title}`}><Image src={`/reports/boa/${shot.file}`} alt={`${shot.platform}: ${shot.title}`} width={shot.width} height={shot.height} sizes={index === 1 ? "(max-width: 800px) 92vw, 1200px" : "(max-width: 800px) 92vw, 46vw"} /><span>View full size <ArrowUpRight size={15} aria-hidden="true" /></span></a><figcaption><div className="report-shot-meta"><span>{String(index + 1).padStart(2,"0")}</span><span>{shot.platform}</span></div><h3>{shot.title}</h3><p>{shot.caption}</p></figcaption></figure>;
}
