"use client";
import { motion } from "framer-motion";
import { useI18n } from "./I18n";
import { HouseFacade } from "./illustrations/HouseFacade";
import { RockingChair } from "./illustrations/RockingChair";
export function Hero() {
  const { t } = useI18n();
  const waLink = "https://wa.me/573003100299?text=" + encodeURIComponent("Hola Fredy y Mónica, quiero reservar en Mompox.");
  return (
    <section className="relative bg-cal overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-32 min-h-[90vh] flex items-center">
      <div className="absolute top-20 right-[8%] w-32 h-32 rounded-full bg-[var(--terracotta)]/15 blur-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-[5%] w-40 h-40 rounded-full bg-[var(--sage)]/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-[20%] w-24 h-24 rounded-full bg-[var(--golden)]/30 blur-2xl pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 className="font-serif font-light text-[var(--charcoal)] leading-[1.05] text-5xl sm:text-7xl lg:text-8xl mb-6" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}>
              {t("hero.h1.line1")} <br /><em className="text-[var(--terracotta)] not-italic font-medium">{t("hero.h1.line2")}</em><br /><span className="font-script text-6xl sm:text-8xl lg:text-9xl text-[var(--sage)] block mt-1">{t("hero.h1.line3")}</span>
            </motion.h1>
            <motion.p className="font-script text-2xl sm:text-3xl text-[var(--charcoal)]/85 leading-snug max-w-md mx-auto lg:mx-0 mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>{t("hero.subtitle")}</motion.p>
            <motion.p className="font-sans text-base sm:text-lg text-[var(--charcoal)]/75 leading-relaxed max-w-md mx-auto lg:mx-0 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>{t("hero.body")}</motion.p>
            <motion.div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.95 }}>
              <div className="stamp-wrapper relative" style={{ transform: "rotate(-2deg)" }}><div className="w-24 h-28 bg-[var(--cream)] border-2 border-dashed border-[var(--sage)] rounded-lg p-2 flex flex-col items-center justify-center shadow-md hover:rotate-0 transition-transform duration-500"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" /></svg><div className="font-script text-sm text-[var(--charcoal)] text-center leading-tight mt-1">{t("hero.parking")}</div></div></div>
              <div className="stamp-wrapper relative" style={{ transform: "rotate(1deg)" }}><div className="w-24 h-28 bg-[var(--cream)] border-2 border-dashed border-[var(--terracotta)] rounded-lg p-2 flex flex-col items-center justify-center shadow-md hover:rotate-0 transition-transform duration-500"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="2"><path d="M2 12 Q6 8 10 12 T18 12 T22 12" strokeLinecap="round" /></svg><div className="font-script text-sm text-[var(--charcoal)] text-center leading-tight mt-1">{t("hero.river")}</div></div></div>
              <div className="stamp-wrapper relative" style={{ transform: "rotate(-1deg)" }}><div className="w-24 h-28 bg-[var(--cream)] border-2 border-dashed border-[var(--golden)] rounded-lg p-2 flex flex-col items-center justify-center shadow-md hover:rotate-0 transition-transform duration-500"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--golden)" strokeWidth="2"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" /></svg><div className="font-script text-[11px] text-[var(--charcoal)] text-center leading-tight mt-1">UNESCO</div><div className="text-[9px] text-[var(--charcoal)]/60">1995</div></div></div>
            </motion.div>
            <motion.div className="mb-8" initial={{ opacity: 0, rotate: -3 }} animate={{ opacity: 1, rotate: -2 }} transition={{ duration: 0.8, delay: 1.0 }}><div className="inline-block bg-[var(--golden)]/15 px-4 py-2 rounded-lg border-l-4 border-[var(--golden)]" style={{ transform: "rotate(-2deg)" }}><span className="font-script text-xl text-[var(--terracotta)]">{t("hero.note")}</span><span className="font-script text-base text-[var(--charcoal)]/60 ml-2">{t("hero.noteSign")}</span></div></motion.div>
            <motion.div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="magnetic-target hover-spring hover-wiggle group inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#1da851] text-white rounded-2xl font-sans font-semibold text-lg tracking-wide shadow-xl shadow-[#25D366]/30"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.27-.14-1.62-.8-1.87-.89-.27-.1-.46-.14-.65.14-.19.27-.74.89-.91 1.07-.18.19-.34.21-.61.07-.27-.14-1.16-.43-2.21-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.13-.13.27-.34.41-.5.13-.17.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49-.17-.01-.37-.01-.56-.01-.19 0-.5.07-.77.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.15.19 2.06 3.15 5.01 4.42.7.3 1.25.48 1.68.62.71.22 1.36.19 1.87.12.57-.09 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.19-.52-.33z"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.27 4.91L2 22l5.18-1.27C8.66 21.54 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.21-.45-4.55-1.24l-.33-.19-3.41.84.84-3.41-.21-.33C3.45 15.21 3 13.66 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z"/></svg>{t("hero.cta")}</a>
              <a href="tel:+573003100299" className="font-sans text-sm tracking-[0.15em] uppercase text-[var(--charcoal)]/70 hover:text-[var(--terracotta)] transition-colors duration-300">+57 300 310 0299</a>
            </motion.div>
          </div>
          <div className="relative h-[500px] sm:h-[600px]">
            <motion.div className="absolute inset-0" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}><HouseFacade animateDraw /></motion.div>
            <motion.div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.4 }}><RockingChair color="var(--terracotta)" animateDraw /></motion.div>
            <motion.figure className="polaroid absolute bottom-12 right-0 w-32 sm:w-40" style={{ transform: "rotate(4deg)" }} initial={{ opacity: 0, y: 30, rotate: 12 }} animate={{ opacity: 1, y: 0, rotate: 4 }} transition={{ duration: 0.9, delay: 1.0, ease: [0.34, 1.56, 0.64, 1] }}><span className="tape" style={{ background: "rgba(212, 165, 52, 0.7)" }} /><img src="/hotel-exterior-day.png" alt="Fachada de Hotel Casa Mónica" className="w-full aspect-[4/5] object-cover" /><div className="font-script text-lg text-[var(--charcoal)] text-center mt-2">la casa</div></motion.figure>
          </div>
        </div>
        <motion.div className="flex items-center justify-center lg:justify-start gap-3 mt-12 text-[var(--charcoal)]/70 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}><span className="font-serif text-[var(--golden)] text-lg">★★★★★</span><span className="font-serif italic">9.2 / 10 · 55 reviews</span></motion.div>
      </div>
    </section>
  );
}
