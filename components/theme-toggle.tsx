"use client";

import { useState } from "react";
import { Moon, Sun } from "@/components/icons";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const stored = window.localStorage.getItem("theme");
    const initialTheme: Theme = stored === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = initialTheme;
    return initialTheme;
  });

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ? <Sun aria-hidden="true" size={16} /> : <Moon aria-hidden="true" size={16} />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
