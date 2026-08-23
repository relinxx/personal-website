"use client";

import { useEffect } from "react";

export function PortfolioEffects() {
  useEffect(() => {
    const root = document.documentElement;

    const updateProgress = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", String(Math.min(Math.max(progress, 0), 1)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
