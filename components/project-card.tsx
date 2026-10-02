import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { WatermarkArchitecture } from "@/components/project-evidence";
import styles from "./project-card.module.css";
const previews: Record<string, { title: string; copy: string; image?: string; alt?: string }> = {
 "watermark-enterprise-automation": { title: "Enterprise knowledge. Guarded analytics.", copy: "Two connected AI systems for Watermark Constructions: grounded answers from company content and validated analytics across three Azure SQL databases. Owned from discovery to deployment and handover." },
 "boa-crm-integrations": { title: "Follow the event. Verify the record.", copy: "CRM integrations, quote and sales-value attribution, and documented QA across client accounts.", image: "/reports/boa/02-zapier-quote-workflow.jpg", alt: "Zapier quote-value workflow with filters, JavaScript, and lead matching" },
 "qa-application": { title: "From browser flow to executable test.", copy: "An MCP and Playwright agent with generated tests, bounded execution, and streamed progress.", image: "/projects/qa-agent-lab.png", alt: "QA Agent Lab authentication scenario and sandbox boundaries" },
 "multi-agent-research-automation": { title: "Research with a review loop.", copy: "Source retrieval, evidence scoring, specialist agents, and revision before delivery." },
 "leadership-briefing-approval-automation": { title: "AI analysis. Human authority.", copy: "Structured triage and risk analysis with explicit approve, revise, and reject branches." },
 geovision: { title: "Three perspectives on land use.", copy: "Environmental suitability, zoning retrieval, and spatial planning in one final-year project.", image: "/projects/geovision-preview.png", alt: "GeoVision public welcome interface" },
};
export function ProjectCard({ project, index }: { project: Project; index: number }) {
 const preview = previews[project.slug]; const image = preview?.image ?? project.image;
 return <article className={`${styles.card} ${index === 0 ? styles.flagship : ""}`}>
 <Link className={styles.preview} href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
 <div className={styles.label}><span>{index === 0 ? "FEATURED / WATERMARK CONSTRUCTIONS" : project.eyebrow}</span><ArrowUpRight size={20} aria-hidden="true" /></div>
 {project.slug === "watermark-enterprise-automation" ? <WatermarkArchitecture compact /> : image ? <Image src={image} alt={preview?.alt ?? project.imageAlt ?? project.title} width={1280} height={720} sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 620px" /> : null}
 <span className={styles.caption}>{project.slug === "qa-application" ? "Public sandbox interface · worker currently unavailable" : project.slug === "geovision" ? "Public application entry · sign-in required" : project.slug === "boa-crm-integrations" ? "Actual workflow · private details redacted" : project.image ? "Actual workflow · explore its control points" : "Delivered architecture · simplified public view"}</span></Link>
 <div className={styles.copy}><p className="eyebrow">{project.status}</p><h3><Link href={`/projects/${project.slug}`}>{preview?.title ?? project.title}</Link></h3><p>{preview?.copy ?? project.summary}</p>
 {index === 0 && <div className={styles.facts}><div><strong>20,934</strong><span>indexed records</span></div><div><strong>3</strong><span>Azure SQL databases</span></div><div><strong>15 cases</strong><span>bounded evaluation</span></div></div>}
 <ul className="tag-list">{project.stack.slice(0, 4).map(item => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/projects/${project.slug}`}>{index === 0 ? "Read the Watermark case study" : "Explore the engineering"} <ArrowUpRight size={17} aria-hidden="true" /></Link></div></article>;
}
