import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
export function ProjectCard({ project, index }: { project: Project; index: number }) {
 return <article className={`project-card project-tone-${index % 3}`}>
 <Link className="project-art" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}><div className="art-header"><span>BUILD / 0{index + 1}</span><span>{project.status}</span></div><div className="project-orbit" aria-hidden="true"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-axis" /><span className="orbit-satellite sat-one" /><span className="orbit-satellite sat-two" /><div className="orbit-core">{["RAG", "QA", "AGENT", "CRM", "HITL", "GEO"][index % 6]}<small>{["KNOWLEDGE", "TEST SYSTEM", "RESEARCH", "INTEGRATIONS", "APPROVAL", "INTELLIGENCE"][index % 6]}</small></div></div><div className="art-footer"><span>{project.stack.slice(0, 2).join(" / ")}</span><span className="round-arrow"><ArrowUpRight size={19} /></span></div></Link>
 <div className="project-copy"><p className="eyebrow">{project.eyebrow}</p><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><ul className="tag-list">{project.stack.slice(0, 4).map(item => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/projects/${project.slug}`}>Engineering case study <ArrowUpRight size={16} /></Link></div></article>;
}
