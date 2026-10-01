"use client";
import { useI18n } from "./I18n";
import { Filigrana } from "./Filigrana";
export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="bg-[var(--charcoal)] text-[#FFFBF0] py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-[var(--golden)]/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <Filigrana />
        <div className="flex items-center justify-center gap-3 mb-6"><div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[var(--golden)]/40"><img src="/casa-monica-logo.png" alt="Logo Hotel Casa Mónica" className="w-full h-full object-cover" /></div><div className="text-left leading-tight"><div className="font-script text-3xl text-[var(--golden)]">Casa Mónica</div><div className="eyebrow text-[#FFFBF0]/60 mt-0.5">Mompox · Bolívar</div></div></div>
        <p className="font-serif italic text-lg sm:text-xl text-[#FFFBF0]/85 max-w-2xl mx-auto leading-relaxed mb-10">{t("footer.closing")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-[#FFFBF0]/70 mb-10"><div><div className="eyebrow text-[var(--golden)]/80 mb-2">Bolívar</div><p className="font-serif italic leading-snug">{lang === "es" ? "«Si a Caracas debo la vida, a Mompox debo la gloria.»" : "\"If to Caracas I owe my life, to Mompox I owe the glory.\""}<br /><span className="text-[#FFFBF0]/50">{lang === "es" ? "— Simón Bolívar" : "— Simón Bolívar"}</span></p></div><div><div className="eyebrow text-[var(--golden)]/80 mb-2">Gabo</div><p className="font-serif italic leading-snug">{lang === "es" ? "«Mompox no existe, a veces soñamos con ella pero no existe.»" : "\"Mompox doesn't exist; sometimes we dream of her, but she doesn't exist.\""}<br /><span className="text-[#FFFBF0]/50">{lang === "es" ? "— El general en su laberinto" : "— The General in His Labyrinth"}</span></p></div><div><div className="eyebrow text-[var(--golden)]/80 mb-2">UNESCO</div><p className="font-serif italic leading-snug">Santa Cruz de Mompox<br /><span className="text-[#FFFBF0]/50">{lang === "es" ? "Patrimonio de la Humanidad · 1995" : "World Heritage Site · 1995"}</span></p></div></div>
        <div className="border-t border-[#FFFBF0]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFBF0]/60"><div className="flex items-center gap-3"><span className="font-sans tracking-[0.18em] uppercase">Calle 14 #2 74</span><span>·</span><span className="font-sans tracking-[0.18em] uppercase">Mompós · Colombia</span></div><a href="https://wa.me/573003100299" target="_blank" rel="noopener noreferrer" className="hover-spring inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 hover:bg-[#25D366]/25 transition-colors text-[#FFFBF0] font-sans tracking-[0.15em] uppercase"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.27 4.91L2 22l5.18-1.27C8.66 21.54 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.21-.45-4.55-1.24l-.33-.19-3.41.84.84-3.41-.21-.33C3.45 15.21 3 13.66 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z"/></svg>+57 300 310 0299</a></div>
        <div className="mt-8 text-[10px] tracking-[0.3em] uppercase text-[#FFFBF0]/40">Casa Mónica · Mompós · 2026</div>
      </div>
    </footer>
  );
}
