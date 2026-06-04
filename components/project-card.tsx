import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-number" aria-hidden="true">
        0{index + 1}
      </div>
      <div className="project-card-top">
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
        </div>
        <span className={`status-badge status-${project.status.toLowerCase().replace(" ", "-")}`}>
          {project.status}
        </span>
      </div>

      <p className="project-summary">{project.summary}</p>

      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.stack.slice(0, 5).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-links">
        <Link href={`/projects/${project.slug}`}>
          View case study
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
        {project.repository ? (
          <a href={project.repository} target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : (
          <span>Source not public</span>
        )}
      </div>
    </article>
  );
}
