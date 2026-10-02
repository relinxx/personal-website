import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code2, Layers3, Workflow, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { SystemCanvas } from "@/components/system-canvas";
import { ProjectCard } from "@/components/project-card";
import { CopyEmail } from "@/components/copy-email";
import { profile, projects, experiences, education, certifications } from "@/data/portfolio";
const selectedSlugs = ["watermark-enterprise-automation", "boa-crm-integrations", "qa-application", "multi-agent-research-automation", "leadership-briefing-approval-automation", "geovision"];
const expertise = [
 { icon: Layers3, title: "Knowledge retrieval & guarded data access", description: "Ground answers in documents, route questions to the right schema, and validate the path from question to result.", tools: ["Azure AI Search", "Python", "SQL", "RAG"], href: "/projects/watermark-enterprise-automation", proof: "See the Watermark implementation" },
 { icon: Code2, title: "Agents with observable execution", description: "Connect model decisions to tools, make the control points explicit, and expose execution progress and failure boundaries.", tools: ["MCP", "Playwright", "Node.js", "SSE"], href: "/projects/qa-application", proof: "Explore the QA agent architecture" },
 { icon: Workflow, title: "Integration investigation & attribution QA", description: "Follow events across business systems, validate destination records, and document exceptions and delivery dependencies.", tools: ["n8n", "Zapier", "GoHighLevel", "REST APIs"], href: "/reports/builders-of-authority", proof: "Read the BOA work evidence" },
];
export default function Home() {
 return <main id="main-content">
  <section className="hero shell" aria-labelledby="hero-heading">
   <div className="hero-meta"><span className="availability"><span className="signal-dot" /> Open to AI & software roles</span><span className="mono hero-location">PAKISTAN · REMOTE WORLDWIDE</span></div>
   <div className="hero-grid"><div className="hero-copy">
    <p className="eyebrow">SYED MUHAMMAD REHAN / AI & SOFTWARE ENGINEER</p>
    <h1 id="hero-heading">AI connected to<br />{" "}<span>real business.</span></h1>
    <p className="hero-description">Enterprise knowledge systems, AI agents, and dependable business integrations. I own the work from architecture and validation to deployment and handover.</p>
    <p className="hero-proof">Watermark delivery: <strong>20,934 indexed records</strong> · <strong>3 Azure SQL databases</strong></p>
    <div className="hero-actions"><a className="button button-primary" href="#work">Explore selected work <ArrowDown size={18} aria-hidden="true" /></a><a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer">Résumé · PDF <Download size={18} aria-hidden="true" /></a></div>
    <div className="hero-person"><Image src="/rehan-profile-suit.png" width={48} height={48} alt="Syed Muhammad Rehan" priority /><div><strong>Engineering across the whole workflow.</strong><span>Senior Systems Automation Specialist · Builders of Authority</span></div></div>
   </div><SystemCanvas /></div>
   <div className="hero-bottom"><span>Client systems. Documented decisions. Working software.</span><Link href="/projects/watermark-enterprise-automation">Start with Watermark <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
  </section>
  <section className="section shell" id="work">
   <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>From the problem<br /><span>to the handover.</span></h2></div><p>Start with client delivery. Then explore the integrations, agents, and control points behind the work.</p></div>
   <div className="project-grid">{selectedSlugs.slice(0, 3).map((slug, index) => <ProjectCard key={slug} project={projects.find(p => p.slug === slug)!} index={index} />)}</div>
   <div className="supporting-heading"><h3>Further explorations</h3><p>Research orchestration, human decisions, and geospatial intelligence.</p></div>
   <div className="supporting-grid">{selectedSlugs.slice(3).map((slug, index) => <ProjectCard key={slug} project={projects.find(p => p.slug === slug)!} index={index + 3} />)}</div>
   <details className="more-projects"><summary>More from the engineering notebook <span>+ {projects.length - selectedSlugs.length} projects</span></summary><div>{projects.filter(p => !selectedSlugs.includes(p.slug)).map(p => <Link key={p.slug} href={`/projects/${p.slug}`}><span><strong>{p.title}</strong><small>{p.eyebrow}</small></span><ArrowUpRight size={20} aria-hidden="true" /></Link>)}</div></details>
  </section>
  <section className="shell report-feature" aria-labelledby="report-feature-title"><div><p className="eyebrow">INSIDE THE WORK / BUILDERS OF AUTHORITY</p><h2 id="report-feature-title">The workflow is only half the story.</h2><p>20 documented views of integration logic, execution evidence, CRM configuration, and delivery follow-through. Start with three representative examples.</p></div><Link className="button button-secondary" href="/reports/builders-of-authority">Explore the work report <ArrowUpRight size={18} aria-hidden="true" /></Link></section>
  <section className="experience-section" id="experience"><div className="section shell">
   <div className="section-heading"><div><p className="eyebrow">02 / EXPERIENCE</p><h2>Implementation ownership.<br /><span>Operational follow-through.</span></h2></div><p>Technical discovery, software development, integration QA, and clear communication with the people using the system.</p></div>
   <div className="timeline">{experiences.map((job, index) => <article className="experience-row" key={job.company}><div className="experience-date"><span>{job.period}</span>{index === 0 && <span className="current-badge">Current role</span>}</div><div className="experience-company"><h3>{job.company}</h3><p>{job.role}</p><span>{job.location}</span></div><div className="experience-detail"><p>{job.summary}</p><ul>{job.highlights.slice(0, 3).map(point => <li key={point}>{point}</li>)}</ul>{index < 2 && <Link className="text-link" href={index === 0 ? "/reports/builders-of-authority" : "/projects/watermark-enterprise-automation"}>{index === 0 ? "BOA work report" : "Watermark case study"}<ArrowUpRight size={17} aria-hidden="true" /></Link>}</div></article>)}</div>
   <div className="education-row"><p className="eyebrow">EDUCATION</p><div><h3>{education.school}</h3><p>{education.degree}</p></div><span>2022 — 2026</span></div>
  </div></section>
  <section className="section shell" id="skills"><div className="section-heading"><div><p className="eyebrow">03 / EXPERTISE</p><h2>Capabilities,<br /><span>connected to evidence.</span></h2></div><p>Clear boundaries, useful evaluation, and understandable systems. Each capability has a build behind it.</p></div>
   <div className="expertise-grid">{expertise.map(area => <article className="expertise-card" key={area.title}><area.icon size={28} strokeWidth={1.5} aria-hidden="true" /><h3>{area.title}</h3><p>{area.description}</p><Link className="text-link" href={area.href}>{area.proof}<ArrowUpRight size={17} aria-hidden="true" /></Link><ul className="tag-list">{area.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></article>)}</div>
   <details className="credentials"><summary>Education beyond the degree <span>{certifications.length} learning credentials</span></summary><div className="credential-list">{certifications.map(cert => <a href={cert.credentialUrl} key={cert.title} target="_blank" rel="noreferrer"><span>{cert.title}<small>{cert.issuer} · {cert.completed}</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>)}</div></details>
  </section>
  <section className="contact-section" id="contact"><div className="shell contact-inner"><div><p className="eyebrow"><span className="signal-dot" /> AVAILABLE FOR THE NEXT BUILD</p><h2>Let’s build<br />something <em>useful.</em></h2><p>AI & software engineering · Full-time or contract.<br />Remote worldwide · On-site in Islamabad and Rawalpindi.</p><a className="contact-email" href={profile.links.email}>{profile.email}<ArrowUpRight size={24} aria-hidden="true" /></a><CopyEmail email={profile.email} /></div><div className="contact-links"><a href={profile.resume} target="_blank" rel="noreferrer">Download résumé · PDF <Download size={20} aria-hidden="true" /></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={20} aria-hidden="true" /></a><a href={profile.links.github} target="_blank" rel="noreferrer">Explore GitHub <Github size={20} aria-hidden="true" /></a></div></div></section>
 </main>;
}
