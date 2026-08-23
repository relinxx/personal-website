import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/portfolio";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Syed Muhammad Rehan home">
          <strong>{profile.name}</strong>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a className="header-cta" href={profile.links.email}>
            Let&apos;s talk
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
