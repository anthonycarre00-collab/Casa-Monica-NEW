"use client";

export function HouseFacade({ className = "", animateDraw = true, onZoom }: { className?: string; animateDraw?: boolean; onZoom?: (id: string) => void }) {
  const c = (id: string) => onZoom ? { style: { cursor: "pointer" }, onClick: () => onZoom(id), className: "magnetic-target", "data-clickable": "true" } : {};
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} living-ink-filter`} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }}>
      <path d="M 20 20 L 380 20 M 20 340 L 380 340 M 20 20 L 20 340 M 380 20 L 380 340" stroke="var(--golden)" strokeWidth="0.8" opacity="0.4" />
      <path d="M 20 20 L 32 32 M 32 20 L 20 32" stroke="var(--golden)" strokeWidth="0.6" opacity="0.5" />
      <path d="M 380 20 L 368 32 M 368 20 L 380 32" stroke="var(--golden)" strokeWidth="0.6" opacity="0.5" />
      <path d="M 20 340 L 32 328 M 32 340 L 20 328" stroke="var(--golden)" strokeWidth="0.6" opacity="0.5" />
      <path d="M 380 340 L 368 328 M 368 340 L 380 328" stroke="var(--golden)" strokeWidth="0.6" opacity="0.5" />
      <path d="M 60 150 L 80 100 L 320 100 L 340 150 Z" fill="none" stroke="var(--terracotta)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 80 100 Q 90 110 100 100 M 120 100 Q 130 110 140 100 M 160 100 Q 170 110 180 100 M 200 100 Q 210 110 220 100 M 240 100 Q 250 110 260 100 M 280 100 Q 290 110 300 100 M 320 100 Q 330 110 340 100" stroke="var(--terracotta)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="80" y="150" width="240" height="160" fill="none" stroke="var(--charcoal)" strokeWidth="2" />
      <text x="200" y="145" textAnchor="middle" fontFamily="var(--font-script)" fontSize="16" fill="var(--charcoal)">Casa Mónica</text>
      <g {...c("window-left")}>
        <rect x="100" y="170" width="60" height="70" fill="none" stroke="var(--charcoal)" strokeWidth="2" />
        <rect x="100" y="170" width="12" height="70" fill="none" stroke="var(--sage)" strokeWidth="1.5" />
        <rect x="148" y="170" width="12" height="70" fill="none" stroke="var(--sage)" strokeWidth="1.5" />
        <path d="M 112 170 L 112 240 M 124 170 L 124 240 M 136 170 L 136 240" stroke="var(--charcoal)" strokeWidth="0.8" opacity="0.7" />
        <text x="130" y="165" textAnchor="middle" fontSize="9" fill="var(--charcoal)" opacity="0.5" fontFamily="var(--font-sans)" fontWeight="600">FREDY</text>
      </g>
      <g {...c("window-right")}>
        <rect x="240" y="170" width="60" height="70" fill="none" stroke="var(--charcoal)" strokeWidth="2" />
        <rect x="240" y="170" width="12" height="70" fill="none" stroke="var(--sage)" strokeWidth="1.5" />
        <rect x="288" y="170" width="12" height="70" fill="none" stroke="var(--sage)" strokeWidth="1.5" />
        <path d="M 252 170 L 252 240 M 264 170 L 264 240 M 276 170 L 276 240" stroke="var(--charcoal)" strokeWidth="0.8" opacity="0.7" />
        <text x="270" y="165" textAnchor="middle" fontSize="9" fill="var(--charcoal)" opacity="0.5" fontFamily="var(--font-sans)" fontWeight="600">MÓNICA</text>
      </g>
      <g {...c("door")}>
        <path d="M 175 310 L 175 250 Q 175 225 200 225 Q 225 225 225 250 L 225 310 Z" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
        <path d="M 200 225 L 200 310 M 175 270 L 225 270" stroke="var(--terracotta)" strokeWidth="1.2" opacity="0.6" />
        <circle cx="190" cy="255" r="4" fill="none" stroke="var(--golden)" strokeWidth="1.5" />
        <circle cx="210" cy="255" r="4" fill="none" stroke="var(--golden)" strokeWidth="1.5" />
        <text x="200" y="220" textAnchor="middle" fontSize="9" fill="var(--charcoal)" opacity="0.5" fontFamily="var(--font-sans)" fontWeight="600">ENTRAR</text>
      </g>
      <g {...c("balcony")}>
        <path d="M 130 150 Q 145 130 160 150 Q 175 130 190 150 Q 205 130 220 150 Q 235 130 250 150 Q 265 130 280 150" stroke="var(--charcoal)" strokeWidth="1.5" fill="none" />
        <circle cx="160" cy="148" r="3" fill="#E6206B" opacity="0.85" />
        <circle cx="220" cy="148" r="3" fill="#E6206B" opacity="0.85" />
        <circle cx="250" cy="148" r="3" fill="#E6206B" opacity="0.85" />
      </g>
      <path d="M 80 310 q -10 -20 -25 -25 M 80 310 q -15 -15 -30 -15 M 80 310 q -20 -10 -35 -5" stroke="var(--sage)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 320 310 q 10 -20 25 -25 M 320 310 q 15 -15 30 -15 M 320 310 q 20 -10 35 -5" stroke="var(--sage)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
