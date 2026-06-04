import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p className="eyebrow">404</p>
      <h1>This page is not part of the system.</h1>
      <p>The link may be outdated, or the case study may still be in progress.</p>
      <Link className="button button-primary" href="/">
        Return home
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </main>
  );
}
