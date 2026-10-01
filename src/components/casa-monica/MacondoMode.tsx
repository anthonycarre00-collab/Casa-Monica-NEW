"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Color = "golden" | "terracotta" | "sage" | "bougainvillea";
type Butterfly = { id: number; color: Color; size: number; startX: number; startY: number; endScale: number; endX: number; endY: number; duration: number; delay: number; };
const COLORS: Record<Color, { fill1: string; fill2: string; stroke: string; dot: string }> = {
  golden: { fill1: "#D4A534", fill2: "#B8861C", stroke: "#1A1A1A", dot: "#8B4513" },
  terracotta: { fill1: "#8B4513", fill2: "#6B3410", stroke: "#1A1A1A", dot: "#D4A534" },
  sage: { fill1: "#4A6B3D", fill2: "#3A5530", stroke: "#1A1A1A", dot: "#D4A534" },
  bougainvillea: { fill1: "#E6206B", fill2: "#C41558", stroke: "#1A1A1A", dot: "#D4A534" },
};
const COLOR_LIST: Color[] = ["golden", "bougainvillea", "sage", "terracotta"];
export function MacondoMode() {
  const [on, setOn] = useState(false);
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);
  const idRef = useRef(0);
  const spawnTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => { try { const s = window.localStorage.getItem("cm-macondo"); if (s === "1") setOn(true); } catch {} }, []);
  function toggle() { setOn((p) => { const n = !p; try { window.localStorage.setItem("cm-macondo", n ? "1" : "0"); } catch {} if (!n) { setButterflies([]); if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current); } return n; }); }
  useEffect(() => {
    if (!on) return;
    function spawn() {
      const id = idRef.current++;
      const color = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
      const size = 24 + Math.random() * 16;
      const startX = 10 + Math.random() * 80;
      const startY = 15 + Math.random() * 70;
      const endX = (Math.random() - 0.5) * 15;
      const endY = (Math.random() - 0.5) * 15;
      const endScale = 4.5 + Math.random() * 2;
      const duration = 2.5 + Math.random() * 1.5;
      const delay = Math.random() * 0.8;
      setButterflies((p) => [...p.slice(-12), { id, color, size, startX, startY, endScale, endX, endY, duration, delay }]);
      setTimeout(() => setButterflies((p) => p.filter((b) => b.id !== id)), (duration + delay + 0.5) * 1000);
      spawnTimerRef.current = setTimeout(spawn, 900 + Math.random() * 1200);
    }
    spawn();
    return () => { if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current); };
  }, [on]);
  return (
    <>
      <button onClick={toggle} className={`macondo-toggle magnetic-target hover-spring fixed top-[76px] right-5 z-90 flex items-center gap-1.5 px-3 py-2 rounded-full border-2 shadow-md transition-all ${on ? "bg-[var(--golden)] border-[var(--terracotta)] text-[var(--charcoal)]" : "bg-[var(--cream)] border-[var(--charcoal)]/30 text-[var(--charcoal)] hover:border-[var(--terracotta)]"}`} aria-label={on ? "Apagar Modo Macondo" : "Encender Modo Macondo"}>
        <svg width="16" height="16" viewBox="0 0 50 42" fill="none"><g style={{ transformOrigin: "25px 21px", animation: on ? "butterfly-flap 0.22s ease-in-out infinite" : "none" }}><path d="M 25 21 Q 7 3 1 13 Q -1 23 7 25 Q 18 26 25 21 Z" fill="#1A1A1A" /><path d="M 25 21 Q 43 3 49 13 Q 51 23 43 25 Q 32 26 25 21 Z" fill="#1A1A1A" /><path d="M 25 21 Q 8 4 3 14 Q 1 22 8 24 Q 18 25 25 21 Z" fill="#D4A534" /><path d="M 25 21 Q 42 4 47 14 Q 49 22 42 24 Q 32 25 25 21 Z" fill="#D4A534" /><ellipse cx="25" cy="21" rx="1.5" ry="8" fill="#1A1A1A" /></g></svg>
        <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase hidden sm:inline">{on ? "Macondo ON" : "Macondo"}</span>
      </button>
      {on && (<div className="fixed inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(212, 165, 52, 0.25) 0%, rgba(232, 98, 60, 0.20) 30%, rgba(230, 32, 107, 0.15) 60%, transparent 100%)', animation: 'slow-pulse 8s ease-in-out infinite' }} aria-hidden="true" />)}
      {on && (<div className="fixed inset-0 z-25 pointer-events-none overflow-hidden" aria-hidden="true"><AnimatePresence>{butterflies.map((b) => { const c = COLORS[b.color]; return (<motion.div key={b.id} className="absolute" style={{ top: `${b.startY}vh`, left: `${b.startX}vw` }} initial={{ x: 0, y: 0, scale: 0.3, opacity: 0, rotate: 0 }} animate={{ x: `${b.endX}vw`, y: `${b.endY}vh`, scale: b.endScale, opacity: [0, 1, 1, 0], rotate: (Math.random() - 0.5) * 90 }} transition={{ duration: b.duration, delay: b.delay, ease: [0.34, 1, 0.64, 1], times: [0, 0.15, 0.7, 1] }}><svg width={b.size} height={b.size * 0.85} viewBox="0 0 50 42" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.35))" }}><g style={{ animation: "butterfly-flap 0.2s ease-in-out infinite", transformOrigin: "25px 21px" }}><path d="M 25 21 Q 7 3 1 13 Q -1 23 7 25 Q 18 26 25 21 Z" fill={c.stroke} /><path d="M 25 21 Q 43 3 49 13 Q 51 23 43 25 Q 32 26 25 21 Z" fill={c.stroke} /><path d="M 25 21 Q 8 4 3 14 Q 1 22 8 24 Q 18 25 25 21 Z" fill={c.fill1} /><path d="M 25 21 Q 42 4 47 14 Q 49 22 42 24 Q 32 25 25 21 Z" fill={c.fill1} /><circle cx="10" cy="14" r="1.5" fill={c.dot} opacity="0.9" /><circle cx="40" cy="14" r="1.5" fill={c.dot} opacity="0.9" /><ellipse cx="25" cy="21" rx="1.8" ry="10" fill={c.stroke} /></g></svg></motion.div>); })}</AnimatePresence></div>)}
    </>
  );
}
