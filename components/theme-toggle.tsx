"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
function subscribe(callback: () => void) { window.addEventListener("portfolio-theme", callback); return () => window.removeEventListener("portfolio-theme", callback); }
function snapshot() { return document.documentElement.dataset.theme === "light" ? "light" : "dark"; }
export function ThemeToggle() {
 const theme = useSyncExternalStore(subscribe, snapshot, () => "dark");
 function toggle() { const next = theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = next; try { localStorage.setItem("theme", next); } catch { /* Theme works without storage. */ } window.dispatchEvent(new Event("portfolio-theme")); }
 return <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}</button>;
}
