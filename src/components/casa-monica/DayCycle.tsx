"use client";
import { useEffect, useState } from "react";
export function DayCycle({ children, onNightChange }: { children: React.ReactNode; onNightChange?: (isNight: boolean) => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(p);
      document.body.style.setProperty("--scroll-progress", String(p));
      onNightChange?.(p > 0.78);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [onNightChange]);
  return <>{children}</>;
}
export function DayProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? window.scrollY / max : 0); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="day-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}
