import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "@/components/icons";
import { FocusPanel } from "@/components/focus-panel";
import { PortfolioEffects } from "@/components/portfolio-effects";
import { ProjectCard } from "@/components/project-card";
import {
  certifications,
  deliverySteps,
  education,
  experiences,
  profile,
  projects,
  proofPoints,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main id="main-content">
      <PortfolioEffects />
      <section className="hero shell" data-reveal>
        <div className="hero-copy">
          <p className="availability-pill">
            <span aria-hidden="true" />
            Open to systems automation &amp; client-facing engineering roles
          </p>
          <p className="hero-kicker">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="hero-position">
            I build <span>reliable workflows, integrations, and AI systems</span> from
            brief to handover.
          </p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={profile.resume} download>
              <Download aria-hidden="true" size={17} />
              Download resume
            </a>
            <a className="button button-secondary" href={profile.cv} download>
              Full CV
              <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a className="text-link" href="#work">
              Explore work
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin aria-hidden="true" size={15} />
              {profile.location}
            </span>
            <span>
              <BriefcaseBusiness aria-hidden="true" size={15} />
              Software Engineer at Logic Powered Solutions
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <FocusPanel />
        </div>
      </section>

      <section className="proof-strip" aria-label="Professional proof points" data-reveal>
        <div className="shell proof-grid">
          {proofPoints.map((point) => (
            <div key={point.value}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="delivery" data-reveal>
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Delivery approach</p>
            <h2>From an unclear workflow to an operating system.</h2>
          </div>
          <p>
            I work across the full implementation path, including the client
            conversations that turn business needs into testable technical decisions.
          </p>
        </div>

        <ol className="delivery-grid">
          {deliverySteps.map((step) => (
            <li className="delivery-step" data-reveal key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section shell" id="work" data-reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Automation &amp; integration work</p>
            <h2>Systems designed around the whole workflow.</h2>
          </div>
          <p>
            Client work is described without exposing private source code or data. Public
            repositories are linked only where they are verified.
          </p>
        </div>

        <div className="project-grid">
          {projects
            .filter((project) => project.featured)
            .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
            .map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
        </div>
      </section>

      <section className="section section-contained shell" id="experience" data-reveal>
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Technical ownership, with the client conversations included.</h2>
          </div>
          <p>
            My strongest work sits at the intersection of systems integration, backend
            engineering, automation, applied AI, and clear stakeholder communication.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" data-reveal key={`${experience.company}-${experience.role}`}>
              <div className="timeline-meta">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
              </div>
              <div className="timeline-content">
                <p className="eyebrow">{experience.company}</p>
                <h3>{experience.role}</h3>
                <p className="timeline-summary">{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="skills" data-reveal>
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>A practical stack for connected, reliable operations.</h2>
          </div>
          <p>
            These are tools and disciplines I have used across professional delivery and
            substantial applied projects.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" data-reveal key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="education-card" data-reveal>
          <div>
            <p className="eyebrow">Education</p>
            <h3>{education.degree}</h3>
            <p>
              {education.school} · {education.period}
            </p>
          </div>
          <p>{education.project}</p>
        </article>
      </section>

      <section className="section shell" id="certificates" data-reveal>
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Certificates</p>
            <h2>Fresh proof of cloud and automation focus.</h2>
          </div>
          <p>
            Official LinkedIn Learning credentials connected to the same themes I
            build around: Azure, cloud delivery, and workflow automation.
          </p>
        </div>

        <div className="certification-grid">
          {certifications.map((certificate) => (
            <article className="certification-card" data-reveal key={certificate.credentialId}>
              <a
                className="certificate-preview"
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View the official ${certificate.title} credential`}
              >
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate awarded to Syed Muhammad Rehan`}
                  width={1280}
                  height={989}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                <span>
                  <Award aria-hidden="true" size={16} />
                  View certificate
                </span>
              </a>
              <div>
                <p className="eyebrow">{certificate.issuer}</p>
                <h3>{certificate.title}</h3>
                <p className="certificate-note">{certificate.note}</p>
              </div>
              <dl className="certificate-meta">
                <div>
                  <dt>Completed</dt>
                  <dd>{certificate.completed}</dd>
                </div>
                <div>
                  <dt>Duration</dt>
                  <dd>{certificate.duration}</dd>
                </div>
              </dl>
              <ul className="tag-list" aria-label={`${certificate.title} skills`}>
                {certificate.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <a
                className="certificate-link"
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
              >
                View official credential
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="contact" data-reveal>
        <div className="contact-card">
          <div>
            <p className="eyebrow">Let&apos;s build something useful</p>
            <h2>Need a system that is useful after the demo?</h2>
            <p>
              I&apos;m open to full-time roles involving workflow automation, API
              integrations, client systems, applied AI, and Python or Node.js backends.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={profile.links.email}>
              <Mail aria-hidden="true" size={17} />
              {profile.email}
            </a>
            <a
              className="contact-link"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" size={18} />
              LinkedIn
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a
              className="contact-link"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" size={18} />
              GitHub
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </section>

      <div className="mobile-cta">
        <a href={profile.links.email}>
          <Mail aria-hidden="true" size={17} />
          Start a conversation
        </a>
        <Link href="#work">View work</Link>
      </div>
    </main>
  );
}
