import Link from "next/link";
import { Github, Linkedin, Mail } from "@/components/icons";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link className="footer-name" href="/">
            Syed Muhammad Rehan
          </Link>
          <p>Software engineer building AI systems, automation, and data products.</p>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <a href={profile.links.email} aria-label="Email Syed Muhammad Rehan">
            <Mail aria-hidden="true" size={17} />
            Email
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" size={17} />
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" size={17} />
            GitHub
          </a>
        </nav>

        <p className="copyright">© {new Date().getFullYear()} Rehan</p>
      </div>
    </footer>
  );
}
