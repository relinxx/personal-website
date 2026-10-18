import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectEvidence } from "@/components/project-evidence";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
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
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const idxStr = String(projectIndex + 1).padStart(2, "0");

  return (
    <main
      id="main-content"
      className="mx-auto max-w-[1100px] px-4 pt-28 pb-16 sm:px-6"
    >
      {/* Top Breadcrumb */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[13px] text-[var(--muted)] hover:text-[var(--fg)] transition"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>
        <Link
          href="/#work"
          className="text-[12px] font-mono text-[var(--muted)] hover:text-[var(--fg)] transition"
        >
          Case Study {idxStr} / {String(projects.length).padStart(2, "0")}
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="label-row mb-3 flex-wrap">
          <span className="font-mono text-[11px]">{idxStr}</span>
          <span>·</span>
          <span className="text-[var(--fg)]">{project.kindLabel}</span>
          <span>·</span>
          <span>{project.platform}</span>
          <span>·</span>
          <span className="font-mono">{project.year}</span>
        </div>

        <h1 className="text-[clamp(28px,4.4vw,50px)] font-semibold tracking-tight leading-[1.06] text-[var(--fg)]">
          {project.title}
        </h1>
        <p className="mt-3 max-w-[760px] text-[16.5px] leading-relaxed text-[var(--muted)]">
          {project.summary}
        </p>
      </header>

      {/* Cover Banner */}
      <div className="raised mb-10 overflow-hidden rounded-[28px]">
        {project.image ? (
          <div className="relative aspect-[16/8.5] w-full overflow-hidden bg-black/30">
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.title} system overview`}
              width={1600}
              height={850}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
        ) : (
          <div
            className="p-7 sm:p-10 text-white"
            style={{
              background:
                "linear-gradient(145deg, #061a14 0%, #0b2e23 52%, #07121e 100%)",
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-emerald-300">
              <span>
                CLIENT ARCHITECTURE BLUEPRINT · WATERMARK CONSTRUCTIONS
              </span>
              <span>LOGIC POWERED SOLUTIONS · AUG 2025 – AUG 2026</span>
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-300">
                      {m.label}
                    </div>
                    <div className="mt-1 text-[20px] font-semibold font-mono text-white">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2-Column Sticky Case Study Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Sticky Facts Card */}
        <aside className="facts-card raised rounded-[24px] p-6 lg:sticky lg:top-24 h-fit">
          <div className="facts-head">
            <span className="label">Project Facts</span>
            <span
              className={`facts-pill ${
                project.statusState === "shipped"
                  ? "facts-pill--live"
                  : "facts-pill--wip"
              }`}
            >
              <span className="facts-pill-dot" />
              {project.status}
            </span>
          </div>

          <dl className="facts-dl mt-4">
            <div className="facts-row">
              <dt>Category</dt>
              <dd>{project.kindLabel}</dd>
            </div>
            <div className="facts-row">
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
            <div className="facts-row">
              <dt>Timeline</dt>
              <dd className="font-mono">{project.year}</dd>
            </div>
            {project.metrics?.map((m) => (
              <div key={m.label} className="facts-row">
                <dt>{m.label}</dt>
                <dd className="font-mono">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="facts-divider" />

          <div className="label mb-2.5">Built With</div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-2.5 py-1 text-[11px] text-[var(--fg)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2">
            {project.reportUrl && (
              <Link
                href={project.reportUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#30d158] px-4 py-2.5 text-[12.5px] font-semibold text-black hover:opacity-90 transition"
              >
                Open 20-View Work Report ↗
              </Link>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-4 py-2.5 text-[12.5px] font-medium text-[var(--bg)] hover:opacity-90 transition"
              >
                Explore Live Demo ↗
              </a>
            )}

            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--card-2)] px-4 py-2.5 text-[12.5px] font-medium text-[var(--fg)] hover:border-[var(--fg)]/30 transition"
              >
                View GitHub Repository ↗
              </a>
            )}
          </div>
        </aside>

        {/* Right Editorial & Evidence Column */}
        <div className="lg:col-span-2 space-y-6">
          <section className="raised rounded-[24px] p-7">
            <div className="label">01 · Problem &amp; Context</div>
            <h2 className="mt-1 text-[20px] font-semibold tracking-tight text-[var(--fg)]">
              What the system needed to solve
            </h2>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--muted)]">
              {project.problem}
            </p>
          </section>

          <section className="raised rounded-[24px] p-7">
            <div className="label">02 · Ownership &amp; Architecture</div>
            <h2 className="mt-1 text-[20px] font-semibold tracking-tight text-[var(--fg)]">
              What I engineered and owned
            </h2>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--muted)]">
              {project.role}
            </p>

            <div className="mt-5 space-y-2.5 border-t border-[var(--hairline)] pt-5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)]">
                System Architecture Flow
              </div>
              {project.architecture.map((step, idx) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--hairline)] bg-[var(--card-2)] p-3.5"
                >
                  <span className="font-mono text-[11px] font-semibold text-[var(--accent)] mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-[var(--fg)]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="raised rounded-[24px] p-7">
            <div className="label">03 · Measured Outcome &amp; Highlights</div>
            <h2 className="mt-1 text-[20px] font-semibold tracking-tight text-[var(--fg)]">
              Production impact &amp; verification
            </h2>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13.5px] text-[var(--fg)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#30d158] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interactive / Detailed Project Evidence */}
          <ProjectEvidence slug={project.slug} />
        </div>
      </div>

      {/* Next Project Card */}
      {nextProject && (
        <Link
          href={`/projects/${nextProject.slug}`}
          className="raised raised-hover mt-12 flex items-center justify-between rounded-[24px] p-6 block"
        >
          <div>
            <div className="label">Next Case Study</div>
            <div className="mt-1 text-[20px] font-semibold tracking-tight text-[var(--fg)]">
              {nextProject.title} —{" "}
              <span className="text-[var(--muted)] font-normal">
                {nextProject.eyebrow}
              </span>
            </div>
          </div>
          <span className="text-2xl text-[var(--muted)]">›</span>
        </Link>
      )}
    </main>
  );
}
