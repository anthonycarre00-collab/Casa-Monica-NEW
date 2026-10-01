"use client";

import { motion } from "framer-motion";
import { useI18n } from "./I18n";
import { CorozoFruit } from "./illustrations/Scenery";

/**
 * Family — DUSK scene.
 *
 * The family around the dinner table. Fredy, Mónica, Melissa as character
 * cards with their actual taglines. A corozo fruit illustration (Mónica's
 * juice). Momposina food photo for grounding.
 *
 * Stamp: dusk 🌇
 */

type Family = {
  id: string;
  img: string;
  imgAlt: string;
  name: string;
  role: string;
  roleEn: string;
  tagline: string;
  taglineEn: string;
  bio: string;
  bioEn: string;
  monogram: string;
  accent: string;
  accentText: string;
  tapeColor: string;
  tilt: number;
};

const FAMILY: Family[] = [
  {
    id: "fredy",
    img: "/owner-fredy-real.jpg",
    imgAlt: "Sr Fredy, el anfitrión de Casa Mónica, junto a una estatua en Mompox",
    name: "Fredy",
    role: "el anfitrión",
    roleEn: "the host",
    tagline: "Lo que Fredy no sabe de Mompox, no vale la pena saberlo.",
    taglineEn: "What Fredy doesn't know about Mompox isn't worth knowing.",
    bio: "Mompoxero de toda la vida. Conoce cada callejón, cada iglesia, cada historia — y sobre todo, cada persona que vale la pena conocer en el pueblo. Si le preguntas por un paseo, te lo consigue; si le preguntas por la historia, te la cuenta; y si le preguntas dónde comer bien, te acompaña.",
    bioEn: "A momposino through and through. He knows every alley, every church, every story — and above all, every person worth knowing in town. Ask him about a trip, he'll arrange it; ask about history, he'll tell it; ask where to eat well, he'll take you.",
    monogram: "F",
    accent: "var(--coral)",
    accentText: "#FFFBF0",
    tapeColor: "rgba(244, 196, 48, 0.7)",
    tilt: -3,
  },
  {
    id: "monica",
    img: "/owner-monica-real.jpeg",
    imgAlt: "Sra Mónica, la jefa de Casa Mónica, en casa, con calor de familia",
    name: "Mónica",
    role: "la jefa de la casa",
    roleEn: "the boss of the house",
    tagline: "Te va a matar de gusto — o de calorías.",
    taglineEn: "She'll kill you with kindness — or with calories.",
    bio: "Si Casa Mónica se llama así, es por ella. Lleva la casa con la calma y la firmeza de las mamás caribeñas: la habitación impecable, el café a la hora justa, la conversación que te hace sentir en familia. No te extrañes si un día te llega un casabito o un vaso de jugo de corozo «por si tenías ganas de algo dulce».",
    bioEn: "If Casa Mónica is named after her, it's because of her. She runs the house with the calm and firmness of Caribbean mothers: the spotless room, coffee at the right time, conversation that makes you feel like family. Don't be surprised if a casabito or a glass of corozo juice arrives 'in case you wanted something sweet'.",
    monogram: "M",
    accent: "var(--bougainvillea)",
    accentText: "#FFFBF0",
    tapeColor: "rgba(230, 32, 107, 0.65)",
    tilt: 2,
  },
  {
    id: "melissa",
    img: "/owner-monica-melissa.jpeg",
    imgAlt: "Monica-Melissa, la menor de la familia Casa Mónica",
    name: "Melissa",
    role: "la princesa",
    roleEn: "the princess",
    tagline: "La menor de cuatro hermanas — ¡todas Mónica! Y su perro Manchas.",
    taglineEn: "Youngest of four sisters — all Mónica! And her dog Manchas.",
    bio: "La menor de cuatro hermanas — ¡todas se llaman Mónica! Si la ves por el patio, pregúntale por su dibujo favorito del día. Suele estar cantando o jugando con su perro Manchas. Es la prueba de que esta no es solo una posada: es una casa donde también crece una niña.",
    bioEn: "The youngest of four sisters — all named Mónica! If you see her in the patio, ask about her favorite drawing of the day. She's usually singing or playing with her dog Manchas. She's proof that this isn't just a guesthouse: it's a home where a girl is growing up.",
    monogram: "M",
    accent: "var(--golden)",
    accentText: "var(--charcoal)",
    tapeColor: "rgba(123, 217, 181, 0.7)",
    tilt: -1,
  },
];

