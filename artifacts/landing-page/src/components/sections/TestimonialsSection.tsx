import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

import dep1 from "@assets/DEP_1_1781098593610.png";
import dep2 from "@assets/DEP_2_1781098593610.png";
import dep3 from "@assets/DEP_3_1781098593609.png";
import dep4 from "@assets/DEP_4_1781098593609.png";
import dep5 from "@assets/DEP_5_1781098593610.png";

const testimonials = [
  { src: dep1, alt: "Depoimento Mariana" },
  { src: dep2, alt: "Depoimento Patrícia" },
  { src: dep3, alt: "Depoimento Carla" },
  { src: dep4, alt: "Depoimento Luciana" },
  { src: dep5, alt: "Depoimento Sandra" },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <SectionWrapper>
      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">
          O que Nossas Alunas Estão Falando?
        </h2>
      </div>

      <div className="flex flex-col items-center gap-6 px-4">
        <div className="relative w-full max-w-sm mx-auto">
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              boxShadow: "0 6px 32px rgba(173,103,75,0.15)",
              border: "1px solid #ad674b18",
            }}
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.img
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -60, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                src={testimonials[current].src}
                alt={testimonials[current].alt}
                className="w-full h-auto block"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={() => go(-1)}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all active:scale-95"
            style={{ background: "#fff", border: "1px solid #ad674b33", color: "#ad674b" }}
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => go(1)}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all active:scale-95"
            style={{ background: "#fff", border: "1px solid #ad674b33", color: "#ad674b" }}
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="rounded-full transition-all"
              style={{
                width: i === current ? 20 : 8,
                height: 8,
                background: i === current ? "#ad674b" : "#ad674b44",
              }}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
