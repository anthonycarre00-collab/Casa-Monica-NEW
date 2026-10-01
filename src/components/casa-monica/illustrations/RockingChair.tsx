"use client";

export function RockingChair({ className = "", color = "var(--charcoal)", animateDraw = true }: { className?: string; color?: string; animateDraw?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className={`${className} living-ink-filter`} style={{ color, transformOrigin: "100px 165px", animation: "rock-chair 4s ease-in-out infinite", display: "block", width: "100%", height: "100%" }} aria-hidden="true">
      <g>
        <rect x="55" y="40" width="6" height="100" rx="2" fill="currentColor" opacity="0.85" />
        <rect x="68" y="35" width="6" height="105" rx="2" fill="currentColor" opacity="0.95" />
        <rect x="81" y="40" width="6" height="100" rx="2" fill="currentColor" opacity="0.85" />
        <path d="M 50 45 Q 75 28 100 45" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
        <rect x="48" y="138" width="80" height="10" rx="2" fill="currentColor" />
        <rect x="50" y="148" width="6" height="40" rx="2" fill="currentColor" opacity="0.9" />
        <rect x="120" y="148" width="6" height="40" rx="2" fill="currentColor" opacity="0.9" />
        <path d="M 50 100 L 45 138 M 130 100 L 135 138" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 30 178 Q 90 198 150 178" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
