import Link from "next/link";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="footer-name" href="/">
          Syed Muhammad Rehan
        </Link>
        <p>AI systems, automation, and software engineering.</p>
        <nav className="footer-links" aria-label="Footer links">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.email}>Email</a>
        </nav>
      </div>
    </footer>
  );
}
