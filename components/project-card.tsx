import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-row${project.image ? "" : " project-row-text"}`}>
      <span className="project-index" aria-hidden="true">
        0{index + 1}
      </span>

      <div className="project-content">
        <div className="project-heading">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-status">{project.status}</span>
        </div>

        <p className="project-summary">{project.summary}</p>

        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.stack.slice(0, 6).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          <Link href={`/projects/${project.slug}`}>
            Case study
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live product
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          ) : project.repository ? (
            <a href={project.repository} target="_blank" rel="noreferrer">
              Repository
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          ) : null}
        </div>
      </div>

      {project.image ? (
        <Link
          className="project-media"
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.title} case study`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} interface`}
            width={1600}
            height={900}
            sizes="(max-width: 760px) 100vw, 44vw"
          />
        </Link>
      ) : (
        <div className="project-proof" aria-label={`${project.title} highlights`}>
          <span>Key evidence</span>
          <ul>
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
