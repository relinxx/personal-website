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
          <p>AI-focused Software Engineer in Rawalpindi, Pakistan.</p>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href={profile.links.email} aria-label="Email Syed Muhammad Rehan">
            <Mail aria-hidden="true" size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin aria-hidden="true" size={18} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github aria-hidden="true" size={18} />
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Rehan. Built with Next.js.</p>
      </div>
    </footer>
  );
}
