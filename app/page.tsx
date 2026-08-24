import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PortfolioEffects } from "@/components/portfolio-effects";
import { ProjectCard } from "@/components/project-card";
import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  proofPoints,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

  return (
    <main id="main-content">
      <PortfolioEffects />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <h1>
            I&apos;m Syed Muhammad Rehan, a software engineer building AI systems,
            automation, and data products from Pakistan. <a href={profile.links.email}>Available</a>{" "}
            for remote work and collaborations.
          </h1>
          <div className="hero-links">
            <a href={profile.resume}>Resume</a>
            <a href={profile.cv}>Full CV</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <Image
            src="/rehan-profile-suit.png"
            alt="Portrait of Syed Muhammad Rehan"
            width={560}
            height={560}
            priority
            sizes="(max-width: 760px) 76vw, 35vw"
          />
        </figure>
      </section>

      <section className="portfolio-section shell" id="work">
        <header className="rule-heading">
          <h2>Projects</h2>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            All repositories <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </header>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="portfolio-section shell" id="experience">
        <header className="rule-heading">
          <h2>Selected Experience</h2>
        </header>

        <div className="feature-row">
          <div className="feature-copy">
            <p className="section-label">Current role</p>
            <h3>Software Engineer at Logic Powered Solutions</h3>
            <p>{experiences[0].summary}</p>
            <ul className="plain-list">
              {experiences[0].highlights.slice(0, 3).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <span className="meta-line">{experiences[0].period} / {experiences[0].location}</span>
          </div>
          <Link className="feature-image" href="/projects/multi-agent-research-automation">
            <Image
              src="/projects/multi-agent-rag-research-pipeline.png"
              alt="Multi-agent research workflow designed in n8n"
              width={1600}
              height={900}
              sizes="(max-width: 760px) 100vw, 54vw"
            />
          </Link>
        </div>

        <div className="experience-archive">
          {experiences.slice(1).map((experience) => (
            <article key={`${experience.company}-${experience.role}`}>
              <span>{experience.period}</span>
              <div>
                <h3>{experience.role} / {experience.company}</h3>
                <p>{experience.summary}</p>
              </div>
              <span>{experience.location}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section shell" id="about">
        <header className="rule-heading">
          <h2>About Me</h2>
        </header>

        <div className="about-grid">
          <div className="about-copy">
            <p>{profile.summary}</p>
            <p>
              My software engineering foundation helps me treat AI as part of a larger
              product system: data, APIs, safeguards, testing, deployment, monitoring,
              and the client conversation around all of it.
            </p>
            <p>
              {education.degree}, {education.school}. {education.project}
            </p>
          </div>

          <div className="service-list" aria-label="Areas of work">
            {skillGroups.map((group, index) => (
              <section key={group.title}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                </div>
                <p>{group.skills.join(" / ")}</p>
              </section>
            ))}
          </div>
        </div>

        <p className="skills-line">
          Python&nbsp; · &nbsp;FastAPI&nbsp; · &nbsp;n8n&nbsp; · &nbsp;Azure&nbsp; · &nbsp;SQL&nbsp; ·
          &nbsp;RAG&nbsp; · &nbsp;AI Agents&nbsp; · &nbsp;Docker&nbsp; · &nbsp;REST APIs&nbsp; ·
          &nbsp;Vector Search
        </p>
      </section>

      <section className="portfolio-section shell evidence-section">
        <header className="rule-heading">
          <h2>Evidence From Delivered Work</h2>
        </header>
        <div className="evidence-grid">
          {proofPoints.map((point) => (
            <article key={point.value}>
              <strong>{point.value}</strong>
              <p>{point.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section shell" id="credentials">
        <header className="rule-heading">
          <h2>Credentials</h2>
        </header>
        <div className="credential-grid">
          {certifications.map((certificate) => (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noreferrer"
              key={certificate.credentialId}
            >
              <span>{certificate.completed}</span>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <span className="inline-link">
                View credential <ArrowUpRight aria-hidden="true" size={13} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="portfolio-section shell contact-section" id="contact">
        <header className="rule-heading">
          <h2>Say Hello</h2>
        </header>
        <div className="contact-grid">
          <div>
            <p>
              Looking for someone who can turn an AI or automation brief into a
              working, testable system and explain the decisions clearly?
            </p>
            <p>
              I usually reply within 24 hours. Email me at{" "}
              <a href={profile.links.email}>{profile.email}</a>.
            </p>
          </div>
          <div className="contact-actions">
            <a href={profile.links.email}>Start a conversation</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}
