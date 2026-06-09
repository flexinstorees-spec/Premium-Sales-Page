import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL = 29;
const images = Array.from({ length: TOTAL }, (_, i) => ({
  src: `${import.meta.env.BASE_URL}carousel/${i + 1}.webp`,
  fallback: `${import.meta.env.BASE_URL}carousel/${i + 1}.png`,
  label: `Molde ${i + 1}`,
}));

const CARD_WIDTH = 200;
const CARD_GAP = 14;
const STEP = CARD_WIDTH + CARD_GAP;

export function FilesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const visible = trackRef.current.parentElement?.clientWidth ?? 0;
      const total = images.length * STEP - CARD_GAP;
      setMaxOffset(Math.max(0, total - visible));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  const scrollBy = useCallback(
    (dir: 1 | -1) => {
      stopAuto();
      setOffset((prev) => {
        const next = prev + dir * STEP * 3;
        return Math.max(0, Math.min(next, maxOffset));
      });
    },
    [maxOffset]
  );

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setOffset((prev) => {
        const next = prev + STEP;
        return next > maxOffset ? 0 : next;
      });
    }, 3000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [maxOffset]);

  return (
    <SectionWrapper containerClassName="max-w-5xl">
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

      <div className="relative px-5">
        <button
          onClick={() => scrollBy(-1)}
          disabled={offset === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all disabled:opacity-30"
          style={{ background: "#fff", border: "1px solid #ad674b33", color: "#ad674b" }}
          aria-label="Anterior"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="overflow-hidden rounded-xl">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: CARD_GAP,
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
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
                <picture>
                  <source srcSet={img.src} type="image/webp" />
                  <img
                    src={img.fallback}
                    alt={img.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover"
                    style={{ height: 230, display: "block" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = img.fallback;
                    }}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollBy(1)}
          disabled={offset >= maxOffset}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all disabled:opacity-30"
          style={{ background: "#fff", border: "1px solid #ad674b33", color: "#ad674b" }}
          aria-label="Próximo"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="text-center font-sans text-xs text-muted-foreground mt-6">
        E muito mais…{" "}
        <span className="font-semibold" style={{ color: "#ad674b" }}>
          +250 moldes no total
        </span>
      </p>
    </SectionWrapper>
  );
}
