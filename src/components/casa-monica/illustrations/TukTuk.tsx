"use client";
import { motion } from "framer-motion";

/**
 * Mompox Tuk-Tuk (mototaxi) — redesigned based on user's reference photo.
 * Red motorcycle front + WHITE cabin with BLUE stripe + BLACK fabric canopy.
 * 3 wheels (1 front + 2 rear with silver hubcaps). Open sides. Number on side.
 */
export function TukTuk({ className = "" }: { className?: string }) {
  return (
    <motion.div className={className} animate={{ x: ["-15vw", "115vw"] }} transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatDelay: 3 }}>
      <svg width="160" height="80" viewBox="0 0 160 80" fill="none" style={{ filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.3))" }}>
        {/* Ground shadow */}
        <ellipse cx="80" cy="72" rx="65" ry="5" fill="#1A1A1A" opacity="0.15" />

        {/* === MOTORCYCLE FRONT SECTION (~40% of total) === */}
        {/* Front wheel */}
        <circle cx="28" cy="55" r="14" fill="#1A1A1A" />
        <circle cx="28" cy="55" r="9" fill="#333333" />
        <circle cx="28" cy="55" r="4" fill="#C0C0C0" />
        {/* Spokes */}
        <line x1="28" y1="46" x2="28" y2="64" stroke="#C0C0C0" strokeWidth="0.8" opacity="0.7" />
        <line x1="19" y1="55" x2="37" y2="55" stroke="#C0C0C0" strokeWidth="0.8" opacity="0.7" />
        <line x1="22" y1="49" x2="34" y2="61" stroke="#C0C0C0" strokeWidth="0.6" opacity="0.5" />
        <line x1="34" y1="49" x2="22" y2="61" stroke="#C0C0C0" strokeWidth="0.6" opacity="0.5" />

        {/* Red motorcycle body */}
        <path d="M 28 45 L 48 38 L 58 42 L 53 55 L 33 55 Z" fill="#D32F2F" stroke="#1A1A1A" strokeWidth="1" strokeLinejoin="round" />
        {/* Engine block */}
        <rect x="33" y="48" width="20" height="8" fill="#1A1A1A" rx="1" />

        {/* Handlebars */}
        <line x1="33" y1="38" x2="30" y2="22" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="22" x2="36" y2="18" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
        {/* Grip */}
        <circle cx="36" cy="18" r="2" fill="#1A1A1A" />

        {/* Headlight */}
        <ellipse cx="27" cy="33" rx="4" ry="3" fill="#D4A534" stroke="#1A1A1A" strokeWidth="0.5" />
        {/* Light beam */}
        <motion.path d="M 27 33 L 8 28 L 8 38 Z" fill="#D4A534" opacity="0.12" animate={{ opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 2, repeat: Infinity }} />

        {/* === PASSENGER CABIN SECTION (~60% of total) === */}
        {/* Black fabric canopy roof — supported by thin metal frame */}
        <line x1="58" y1="22" x2="62" y2="8" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="118" y1="22" x2="122" y2="8" stroke="#1A1A1A" strokeWidth="1.5" />
        <path d="M 58 8 Q 90 2 122 8 L 122 14 Q 90 10 58 14 Z" fill="#1A1A1A" />

        {/* White/cream cabin body */}
        <path d="M 58 14 L 58 55 L 122 55 L 122 14 Z" fill="#F5F0E8" stroke="#1A1A1A" strokeWidth="1.5" />

        {/* Blue stripe along the side */}
        <rect x="58" y="32" width="64" height="5" fill="#1565C0" />

        {/* Red lower trim (matching motorcycle) */}
        <rect x="58" y="50" width="64" height="5" fill="#D32F2F" stroke="#1A1A1A" strokeWidth="0.5" />

        {/* Number "106" on side — red text on white circle */}
        <circle cx="90" cy="42" r="7" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="0.8" />
        <text x="90" y="45" textAnchor="middle" fontSize="7" fill="#D32F2F" fontFamily="Arial" fontWeight="700">106</text>

        {/* Open side — no door, just an opening */}
        <rect x="66" y="20" width="48" height="10" fill="none" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.3" />

        {/* Bench seat visible through opening */}
        <rect x="68" y="42" width="44" height="8" fill="#3D2817" opacity="0.6" rx="2" />

        {/* === REAR WHEELS (2) === */}
        <circle cx="75" cy="58" r="12" fill="#1A1A1A" />
        <circle cx="75" cy="58" r="7" fill="#333333" />
        <circle cx="75" cy="58" r="3.5" fill="#C0C0C0" />
        <line x1="75" y1="51" x2="75" y2="65" stroke="#C0C0C0" strokeWidth="0.6" opacity="0.6" />
        <line x1="68" y1="58" x2="82" y2="58" stroke="#C0C0C0" strokeWidth="0.6" opacity="0.6" />

        <circle cx="110" cy="58" r="12" fill="#1A1A1A" />
        <circle cx="110" cy="58" r="7" fill="#333333" />
        <circle cx="110" cy="58" r="3.5" fill="#C0C0C0" />
        <line x1="110" y1="51" x2="110" y2="65" stroke="#C0C0C0" strokeWidth="0.6" opacity="0.6" />
        <line x1="103" y1="58" x2="117" y2="58" stroke="#C0C0C0" strokeWidth="0.6" opacity="0.6" />

        {/* === EXHAUST SMOKE === */}
        <motion.circle cx="14" cy="48" r="5" fill="#E8DCC4" opacity="0.35" animate={{ cx: [14, 2], cy: [48, 40], opacity: [0.35, 0], r: [5, 12] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx="10" cy="50" r="3.5" fill="#E8DCC4" opacity="0.25" animate={{ cx: [10, -2], cy: [50, 42], opacity: [0.25, 0], r: [3.5, 9] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }} />
        <motion.circle cx="6" cy="52" r="2.5" fill="#E8DCC4" opacity="0.15" animate={{ cx: [6, -6], cy: [52, 45], opacity: [0.15, 0], r: [2.5, 7] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.6 }} />
      </svg>
    </motion.div>
  );
}
