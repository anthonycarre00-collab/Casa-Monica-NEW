"use client";

export function MompoxSkyline({ className = "", animateDraw = true }: { className?: string; animateDraw?: boolean }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 260" fill="none" preserveAspectRatio="xMidYMax meet" className={`${className} living-ink-filter`} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }}>
      <path d="M 60 220 L 60 80 L 50 80 L 50 60 L 70 60 L 70 80 L 60 80 M 50 60 L 55 40 L 65 40 L 70 60 M 55 40 L 60 20 L 65 40 M 60 20 L 60 10" fill="var(--charcoal)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="60" cy="50" r="4" fill="var(--golden)" stroke="var(--charcoal)" strokeWidth="1" />
      <text x="60" y="240" textAnchor="middle" fontSize="12" fill="var(--terracotta)" fontFamily="var(--font-script)" opacity="0.8">Santa Bárbara</text>
      <path d="M 180 220 L 180 100 L 170 100 L 170 85 L 190 85 L 190 100 L 180 100 M 175 85 L 180 70 L 185 85" fill="var(--charcoal)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="180" y="240" textAnchor="middle" fontSize="12" fill="var(--terracotta)" fontFamily="var(--font-script)" opacity="0.8">La Concepción</text>
      <path d="M 310 220 L 310 110 Q 310 80 335 80 Q 360 80 360 110 L 360 220 M 335 80 L 335 65 L 345 60 L 355 65 L 355 80" fill="var(--charcoal)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="345" cy="58" r="3" fill="var(--golden)" />
      <text x="335" y="240" textAnchor="middle" fontSize="12" fill="var(--terracotta)" fontFamily="var(--font-script)" opacity="0.8">Catedral</text>
      <path d="M 460 220 L 460 90 L 450 90 L 450 75 L 470 75 L 470 90 L 460 90 M 455 75 L 460 55 L 465 75" fill="var(--charcoal)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="460" y="240" textAnchor="middle" fontSize="12" fill="var(--terracotta)" fontFamily="var(--font-script)" opacity="0.8">San Francisco</text>
      <path d="M 570 220 L 570 100 L 560 100 L 560 85 L 580 85 L 580 100 L 570 100 M 570 85 L 570 65 M 565 70 L 575 70" fill="var(--charcoal)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="570" y="240" textAnchor="middle" fontSize="12" fill="var(--terracotta)" fontFamily="var(--font-script)" opacity="0.8">Santo Domingo</text>
      <path d="M 680 220 L 680 105 L 670 105 L 670 90 L 690 90 L 690 105 L 680 105" fill="var(--charcoal)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="680" y="240" textAnchor="middle" fontSize="11" fill="var(--terracotta)" fontFamily="var(--font-script)" opacity="0.8">San Juan de Dios</text>
      <path d="M 760 220 L 760 115 L 752 115 L 752 105 L 768 105 L 768 115 L 760 115" fill="var(--charcoal)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="760" y="240" textAnchor="middle" fontSize="12" fill="var(--terracotta)" fontFamily="var(--font-script)" opacity="0.8">El Sagrario</text>
      <path d="M 0 220 L 800 220" stroke="var(--charcoal)" strokeWidth="2.5" />
      <text x="400" y="255" textAnchor="middle" fontSize="13" fill="var(--golden)" fontFamily="var(--font-script)" opacity="0.8">Albarrada del Magdalena</text>
      <path d="M 0 230 Q 50 228 100 230 Q 150 232 200 230 Q 250 228 300 230 Q 350 232 400 230 Q 450 228 500 230 Q 550 232 600 230 Q 650 228 700 230 Q 750 232 800 230" stroke="var(--river-teal)" strokeWidth="1" opacity="0.6" fill="none" />
      <path d="M 0 240 Q 50 238 100 240 Q 150 242 200 240 Q 250 238 300 240 Q 350 242 400 240 Q 450 238 500 240 Q 550 242 600 240 Q 650 238 700 240 Q 750 242 800 240" stroke="var(--river-teal)" strokeWidth="0.8" opacity="0.4" fill="none" />
    </svg>
  );
}

export function ChampanBoat({ className = "", animateDraw = true, drift = true }: { className?: string; animateDraw?: boolean; drift?: boolean }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 220 130" fill="none" className={`${className} living-ink-filter ${drift ? "animate-shimmer" : ""}`} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }}>
      <path d="M 10 105 Q 30 100 50 105 Q 70 110 90 105 Q 110 100 130 105 Q 150 110 170 105 Q 190 100 210 105" stroke="var(--river-teal)" strokeWidth="1" opacity="0.5" fill="none" />
      <path d="M 10 115 Q 30 110 50 115 Q 70 120 90 115 Q 110 110 130 115 Q 150 120 170 115 Q 190 110 210 115" stroke="var(--river-teal)" strokeWidth="0.8" opacity="0.4" fill="none" />
      <path d="M 30 80 Q 35 100 110 100 Q 185 100 190 80 L 175 80 Q 165 95 110 95 Q 55 95 45 80 Z" fill="#8B4513" stroke="var(--charcoal)" strokeWidth="1.8" strokeLinejoin="round" />
      <line x1="110" y1="80" x2="110" y2="20" stroke="var(--charcoal)" strokeWidth="2" />
      <path d="M 50 30 Q 110 5 170 30 L 165 50 Q 110 35 55 50 Z" fill="#4A6B3D" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M 110 22 L 124 26 L 110 32 Z" fill="#E6206B" stroke="var(--charcoal)" strokeWidth="1" />
    </svg>
  );
}

export function CeibaTree({ className = "", animateDraw = true }: { className?: string; animateDraw?: boolean }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 280" fill="none" className={`${className} living-ink-filter`} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }}>
      <circle cx="60" cy="60" r="35" fill="var(--sage)" opacity="0.85" />
      <circle cx="100" cy="50" r="40" fill="var(--sage)" opacity="0.9" />
      <circle cx="140" cy="65" r="35" fill="var(--sage)" opacity="0.85" />
      <circle cx="80" cy="80" r="32" fill="var(--sage)" opacity="0.95" />
      <circle cx="120" cy="85" r="32" fill="var(--sage)" opacity="0.95" />
      <path d="M 85 100 Q 88 150 92 200 L 92 260 L 108 260 L 108 200 Q 112 150 115 100 Z" fill="#5D3A1A" stroke="var(--charcoal)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 92 260 Q 70 270 50 275 M 108 260 Q 130 270 150 275" stroke="#5D3A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function CorozoFruit({ className = "", animateDraw = true }: { className?: string; animateDraw?: boolean }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 200" fill="none" className={`${className} living-ink-filter`} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }}>
      <path d="M 80 200 Q 70 150 60 100 Q 50 60 40 30" stroke="var(--sage)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 75 180 Q 60 175 45 185 M 70 160 Q 50 155 35 165" stroke="var(--sage)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="100" r="9" fill="#8B0000" stroke="var(--charcoal)" strokeWidth="1" />
      <circle cx="78" cy="95" r="9" fill="#A00000" stroke="var(--charcoal)" strokeWidth="1" />
      <circle cx="65" cy="85" r="9" fill="#8B0000" stroke="var(--charcoal)" strokeWidth="1" />
      <circle cx="80" cy="80" r="9" fill="#B22222" stroke="var(--charcoal)" strokeWidth="1" />
      <circle cx="95" cy="90" r="9" fill="#8B0000" stroke="var(--charcoal)" strokeWidth="1" />
    </svg>
  );
}
