"use client";

import { motion } from "framer-motion";
import { useI18n } from "./I18n";
import { useState } from "react";

/**
 * Gallery — KINETIC SCROLLING MARQUEE (the wow moment).
 *
 * Replaces the static masonry grid with a full-viewport-width auto-scrolling
 * marquee. Two <ul>s side-by-side duplicated for seamless loop. Pauses on
 * hover. Variable heights. Floating Caveat captions.
 *
 * Plus a lightbox modal (click any photo to see it full-size).
 */

type Category = "casa" | "familia" | "pueblo" | "rio";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  height: number; // varied heights for visual rhythm
};

const PHOTOS: Photo[] = [
  { src: "/mompox-river-sunset-real.jpg",   alt: "Atardecer sobre el río Magdalena en Mompox",      caption: "El Magdalena al poniente",
    captionEn: "The Magdalena at sunset",       category: "rio",     height: 480 },
  { src: "/mompox-santa-barbara-night.jpg",  alt: "Iglesia de Santa Bárbara de Mompox de noche",     caption: "Santa Bárbara — la torre",
    captionEn: "Santa Bárbara — the tower",       category: "pueblo",  height: 400 },
  { src: "/mompox-drone-1.jpg",              alt: "Vista aérea de Mompox al amanecer",                 caption: "Mompox desde el cielo",
    captionEn: "Mompox from the sky",          category: "rio",     height: 360 },
  { src: "/owners-couple.jpg",               alt: "Fredy y Mónica en la puerta de su hotel",          caption: "Fredy y Mónica en la puerta",
    captionEn: "Fredy and Mónica at the door",    category: "familia", height: 480 },
  { src: "/mompox-plaza-real.jpg",           alt: "Plaza colonial de Mompox",                          caption: "La plaza del pueblo",
    captionEn: "The town square",            category: "pueblo",  height: 420 },
  { src: "/owner-fredy-real.jpg",            alt: "Fredy, el anfitrión de Casa Mónica",               caption: "Fredy, el anfitrión",
    captionEn: "Fredy, the host",            category: "familia", height: 380 },
  { src: "/mompox-river-colonial.jpg",       alt: "Río Magdalena y arquitectura colonial",            caption: "El río y las casas",
    captionEn: "The river and the houses",             category: "rio",     height: 460 },
  { src: "/mompox-street-colonial.jpg",      alt: "Calle colonial de Mompox al amanecer",            caption: "Calle de Mompox al amanecer",
    captionEn: "Mompox street at dawn",    category: "pueblo",  height: 400 },
  { src: "/mompox-drone-2.jpg",              alt: "Vista aérea de Mompox",                             caption: "Mompox desde arriba",
    captionEn: "Mompox from above",            category: "rio",     height: 440 },
  { src: "/owner-monica-real.jpeg",           alt: "Mónica, la jefa de Casa Mónica",                  caption: "Mónica, la jefa de la casa",
    captionEn: "Mónica, the boss of the house",     category: "familia", height: 420 },
  { src: "/mompox-street-banners.jpg",       alt: "Calle de Mompox con banderas y adornos",           caption: "Calle con banderas — fiesta",
    captionEn: "Street with banners — fiesta",       category: "pueblo",  height: 380 },
  { src: "/mompox-street-golden.jpg",          alt: "Calle colonial de Mompox al atardecer dorado",     caption: "Calle al atardecer dorado",        captionEn: "Street at golden hour",         category: "pueblo",  height: 400 },
  { src: "/mompox-champan-sunset.jpg",         alt: "Champán en el río Magdalena al atardecer",          caption: "Champán al atardecer",            captionEn: "Champán at sunset",             category: "rio",     height: 380 },
  { src: "/mompox-balcony-flowers.jpg",         alt: "Balcón colonial con buganvilia en Mompox",          caption: "Balcón con buganvilia",          captionEn: "Balcony with bougainvillea",     category: "pueblo",  height: 420 },
  { src: "/filigree-artisan-ai.jpg",           alt: "Artesano tejiendo filigrana de oro en Mompox",      caption: "Filigrana momposina",            captionEn: "Momposino filigree",            category: "pueblo",  height: 360 },
];

export function Gallery() {
  const { lang } = useI18n();
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  // Duplicate the photos for seamless loop
  const marqueePhotos = [...PHOTOS, ...PHOTOS];

  return (
    <section id="galeria" className="bg-cal py-16 sm:py-20 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 mb-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="eyebrow mb-3">La casa en fotos</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--charcoal)] leading-[1.1] font-light">
            Un paseo por <em className="text-[var(--terracotta)] not-italic font-medium">Mompox</em>
          </h2>
          <p className="font-script text-2xl text-[var(--charcoal)]/75 mt-3">
            — el pueblo, la casa, el río, la familia. Pasa el mouse para pausar, toca para verla grande.
          </p>
        </motion.div>
      </div>

      {/* KINETIC MARQUEE — full-viewport-width auto-scrolling film strip */}
      <div className="relative w-screen overflow-hidden">
        <div className="marquee-track flex gap-4 w-max">
          {marqueePhotos.map((photo, i) => (
            <motion.figure
              key={`${photo.src}-${i}`}
              className="magnetic-item relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-lg border-2 border-[var(--charcoal)]/10"
              style={{ width: `${photo.height * 0.75}px`, height: `${photo.height}px` }}
              onClick={() => setLightbox(photo)}
              whileHover={{ y: -8 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Caption overlay — floating Caveat */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--charcoal)]/85 to-transparent p-4 pt-12">
                <p className="font-script text-xl text-[var(--cream)] drop-shadow-md">
                  {lang === "en" ? photo.captionEn : photo.caption}
                </p>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Closing line */}
      <motion.p
        className="mt-12 text-center font-script text-2xl text-[var(--charcoal)]/75 max-w-2xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        Mompox no se pasa — Mompox se llega. Y una vez llegás, hay todo esto.
      </motion.p>

      {/* LIGHTBOX MODAL */}
      {lightbox && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[var(--charcoal)]/92 backdrop-blur-md flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[var(--cream)]/15 hover:bg-[var(--cream)]/25 flex items-center justify-center transition-colors text-[var(--cream)] text-2xl z-10"
            aria-label="Cerrar"
          >✕</button>
          <motion.figure
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border-2 border-[var(--cream)]/20"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-script text-2xl text-[var(--cream)]">{lightbox.caption}</p>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </section>
  );
}
