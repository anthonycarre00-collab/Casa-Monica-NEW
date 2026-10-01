"use client";

import { motion } from "framer-motion";

/**
 * Floating WhatsApp widget with REAL MÓNICA PHOTO — bottom-right.
 *
 * Replaced the bad hand-drawn caricature with the actual photo of Mónica
 * (owner-monica-real.jpeg) in a circular frame with terracotta ring + a
 * golden "¡holaa!" speech bubble that bobs gently.
 */

export function WhatsAppFloat() {
  const waLink = "https://wa.me/573003100299?text=" + encodeURIComponent("Hola Fredy y Mónica, quiero reservar en Mompox.");

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="magnetic-target fixed bottom-5 right-5 z-90 flex items-end gap-2 group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp — Mónica contesta ella misma"
    >
      {/* "¡holaa!" speech bubble — golden, bobs gently */}
      <motion.div
        className="hidden sm:flex items-center justify-center mb-1"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-[var(--golden)] text-[var(--charcoal)] font-script text-lg px-3 py-1 rounded-2xl rounded-br-none shadow-md">
          ¡holaa!
        </div>
      </motion.div>

      {/* Real Mónica photo in circular frame with terracotta ring */}
      <motion.div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg flex-shrink-0 ring-2 ring-[var(--terracotta)] ring-offset-2 ring-offset-[var(--bg)]"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/owner-monica-real.jpeg"
          alt="Mónica, la jefa de Casa Mónica"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* WhatsApp green button */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] shadow-xl shadow-[#25D366]/40 flex items-center justify-center transition-colors group-hover:scale-110 transition-transform">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.47 14.38c-.27-.14-1.62-.8-1.87-.89-.27-.1-.46-.14-.65.14-.19.27-.74.89-.91 1.07-.18.19-.34.21-.61.07-.27-.14-1.16-.43-2.21-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.13-.13.27-.34.41-.5.13-.17.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49-.17-.01-.37-.01-.56-.01-.19 0-.5.07-.77.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.15.19 2.06 3.15 5.01 4.42.7.3 1.25.48 1.68.62.71.22 1.36.19 1.87.12.57-.09 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.19-.52-.33z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.27 4.91L2 22l5.18-1.27C8.66 21.54 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.21-.45-4.55-1.24l-.33-.19-3.41.84.84-3.41-.21-.33C3.45 15.21 3 13.66 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z"/>
        </svg>
      </div>
    </motion.a>
  );
}
