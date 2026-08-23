"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button
      aria-label={label}
      className="theme-toggle"
      onClick={toggleTheme}
      suppressHydrationWarning
      title={label}
      type="button"
    >
      {theme === "dark" ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </button>
  );
}
