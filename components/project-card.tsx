import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card" data-reveal>
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

      {project.image ? (
        <Link
          className="project-media"
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.title} case study`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} system overview`}
            width={1600}
            height={900}
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </Link>
      ) : null}

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
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live product
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : project.repository ? (
          <a href={project.repository} target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : (
          <span>
            {project.status === "Automation workflow"
              ? "Workflow documented"
              : "Source not public"}
          </span>
        )}
      </div>
    </article>
  );
}
