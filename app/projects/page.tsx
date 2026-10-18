import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsArchive } from "@/components/projects-archive";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Complete archive of Syed Muhammad Rehan's client AI/RAG deliveries, CRM & webhook automation audits, and 9 live deployed workflow applications.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsIndexPage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-[1100px] px-4 pt-28 pb-16 sm:px-6"
    >
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-[var(--muted)] hover:text-[var(--fg)] transition"
        >
          <span aria-hidden="true">←</span> Back to overview
        </Link>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="label">Complete Engineering Archive</div>
            <h1 className="mt-1 text-[clamp(30px,4.2vw,48px)] font-semibold tracking-tight leading-[1.08] text-[var(--fg)]">
              10 Case Studies &amp; 9 Live Workflow Apps.
            </h1>
          </div>
          <Link
            href="/reports/builders-of-authority"
            className="inline-flex items-center gap-2 rounded-full border border-[#30d158]/40 bg-[#30d158]/10 px-4 py-2 text-[12.5px] font-medium text-[#30d158] hover:bg-[#30d158]/20 transition"
          >
            <span className="h-2 w-2 rounded-full bg-[#30d158]" />
            Inspect 20-View BOA Systems Report ↗
          </Link>
        </div>
      </div>

      <ProjectsArchive />
    </main>
  );
}
