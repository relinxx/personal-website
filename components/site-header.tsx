import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { profile } from "@/data/portfolio";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Syed Muhammad Rehan home">
          <span className="wordmark-mark">R</span>
          <span>
            Rehan
            <small>{profile.handle}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href={profile.links.email}>
          Let&apos;s talk
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </header>
  );
}
