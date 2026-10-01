"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "./I18n";
import { Butterfly } from "./illustrations/Butterfly";
type Burst = { id: number; bx: number; by: number; br: number; size: number };
const STARS = Array.from({ length: 40 }, (_, i) => ({ id: i, top: `${(i * 13) % 100}%`, left: `${(i * 17) % 100}%`, delay: `${(i * 0.3) % 4}s` }));
export function Reserve({ isNight }: { isNight: boolean }) {
  const { t } = useI18n();
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [burstKey, setBurstKey] = useState(0);
  const [showGoodnight, setShowGoodnight] = useState(false);
  const waLink = "https://wa.me/573003100299?text=" + encodeURIComponent("Hola Fredy y Mónica, quiero reservar en Mompox.");
  useEffect(() => { if (isNight) { const tm = setTimeout(() => setShowGoodnight(true), 1500); return () => clearTimeout(tm); } else { setShowGoodnight(false); } }, [isNight]);
  function triggerBurst() { const nb: Burst[] = Array.from({ length: 10 }, (_, i) => { const a = (i / 10) * Math.PI * 2 + Math.random() * 0.5; const d = 110 + Math.random() * 70; return { id: burstKey * 10 + i, bx: Math.cos(a) * d, by: Math.sin(a) * d - 30, br: (Math.random() - 0.5) * 280, size: 24 + Math.random() * 20 }; }); setBursts((p) => [...p, ...nb]); setBurstKey((k) => k + 1); setTimeout(() => setBursts([]), 1300); }
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) { e.preventDefault(); triggerBurst(); setTimeout(() => window.open(waLink, "_blank", "noopener,noreferrer"), 700); }
  return (
    <section id="reserva" className="relative bg-[var(--bg)] py-20 sm:py-28 overflow-hidden">
      {isNight && (<div className="absolute inset-0 pointer-events-none" aria-hidden="true">{STARS.map((s) => (<span key={s.id} className="star" style={{ top: s.top, left: s.left, animationDelay: s.delay }} />))}</div>)}
      <div className="absolute top-10 right-[10%] w-32 h-32 rounded-full bg-[var(--terracotta)]/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}>
          <div className="eyebrow text-[var(--accent)] mb-4">{t("reserve.eyebrow")}</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--fg)] leading-[1.1] font-light mb-4">{t("reserve.title1")}<br /><em className="font-script text-5xl sm:text-6xl lg:text-7xl text-[var(--accent)] not-italic font-medium block mt-1">{t("reserve.title2")}</em></h2>
          <p className="font-serif italic text-base sm:text-lg text-[var(--fg)]/80 leading-relaxed max-w-xl mx-auto mb-10">{t("reserve.body")}</p>
          <div className="relative inline-block"><a href={waLink} onClick={handleClick} target="_blank" rel="noopener noreferrer" className="magnetic-target hover-spring hover-wiggle group inline-flex items-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#1da851] text-white rounded-2xl font-sans font-semibold text-xl tracking-wide shadow-2xl shadow-[#25D366]/40"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.27-.14-1.62-.8-1.87-.89-.27-.1-.46-.14-.65.14-.19.27-.74.89-.91 1.07-.18.19-.34.21-.61.07-.27-.14-1.16-.43-2.21-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.13-.13.27-.34.41-.5.13-.17.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49-.17-.01-.37-.01-.56-.01-.19 0-.5.07-.77.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.15.19 2.06 3.15 5.01 4.42.7.3 1.25.48 1.68.62.71.22 1.36.19 1.87.12.57-.09 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.19-.52-.33z"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.27 4.91L2 22l5.18-1.27C8.66 21.54 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.21-.45-4.55-1.24l-.33-.19-3.41.84.84-3.41-.21-.33C3.45 15.21 3 13.66 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z"/></svg>{t("reserve.cta")}<span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span></a><div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"><AnimatePresence>{bursts.map((b) => (<motion.div key={b.id} className="absolute" style={{ ["--bx" as string]: `${b.bx}px`, ["--by" as string]: `${b.by}px`, ["--br" as string]: `${b.br}deg` }} initial={{ opacity: 1, x: 0, y: 0, scale: 0.5, rotate: 0 }} animate={{ opacity: 0, x: b.bx, y: b.by, scale: 1.3, rotate: b.br }} transition={{ duration: 1.2, ease: [0.34, 1.2, 0.64, 1] }}><Butterfly size={b.size} className="relative" animateDraw={false} flap /></motion.div>))}</AnimatePresence></div></div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-[var(--fg)]/70 text-sm"><span className="font-serif italic">+57 300 310 0299</span><span className="hidden sm:inline">·</span><span className="font-sans tracking-[0.18em] uppercase">Calle 14 #2 74 · Mompós</span></div>
        </motion.div>
        <AnimatePresence>{isNight && showGoodnight && (<motion.div className="mt-20 pt-12 border-t border-[var(--fg)]/15" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.0, ease: [0.2, 0.8, 0.2, 1] }}><p className="font-script text-4xl sm:text-5xl text-[var(--accent)] mb-2">{t("reserve.goodnight")}</p><p className="font-serif italic text-sm text-[var(--fg)]/70 max-w-md mx-auto">{t("reserve.goodnightSub")}</p><div className="mt-6 flex justify-center"><Butterfly size={36} className="relative animate-gentle-float" animateDraw={false} /></div></motion.div>)}</AnimatePresence>
      </div>
    </section>
  );
}
