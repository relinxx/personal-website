import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-label">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.eyebrow}</span>
      </div>

      <Link
        className="project-media"
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} interface`}
            width={1600}
            height={1000}
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        ) : (
          <span className="project-placeholder">{project.status}</span>
        )}
      </Link>

      <div className="project-card-copy">
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <Link className="inline-link" href={`/projects/${project.slug}`}>
          View project
          <ArrowUpRight aria-hidden="true" size={14} />
        </Link>
      </div>
    </article>
  );
}
