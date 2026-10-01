"use client";
import { useState, useEffect } from "react";
import { useI18n } from "./I18n";
const NAV_LINK_IDS = ["casa", "galeria", "rio", "familia", "cosas-hacer", "cosas-comer", "como-llegar", "diccionario", "reserva"];
export function Nav() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const links = NAV_LINK_IDS.map(id => ({ id, label: t(`nav.${id}`) }));
  function scrollTo(id: string) { setMobileOpen(false); const el = document.getElementById(id); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top: y, behavior: "smooth" }); } }
  return (
    <header className={`fixed top-0 left-0 right-0 z-80 transition-all duration-500 ${scrolled ? "bg-[var(--cream)]/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(28,24,21,0.25)] py-2" : "bg-transparent py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 magnetic-target" aria-label="Casa Mónica — inicio">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[var(--terracotta)]/40 flex-shrink-0">
            <img src="/casa-monica-logo.png" alt="Logo Hotel Casa Mónica" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:flex flex-col items-start leading-tight">
            <span className="font-script text-2xl text-[var(--terracotta)]">Casa Mónica</span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-[var(--charcoal)]/60 font-medium">Mompox · Bolívar</span>
          </div>
        </button>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="magnetic-target px-3 py-2 text-[13px] font-medium text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors relative group">
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[var(--terracotta)] group-hover:w-2/3 transition-all duration-300" />
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex bg-[var(--cream)] border-2 border-[var(--charcoal)]/20 rounded-full overflow-hidden">
            <button onClick={() => setLang("es")} className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-colors ${lang === "es" ? "bg-[var(--terracotta)] text-[var(--cream)]" : "text-[var(--charcoal)]/60 hover:text-[var(--terracotta)]"}`}>ES</button>
            <button onClick={() => setLang("en")} className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-colors ${lang === "en" ? "bg-[var(--terracotta)] text-[var(--cream)]" : "text-[var(--charcoal)]/60 hover:text-[var(--terracotta)]"}`}>EN</button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-[var(--charcoal)]" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{mobileOpen ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}</svg>
          </button>
        </div>
      </div>
      {mobileOpen && (<div className="lg:hidden bg-[var(--cream)]/98 backdrop-blur-md border-t border-[var(--charcoal)]/10 mt-2"><nav className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-1">{links.map((l) => (<button key={l.id} onClick={() => scrollTo(l.id)} className="px-3 py-3 text-left text-sm font-medium text-[var(--charcoal)] hover:bg-[var(--golden)]/20 hover:text-[var(--terracotta)] rounded-lg transition-colors">{l.label}</button>))}</nav></div>)}
    </header>
  );
}
