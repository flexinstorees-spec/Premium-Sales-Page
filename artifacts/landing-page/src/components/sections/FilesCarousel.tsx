import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@assets/1_1780966100010.png";
import img2 from "@assets/2_1780966100010.png";
import img3 from "@assets/3_1780966100010.png";
import img4 from "@assets/4_1780966100010.png";
import img5 from "@assets/5_1780966100011.png";
import img6 from "@assets/6_1780966100011.png";
import img7 from "@assets/7_1780966100011.png";
import img8 from "@assets/8_1780966100011.png";
import img9 from "@assets/9_1780966100011.png";
import img10 from "@assets/10_1780966100011.png";
import img11 from "@assets/11_1780966100012.png";
import img12 from "@assets/12_1780966100012.png";
import img13 from "@assets/13_1780966100012.png";
import img14 from "@assets/14_1780966100012.png";
import img15 from "@assets/15_1780966100009.png";
import img16 from "@assets/16_1780966100009.png";
import img17 from "@assets/17_1780966100009.png";
import img18 from "@assets/18_1780966100009.png";
import img19 from "@assets/19_1780966100010.png";
import img20 from "@assets/20_1780966100010.png";

const images = [
  { src: img1, label: "Molde 1" },
  { src: img2, label: "Molde 2" },
  { src: img3, label: "Molde 3" },
  { src: img4, label: "Molde 4" },
  { src: img5, label: "Molde 5" },
  { src: img6, label: "Molde 6" },
  { src: img7, label: "Molde 7" },
  { src: img8, label: "Molde 8" },
  { src: img9, label: "Molde 9" },
  { src: img10, label: "Molde 10" },
  { src: img11, label: "Molde 11" },
  { src: img12, label: "Molde 12" },
  { src: img13, label: "Molde 13" },
  { src: img14, label: "Molde 14" },
  { src: img15, label: "Molde 15" },
  { src: img16, label: "Molde 16" },
  { src: img17, label: "Molde 17" },
  { src: img18, label: "Molde 18" },
  { src: img19, label: "Molde 19" },
  { src: img20, label: "Molde 20" },
];

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
