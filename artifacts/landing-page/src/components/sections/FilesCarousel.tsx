import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

const BASE_IMAGES = Array.from({ length: 29 }, (_, i) => ({
  src: `${import.meta.env.BASE_URL}files/${i + 1}.webp`,
  label: `Molde ${i + 1}`,
}));

const CARD_WIDTH = 200;
const CARD_GAP = 14;
const DURATION = BASE_IMAGES.length * 2.2;

const images = [...BASE_IMAGES, ...BASE_IMAGES];

export function FilesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper containerClassName="max-w-5xl">
      <style>{`
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: carousel-scroll ${DURATION}s linear infinite;
        }
        .carousel-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <span
          className="inline-block font-sans font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
          style={{ background: "#ad674b18", color: "#ad674b" }}
        >
          +250 arquivos incluídos
        </span>
        <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">
          Veja alguns dos{" "}
          <span style={{ color: "#ad674b" }}>moldes que você recebe</span>
        </h2>
        <p className="font-sans text-muted-foreground text-sm mt-2">
          Todos prontos para imprimir e usar na sua cerâmica fria
        </p>
      </motion.div>

      <div className="relative">
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            ref={trackRef}
            className="carousel-track flex"
            style={{ gap: CARD_GAP, width: "max-content" }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: CARD_WIDTH,
                  background: "#fdf8f5",
                  border: "1px solid #ad674b1a",
                  boxShadow: "0 2px 12px rgba(173,103,75,0.09)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover"
                  style={{ height: 230, display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <p className="text-center font-sans text-xs text-muted-foreground mt-4">
        E muito mais…{" "}
        <span className="font-semibold" style={{ color: "#ad674b" }}>
          +250 moldes no total
        </span>
      </p>
    </SectionWrapper>
  );
}
