import Link from "next/link";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--hairline)]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-4 px-4 py-8 text-[12px] text-[var(--muted)] sm:flex-row sm:items-center sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" />
          <Link href="/" className="font-medium text-[var(--fg)] hover:underline">
            {profile.name}
          </Link>
          <span>·</span>
          <span>{profile.role}</span>
          <span>·</span>
          <span>{profile.location}</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/projects" className="hover:text-[var(--fg)] transition">
            All Projects
          </Link>
          <Link
            href="/reports/builders-of-authority"
            className="hover:text-[var(--fg)] transition"
          >
            BOA 20-View Report
          </Link>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--fg)] transition"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--fg)] transition"
          >
            LinkedIn
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--fg)] transition"
          >
            Resume PDF
          </a>
          <span className="font-mono">
            © {new Date().getFullYear()} {profile.handle}
          </span>
        </div>
      </div>
    </footer>
  );
}
