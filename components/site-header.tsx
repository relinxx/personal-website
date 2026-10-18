"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
export function SiteHeader() {
 const [open, setOpen] = useState(false);
 const header = useRef<HTMLElement>(null); const toggle = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  if (!open) return;
  const escape = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
  const outside = (e: Event) => { if (!header.current?.contains(e.target as Node)) setOpen(false); };
  document.addEventListener("keydown", escape); document.addEventListener("pointerdown", outside); document.addEventListener("focusin", outside);
  return () => { document.removeEventListener("keydown", escape); document.removeEventListener("pointerdown", outside); document.removeEventListener("focusin", outside); };
 }, [open]);
 return <header className="site-header" ref={header}><div className="shell header-inner"><nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation" id="main-navigation">{[["Work", "work"], ["Experience", "experience"], ["Expertise", "skills"]].map(([name,id]) => <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{name}</Link>)}<Link className="nav-contact" href="/#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></Link></nav><div className="header-tools"><ThemeToggle /><button ref={toggle} className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div></div></header>;
}
