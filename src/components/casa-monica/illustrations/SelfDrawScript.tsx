"use client";
import { useEffect } from "react";

/**
 * Adds .self-drawing class to .living-ink-filter SVGs when they
 * scroll into view, triggering the CSS self-draw animation.
 * 
 * Uses vanilla IntersectionObserver — works on ALL mobile browsers.
 * Falls back gracefully: if IO unavailable, SVGs are still visible
 * (base CSS state = stroke-dashoffset: 0 = visible).
 */
export function SelfDrawScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("self-drawing");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".living-ink-filter:not(.self-drawing)").forEach((svg) => {
        observer.observe(svg);
      });
    };

    observe();

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