export function Family() {
  const { t, lang } = useI18n();

  return (
    <section id="familia"
      className="bg-confetti py-20 sm:py-28 relative overflow-hidden"
      
    >

      {/* Dusk decorative shapes */}
      <div className="absolute top-10 right-[10%] w-32 h-32 rounded-full bg-[var(--bougainvillea)]/25 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-[8%] w-28 h-28 rounded-full bg-[var(--golden)]/35 blur-2xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="eyebrow text-[var(--coral)] mb-3">{t("family.eyebrow")}</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--fg)] leading-[1.1] font-light">
            {t("family.title1")} <em className="text-[var(--bougainvillea)] not-italic font-medium">{t("family.title2")}</em>
          </h2>
          <p className="font-script text-2xl text-[var(--fg)]/70 mt-3">{t("family.subtitle")}</p>
        </motion.div>

        {/* Three character cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {FAMILY.map((person, i) => (
            <motion.article
              key={person.id}
              className="hover-spring"
              style={{ rotate: `${person.tilt}deg` }}
              initial={{ opacity: 0, y: 40, rotate: person.tilt - 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: person.tilt }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <div className="polaroid relative">
                <span className="tape" style={{ background: person.tapeColor }} />
                <div className="relative overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.imgAlt}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div
                    className="absolute top-3 right-3 w-14 h-14 rounded-full flex items-center justify-center font-chunk text-3xl shadow-lg ring-4 ring-[#FFFBF0]"
                    style={{ background: person.accent, color: person.accentText }}
                  >
                    {person.monogram}
                  </div>
                  {person.id === "melissa" && (
                    <>
                      <span className="absolute -top-1 left-3 text-[var(--golden)] text-base animate-slow-pulse">✦</span>
                      <span className="absolute bottom-2 right-3 text-[var(--bougainvillea)] text-sm animate-slow-pulse" style={{ animationDelay: "1.5s" }}>✦</span>
                    </>
                  )}
                </div>
                <div className="px-2 pt-4 pb-2">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-script text-3xl text-[var(--fg)]">{person.name}</h3>
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--fg)]/60">{lang === "en" ? person.roleEn : person.role}</span>
                  </div>
                  <p className="font-serif italic text-base leading-snug mb-3" style={{ color: person.accent }}>
                    {lang === "en" ? person.taglineEn : person.tagline}
                  </p>
                  <p className="font-sans text-sm text-[var(--fg)]/70 leading-relaxed">
                    {lang === "en" ? person.bioEn : person.bio}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Corozo fruit + family quote */}
        <motion.div
          className="mt-16 grid md:grid-cols-[1fr_2fr] gap-12 items-center max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0 }}
        >
          <div className="h-72 max-w-[200px] mx-auto">
            <CorozoFruit animateDraw />
          </div>
          <div>
            <p className="font-serif italic text-xl sm:text-2xl text-[var(--fg)] leading-relaxed">
              «Casa Mónica nació un día, como nacen las cosas buenas en Mompox, casi sin planearlo. Fredy y Mónica vivían aquí, en la casita de la Calle 14 detrás de Santa Bárbara, y un día decidieron abrir la puerta a los viajeros que llegaban buscando algo que los grandes hoteles no sabían dar.»
            </p>
            <p className="font-script text-xl text-[var(--coral)] mt-4">— la familia, contando la historia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
