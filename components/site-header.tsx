"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/portfolio";
export function SiteHeader() {
 const [open, setOpen] = useState(false);
 return <header className="site-header"><div className="shell header-inner">
  <Link className="wordmark" href="/" aria-label="Rehan home" onClick={() => setOpen(false)}>r<span>.</span><span className="wordmark-label">REHAN<br />AI & SOFTWARE</span></Link>
  <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation" id="main-navigation">{[["Work", "work"], ["Experience", "experience"], ["Expertise", "skills"]].map(([name, id]) => <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{name}</Link>)}<a className="nav-contact" href={profile.links.email}>Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a></nav>
  <div className="header-tools"><ThemeToggle /><button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
 </div></header>;
}
