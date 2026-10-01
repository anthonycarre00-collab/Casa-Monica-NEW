"use client";
import { motion } from "framer-motion";
import { useI18n } from "./I18n";
import { Filigrana } from "./Filigrana";
import { TukTuk } from "./illustrations/TukTuk";
const MODES = [{ id: "air", emoji: "✈️", title: { es: "En avión", en: "By air" }, desc: { es: "Cartagena (CTG) a 6 horas por tierra. Corozal (CZU) a 3 horas. Mompox no tiene aeropuerto comercial.", en: "Cartagena (CTG) 6 hours by land. Corozal (CZU) 3 hours. Mompox has no commercial airport." }, duration: { es: "6h desde Cartagena", en: "6h from Cartagena" } }, { id: "road", emoji: "🚗", title: { es: "Por tierra", en: "By road" }, desc: { es: "Desde Cartagena: 5-6 horas. Vas por Magangué y cruzás el Magdalena en planchón (ferry de carros).", en: "From Cartagena: 5-6 hours. Go via Magangué and cross the Magdalena on a planchón (car ferry)." }, duration: { es: "5-6h desde Cartagena", en: "5-6h from Cartagena" } }, { id: "bus", emoji: "🚌", title: { es: "En bus", en: "By bus" }, desc: { es: "Expreso Brasilia sale desde Cartagena y Medellín directo para Mompox.", en: "Expreso Brasilia runs from Cartagena and Medellín direct to Mompox." }, duration: { es: "6h Cartagena · 10h Medellín", en: "6h Cartagena · 10h Medellín" } }, { id: "boat", emoji: "⛵", title: { es: "Por el río", en: "By river" }, desc: { es: "La manera más bonita. Lanchas desde Magangué cruzando el Magdalena hasta Mompox.", en: "The most beautiful way. Boats from Magangué crossing the Magdalena to Mompox." }, duration: { es: "2-3h desde Magangué", en: "2-3h from Magangué" } }];
export function HowToGetHere() {
  const { t, lang } = useI18n();
  const mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=-74.45%2C9.23%2C-74.40%2C9.26&layer=mapnik&marker=9.2414%2C-74.4258";
  return (
    <section id="como-llegar" className="bg-cal py-20 sm:py-28 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}>
          <div className="eyebrow mb-3">{t("llegar.eyebrow")}</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--charcoal)] leading-[1.1] font-light">{t("llegar.title1")} <em className="text-[var(--terracotta)] not-italic font-medium">{t("llegar.title2")}</em></h2>
          <p className="font-script text-2xl text-[var(--charcoal)]/75 mt-3">{t("llegar.subtitle")}</p>
          <Filigrana />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {MODES.map((mode, i) => (<motion.div key={mode.id} className="magnetic-target hover-spring bg-[var(--cream)] rounded-2xl p-6 shadow-md border-2 border-[var(--charcoal)]/10" style={{ rotate: i % 2 === 0 ? "-1deg" : "1deg" }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}><div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4 bg-[var(--terracotta)]/10">{mode.emoji}</div><h3 className="font-serif text-lg text-[var(--charcoal)] mb-2">{mode.title[lang]}</h3><p className="font-sans text-sm text-[var(--charcoal)]/75 leading-relaxed mb-3">{mode.desc[lang]}</p><div className="flex items-center gap-2 text-xs text-[var(--terracotta)] font-medium pt-3 border-t border-[var(--charcoal)]/10"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" /></svg><span className="font-sans tracking-[0.1em] uppercase">{mode.duration[lang]}</span></div></motion.div>))}
        </div>
        <motion.div className="mb-8 overflow-hidden hidden lg:block"><TukTuk /></motion.div>
        <motion.div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-stretch" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}>
          <div className="bg-[var(--terracotta)] text-[var(--cream)] rounded-2xl p-6 sm:p-8 flex flex-col justify-center"><div className="eyebrow text-[var(--golden)] mb-2">{t("llegar.address")}</div><h3 className="font-script text-3xl sm:text-4xl text-[var(--cream)] mb-3">{t("llegar.addressLine")}</h3><p className="font-serif italic text-[var(--cream)]/85 mb-4 leading-relaxed">{t("llegar.addressDesc")}</p><div className="flex items-center gap-2 text-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" /></svg><span className="font-sans tracking-[0.05em]">Mompox · Bolívar · Colombia</span></div></div>
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[var(--charcoal)]/10 min-h-[280px]"><iframe src={mapSrc} className="w-full h-full min-h-[280px]" style={{ border: 0 }} loading="lazy" title="Mapa de Mompox" /></div>
        </motion.div>
        <motion.p className="mt-12 text-center font-script text-2xl text-[var(--charcoal)]/75 max-w-2xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>{t("llegar.closing")}</motion.p>
      </div>
    </section>
  );
}
