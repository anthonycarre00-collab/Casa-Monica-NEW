"use client";
import { motion } from "framer-motion";
import { useI18n } from "./I18n";
import { ChampanBoat, CeibaTree, MompoxSkyline } from "./illustrations/Scenery";
import { Filigrana } from "./Filigrana";
export function River() {
  const { t } = useI18n();
  return (
    <section id="rio" className="bg-cal py-20 sm:py-28 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}>
          <div className="eyebrow mb-3">{t("river.eyebrow")}</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--charcoal)] leading-[1.1] font-light"><em className="text-[var(--terracotta)] not-italic font-medium">Mompox</em> {t("river.title").replace("Mompox ", "")}</h2>
          <p className="font-script text-2xl text-[var(--charcoal)]/75 mt-3">{t("river.subtitle")}</p>
          <Filigrana />
        </motion.div>
        <motion.div className="w-full min-h-[120px] sm:min-h-[14rem] mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.0 }}><MompoxSkyline animateDraw /></motion.div>
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}><div className="h-64 mx-auto max-w-[200px] relative"><CeibaTree animateDraw /><div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[var(--cream)]/90 px-3 py-1 rounded-full shadow-sm border border-[var(--sage)]/30"><span className="font-script text-base text-[var(--sage)]">{t("river.ceiba")}</span></div></div><p className="font-serif italic text-sm text-[var(--charcoal)]/70 mt-1">{t("river.ceibaDesc")}</p></motion.div>
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}><div className="h-64 mx-auto max-w-[260px] relative"><ChampanBoat animateDraw drift /><div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[var(--cream)]/90 px-3 py-1 rounded-full shadow-sm border border-[var(--terracotta)]/30"><span className="font-script text-base text-[var(--terracotta)]">{t("river.champan")}</span></div></div><p className="font-serif italic text-sm text-[var(--charcoal)]/70 mt-1">{t("river.champanDesc")}</p></motion.div>
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}><div className="h-64 mx-auto max-w-[200px] flex items-center justify-center"><svg viewBox="0 0 200 280" className="w-full h-full living-ink-filter"><motion.path d="M 100 40 Q 105 35 110 40 L 110 50 Q 100 60 90 50 L 90 40 Z" fill="var(--charcoal)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} /><motion.circle cx="100" cy="30" r="12" fill="var(--charcoal)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} /><motion.path d="M 100 50 Q 100 100 95 150 L 100 200 L 105 150 Q 100 100 100 50" fill="var(--terracotta)" stroke="var(--charcoal)" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: 0.2 }} /><motion.line x1="105" y1="80" x2="180" y2="160" stroke="var(--charcoal)" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: 0.4 }} /></svg></div><p className="font-script text-xl text-[var(--terracotta)] mt-2">{t("river.boga")}</p><p className="font-serif italic text-sm text-[var(--charcoal)]/70 mt-1">{t("river.bogaDesc")}</p></motion.div>
        </div>
        <motion.figure className="hover-spring relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--charcoal)]/10" style={{ rotate: "-1deg" }} initial={{ opacity: 0, y: 30, rotate: -3 }} whileInView={{ opacity: 1, y: 0, rotate: -1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}><img src="/mompox-river-colonial.jpg" alt="Río Magdalena y arquitectura colonial de Mompox" className="w-full aspect-[16/9] object-cover" /><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--charcoal)]/70 to-transparent" /><figcaption className="absolute bottom-0 left-0 right-0 p-6"><p className="font-script text-2xl text-[#FFFBF0] drop-shadow-md">{t("river.quote")}</p><p className="font-sans text-xs tracking-[0.2em] uppercase text-[#FFFBF0]/80 mt-1">{t("river.quoteAttr")}</p></figcaption></motion.figure>
      </div>
    </section>
  );
}
