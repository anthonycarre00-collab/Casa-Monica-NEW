"use client";

import { useState } from "react";
import { I18nProvider } from "@/components/casa-monica/I18n";
import { DayCycle, DayProgressBar } from "@/components/casa-monica/DayCycle";
import { Nav } from "@/components/casa-monica/Nav";
import { MacondoMode } from "@/components/casa-monica/MacondoMode";
import { AtmospherePanel } from "@/components/casa-monica/AtmospherePanel";
import { WhatsAppFloat } from "@/components/casa-monica/WhatsAppFloat";
import { RiverSpine } from "@/components/casa-monica/Filigrana";
import { LivingInkFilters } from "@/components/casa-monica/illustrations/LivingInkFilters";
import { Hero } from "@/components/casa-monica/Hero";
import { House } from "@/components/casa-monica/House";
import { Gallery } from "@/components/casa-monica/Gallery";
import { River } from "@/components/casa-monica/River";
import { Family } from "@/components/casa-monica/Family";
import { ThingsToDo } from "@/components/casa-monica/ThingsToDo";
import { ThingsToEat } from "@/components/casa-monica/ThingsToEat";
import { HowToGetHere } from "@/components/casa-monica/HowToGetHere";
import { Dictionary } from "@/components/casa-monica/Dictionary";
import { Reserve } from "@/components/casa-monica/Reserve";
import { Footer } from "@/components/casa-monica/Footer";

export default function Home() {
  const [isNight, setIsNight] = useState(false);
  return (
    <I18nProvider>
      <DayCycle onNightChange={setIsNight}>
        <LivingInkFilters />
        <DayProgressBar />
        <Nav />
        <MacondoMode />
        <AtmospherePanel />
        <WhatsAppFloat />
        <div className="fixed left-0 top-0 bottom-0 w-8 z-10 pointer-events-none hidden lg:block"><RiverSpine /></div>
        <div className="site-shell">
          <main className="flex-1">
            <Hero />
            <House />
            <Gallery />
            <River />
            <Family />
            <ThingsToDo />
            <ThingsToEat />
            <HowToGetHere />
            <Dictionary />
            <Reserve isNight={isNight} />
          </main>
          <Footer />
        </div>
      </DayCycle>
    </I18nProvider>
  );
}
