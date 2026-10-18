"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Proof", href: "/#proof" },
  { label: "Journey", href: "/#journey" },
  { label: "Archive", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onOutside = (e: Event) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-3 z-50 flex flex-col items-center px-3 pointer-events-none"
    >
      <nav
        aria-label="Primary navigation"
        className="nav-glass pointer-events-auto flex items-center gap-1 rounded-full px-2 py-1.5"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 rounded-full pl-1 pr-2.5 py-1 text-[13px] font-semibold tracking-tight text-[var(--fg)]"
        >
          <Image
            src="/rehan-profile-suit.png"
            alt={profile.name}
            width={22}
            height={22}
            className="h-[22px] w-[22px] rounded-full object-cover object-top ring-1 ring-black/10"
          />
          <span className="hidden xs:inline sm:inline">Syed Muhammad Rehan</span>
          <span className="inline sm:hidden">Rehan</span>
        </Link>

        <span className="hidden md:block h-3.5 w-px bg-[var(--hairline)] mx-0.5" />

        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 text-[13px] text-[var(--muted)] hover:text-[var(--fg)] transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <span className="h-3.5 w-px bg-[var(--hairline)] mx-0.5" />

        <ThemeToggle />

        <Link
          href="/reports/builders-of-authority"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[var(--fg)] px-3 py-1 text-[12px] font-medium text-[var(--bg)] hover:opacity-90 transition ml-0.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" />
          20-View Report
        </Link>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="dock-icon md:hidden"
        >
          {open ? <X size={15} /> : <Menu size={15} />}
        </button>
      </nav>

      {open && (
        <div className="dock-sheet raised pointer-events-auto mt-2 w-full max-w-[340px] rounded-2xl p-2 md:hidden">
          <div className="grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[13px] font-medium text-[var(--fg)] hover:bg-white/5 transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reports/builders-of-authority"
              onClick={() => setOpen(false)}
              className="col-span-2 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5 text-[13px] font-medium text-[var(--fg)] hover:bg-white/10 transition"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" />
                Builders of Authority · 20-View Report
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
