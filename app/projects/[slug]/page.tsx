import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Github,
} from "@/components/icons";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Syed Muhammad Rehan`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content">
      <article className="case-study shell">
        <Link className="back-link" href="/#work">
          <ArrowRight aria-hidden="true" size={16} />
          Back to selected work
        </Link>

        <header className="case-header">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
          <div className="case-status">
            <span>{project.status}</span>
            <p>
              {project.repository
                ? "Public source is available. A polished demo will be added after deployment and security review."
                : "This work is documented without exposing private source code, credentials, or client data."}
            </p>
            {project.repository && (
              <a href={project.repository} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" size={17} />
                View repository
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            )}
          </div>
        </header>

        <div className="case-grid">
          <section className="case-panel">
            <p className="eyebrow">The problem</p>
            <h2>What the system needed to solve</h2>
            <p>{project.problem}</p>
          </section>
          <section className="case-panel">
            <p className="eyebrow">My role</p>
            <h2>What I owned</h2>
            <p>{project.role}</p>
          </section>
        </div>

        <section className="case-section">
          <div className="case-section-heading">
            <p className="eyebrow">Architecture</p>
            <h2>How the pieces work together</h2>
          </div>
          <ol className="architecture-list">
            {project.architecture.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-section case-outcomes">
          <div className="case-section-heading">
            <p className="eyebrow">Highlights</p>
            <h2>What makes this work meaningful</h2>
          </div>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 aria-hidden="true" size={18} />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="case-section case-stack">
          <div className="case-section-heading">
            <p className="eyebrow">Stack</p>
            <h2>Tools used</h2>
          </div>
          <ul className="tag-list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="case-next">
          <p>Looking for a production-minded AI engineer?</p>
          <a href="mailto:rehankaneki@gmail.com">
            Start a conversation
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </article>
    </main>
  );
}
