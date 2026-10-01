"use client";
import { SelfDrawScript } from "./SelfDrawScript";

export function LivingInkFilters() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }} aria-hidden="true">
        <defs>
          <filter id="living-ink-turbulence" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.022" numOctaves="2" seed="3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <SelfDrawScript />
    </>
  );
}
