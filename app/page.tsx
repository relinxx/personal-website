import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "@/components/icons";
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

      <section className="hero" id="top">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="availability-line">
              <span aria-hidden="true" />
              Available for AI systems and automation roles
            </p>
            <p className="hero-kicker">{profile.role}</p>
            <h1>{profile.name}</h1>
            <p className="hero-position">
              Software engineer building reliable AI systems, workflow automation,
              and data products.
            </p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={profile.resume} download>
                <Download aria-hidden="true" size={17} />
                Resume
              </a>
              <a className="button button-ghost" href={profile.cv} download>
                Full CV
                <ArrowDown aria-hidden="true" size={17} />
              </a>
              <a className="text-link text-link-light" href="#work">
                Selected work
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

        </div>
      </section>

      <section className="proof-band" aria-label="Professional proof points">
        <div className="shell proof-grid">
          {proofPoints.map((point) => (
            <div key={point.value}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>Systems with evidence behind them.</h2>
          </div>
          <p>
            Production-minded AI, automation, and data systems. Client work is
            described without exposing credentials, private source, or customer data.
          </p>
        </div>

        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        </div>

        <a className="section-link" href={profile.links.github} target="_blank" rel="noreferrer">
          Browse all repositories
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </section>

      <section className="dark-band" id="experience">
        <div className="section shell">
          <div className="section-heading section-heading-dark">
            <div>
              <p className="eyebrow">02 / Experience</p>
              <h2>Implementation ownership, including the client conversation.</h2>
            </div>
            <p>
              I translate unclear operational needs into testable systems, then stay
              through QA, deployment, demonstrations, and handover.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-row" key={`${experience.company}-${experience.role}`}>
                <div className="experience-meta">
                  <strong>{experience.company}</strong>
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
                <div className="experience-content">
                  <h3>{experience.role}</h3>
                  <p>{experience.summary}</p>
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="capability-grid" id="skills">
            {skillGroups.map((group, index) => (
              <section key={group.title}>
                <span className="capability-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.skills.join(" · ")}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell education-section" id="about">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">03 / Foundation</p>
            <h2>Software engineering first, applied AI in practice.</h2>
          </div>
          <p>
            My work combines backend discipline, model-aware evaluation, reliable
            integrations, and interfaces that make system behavior understandable.
          </p>
        </div>

        <div className="education-row">
          <div>
            <span>{education.period}</span>
            <strong>{education.school}</strong>
          </div>
          <div>
            <h3>{education.degree}</h3>
            <p>{education.project}</p>
          </div>
        </div>
      </section>

      <section className="section shell" id="credentials">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">04 / Credentials</p>
            <h2>Focused learning, tied to shipped work.</h2>
          </div>
          <p>Azure, retrieval, vector databases, automation, agents, and delivery tooling.</p>
        </div>

        <ol className="credential-list">
          {certifications.map((certificate, index) => (
            <li key={certificate.credentialId}>
              <span>0{index + 1}</span>
              <div>
                <strong>{certificate.title}</strong>
                <p>{certificate.issuer}</p>
              </div>
              <small>{certificate.completed}</small>
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${certificate.title} credential`}
              >
                View credential
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-band" id="contact">
        <div className="shell contact-inner">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Building an AI or automation system that has to work beyond the demo?</h2>
          </div>
          <div className="contact-copy">
            <p>{profile.availability}</p>
            <a className="button button-contact" href={profile.links.email}>
              <Mail aria-hidden="true" size={17} />
              {profile.email}
            </a>
            <div className="contact-links">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin aria-hidden="true" size={18} />
                LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-cta">
        <a href={profile.links.email}>
          <Mail aria-hidden="true" size={17} />
          Contact
        </a>
        <Link href="#work">Work</Link>
      </div>
    </main>
  );
}
