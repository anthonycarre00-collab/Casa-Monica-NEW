"use client";
import { useState } from "react";
import { Weather } from "./Weather";
import { AmbientSound } from "./AmbientSound3";
import { Cloud, X } from "lucide-react";
export function AtmospherePanel() {
  const [open, setOpen] = useState(false);
  return (<>
    <button onClick={() => setOpen(!open)} className={`magnetic-target fixed bottom-5 left-5 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl transition-all hover:scale-110 ${open ? "bg-[var(--accent)] text-[#FFFBF0]" : "bg-[var(--fg)] text-[var(--golden)] hover:bg-[var(--accent)] hover:text-[#FFFBF0]"}`} aria-label="Abrir panel de Mompox" title="Clima y sonidos de Mompox"><Cloud className="w-6 h-6 sm:w-7 sm:h-7" />{!open && <span className="absolute inset-0 rounded-full border-2 border-[var(--golden)] animate-ping opacity-30" />}</button>
    {open && (<div className="fixed bottom-24 left-5 z-50 w-[calc(100vw-2.5rem)] sm:w-80 max-w-sm animate-sticker-pop"><div className="bg-[#FFFBF0]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[var(--fg)]/15 overflow-hidden"><div className="flex items-center justify-between px-4 py-2.5 bg-[var(--fg)] text-[#FFFBF0]"><span className="eyebrow text-[var(--golden)]">Atmósfera de Mompox</span><button onClick={() => setOpen(false)} className="text-[#FFFBF0]/60 hover:text-[#FFFBF0] transition-colors" aria-label="Cerrar"><X className="w-4 h-4" /></button></div><div className="p-3 space-y-3 max-h-[70vh] overflow-y-auto"><Weather /><AmbientSound /></div></div></div>)}
  </>);
}
