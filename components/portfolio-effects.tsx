"use client";

import { useEffect } from "react";

export function PortfolioEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-motion-ready");

    const updateProgress = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", String(Math.min(Math.max(progress, 0), 1)));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      observer.disconnect();
      root.classList.remove("js-motion-ready");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
