import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
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

  if (!project) return {};

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

  if (!project) notFound();

  const moreProjects = projects
    .filter((item) => item.slug !== project.slug && item.featured && item.image)
    .slice(0, 3);

  return (
    <main id="main-content">
      <article className="case-study shell">
        <Link className="back-link" href="/#work">Back to projects</Link>

        {project.image ? (
          <figure className="case-hero-image">
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.title} system overview`}
              width={1920}
              height={1080}
              sizes="(max-width: 760px) 100vw, 1200px"
              priority
            />
          </figure>
        ) : null}

        <header className="case-intro">
          <div>
            <p className="section-label">{project.eyebrow} / {project.status}</p>
            <h1>{project.title}</h1>
          </div>
          <div>
            <p>{project.summary}</p>
            <div className="case-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live product <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              )}
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer">
                  Repository <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              )}
            </div>
          </div>
        </header>

        <div className="case-two-column">
          <section>
            <p className="section-label">The problem</p>
            <h2>What needed to change</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <p className="section-label">My contribution</p>
            <h2>What I owned</h2>
            <p>{project.role}</p>
          </section>
        </div>

        <section className="case-block">
          <header className="rule-heading">
            <h2>System Architecture</h2>
          </header>
          <ol className="architecture-list">
            {project.architecture.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-block">
          <header className="rule-heading">
            <h2>Highlights</h2>
          </header>
          <div className="highlight-grid">
            {project.highlights.map((highlight) => (
              <p key={highlight}>{highlight}</p>
            ))}
          </div>
          <p className="stack-line">{project.stack.join(" · ")}</p>
        </section>

        <section className="more-projects">
          <h2>More Projects</h2>
          <div>
            {moreProjects.map((item) => (
              <Link href={`/projects/${item.slug}`} key={item.slug}>
                <Image
                  src={item.image!}
                  alt={item.imageAlt ?? `${item.title} interface`}
                  width={640}
                  height={400}
                  sizes="(max-width: 760px) 100vw, 30vw"
                />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
