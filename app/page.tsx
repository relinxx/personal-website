import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import {
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
      <section className="hero shell">
        <div className="hero-copy">
          <p className="availability-pill">
            <span aria-hidden="true" />
            Open to AI engineering opportunities
          </p>
          <p className="hero-kicker">{profile.role}</p>
          <h1>
            Building AI systems that move from
            <span> promising to production.</span>
          </h1>
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
          <div className="portrait-frame">
            <Image
              src="/rehan-profile-suit.png"
              alt="Portrait of Syed Muhammad Rehan"
              width={546}
              height={540}
              priority
            />
            <div className="portrait-tag portrait-tag-top">
              <Sparkles aria-hidden="true" size={16} />
              RAG + AI agents
            </div>
            <div className="portrait-tag portrait-tag-bottom">
              <CheckCircle2 aria-hidden="true" size={16} />
              Client-facing delivery
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Professional proof points">
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
            <p className="eyebrow">Selected work</p>
            <h2>Systems built around real problems.</h2>
          </div>
          <p>
            Client work is described without exposing private source code or data. Public
            repositories are linked only where they are verified.
          </p>
        </div>

        <div className="project-grid">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
        </div>
      </section>

      <section className="section section-contained shell" id="experience">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Production ownership, with the conversations included.</h2>
          </div>
          <p>
            My strongest work sits at the intersection of backend engineering, applied AI,
            cloud delivery, and explaining the system clearly to the people using it.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.company}-${experience.role}`}>
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

      <section className="section shell" id="skills">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>A practical stack for shipping AI products.</h2>
          </div>
          <p>
            No percentage bars. These are the tools and disciplines I have used across
            professional work, delivery, and serious projects.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="education-card">
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

      <section className="section shell" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Let&apos;s build something useful</p>
            <h2>Need an AI system that works beyond the demo?</h2>
            <p>
              I&apos;m open to full-time AI engineering roles and focused freelance work
              involving RAG, AI agents, NL2SQL, automation, or Python backends.
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
