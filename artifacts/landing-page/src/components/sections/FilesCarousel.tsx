import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

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
import img21 from "@assets/21_1780966218638.png";
import img22 from "@assets/22_1780966218638.png";
import img23 from "@assets/23_1780966218639.png";
import img24 from "@assets/24_1780966218639.png";
import img25 from "@assets/25_1780966218639.png";
import img26 from "@assets/26_1780966218639.png";
import img27 from "@assets/27_1780966218639.png";
import img28 from "@assets/28_1780966218640.png";
import img29 from "@assets/29_1780966218640.png";

const BASE_IMAGES = [
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
  { src: img21, label: "Molde 21" },
  { src: img22, label: "Molde 22" },
  { src: img23, label: "Molde 23" },
  { src: img24, label: "Molde 24" },
  { src: img25, label: "Molde 25" },
  { src: img26, label: "Molde 26" },
  { src: img27, label: "Molde 27" },
  { src: img28, label: "Molde 28" },
  { src: img29, label: "Molde 29" },
];

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
