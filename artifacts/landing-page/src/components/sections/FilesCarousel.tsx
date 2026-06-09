import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PdfThumbnail } from "../ui/PdfThumbnail";

const moldes = [
  "Arco-íris",
  "Bandeja curvada",
  "Boca 1",
  "Boca 2",
  "Borboleta",
  "Caixa surpresa Mario",
  "Circulo grande",
  "Circulos 1",
  "Coração",
  "Costela de adão",
  "Enfeites",
  "Enfeites natal",
  "Escultura casal 1",
  "Escultura casal 2",
  "Estrela",
  "Fatia melancia",
  "Flor 1",
  "Flor 2",
  "Gancho flor",
  "Gatinho",
  "Godê retangular",
  "Lua",
  "Pacman",
  "Porta jóias arco-iris",
  "Porta vela",
  "Porta-chaves casinha",
  "Porta-copos",
  "Porta-discos de algodão",
  "Porta-fotos magnético natal",
  "Porta-retrato flor",
  "Prateleira altar 1",
  "Pratinho cogumelo Mario",
  "Prato bolo",
  "Prato bolo(Pé)",
  "Presilhas cabelo",
  "Quadrado 1",
  "Retângulo 1",
  "Retângulo 2",
  "Retângulo 3",
  "Rosto com flores",
  "Sapinho fofo",
  "Vaso curvado",
];

const CARD_WIDTH = 180;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;
const VISIBLE_AHEAD = 6;

export function FilesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [visibleUntil, setVisibleUntil] = useState(VISIBLE_AHEAD);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const visible = trackRef.current.parentElement?.clientWidth ?? 0;
      const total = moldes.length * STEP - CARD_GAP;
      setMaxOffset(Math.max(0, total - visible));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollBy = useCallback(
    (dir: 1 | -1) => {
      setOffset((prev) => {
        const next = prev + dir * STEP * 3;
        const clamped = Math.max(0, Math.min(next, maxOffset));
        const firstVisible = Math.floor(clamped / STEP);
        setVisibleUntil((v) => Math.max(v, firstVisible + VISIBLE_AHEAD + 4));
        return clamped;
      });
    },
    [maxOffset]
  );

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setOffset((prev) => {
        const next = prev + STEP;
        const newOffset = next > maxOffset ? 0 : next;
        const firstVisible = Math.floor(newOffset / STEP);
        setVisibleUntil((v) => Math.max(v, firstVisible + VISIBLE_AHEAD + 2));
        return newOffset;
      });
    }, 3500);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [maxOffset]);

  const basePath = import.meta.env.BASE_URL;

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
          onClick={() => { stopAuto(); scrollBy(-1); }}
          disabled={offset === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all disabled:opacity-30"
          style={{ background: "#fff", border: "1px solid #ad674b33", color: "#ad674b" }}
          aria-label="Anterior"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: CARD_GAP,
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {moldes.map((name, i) => {
              const shouldRender = i < visibleUntil;
              const encodedName = encodeURIComponent(name);
              const src = `${basePath}moldes/${encodedName}.pdf`;

              return (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col items-center rounded-2xl overflow-hidden"
                  style={{
                    width: CARD_WIDTH,
                    background: "#fff",
                    border: "1px solid #ad674b22",
                    boxShadow: "0 2px 14px rgba(173,103,75,0.10)",
                  }}
                >
                  <div
                    className="w-full flex items-center justify-center"
                    style={{ height: 220, background: "#fdf8f5", padding: "12px 8px 8px" }}
                  >
                    {shouldRender ? (
                      <PdfThumbnail
                        src={src}
                        width={CARD_WIDTH - 16}
                        height={204}
                      />
                    ) : (
                      <div
                        className="animate-pulse rounded-lg"
                        style={{ width: CARD_WIDTH - 16, height: 204, background: "#f0e5de" }}
                      />
                    )}
                  </div>
                  <div
                    className="w-full px-3 py-2.5 text-center"
                    style={{ borderTop: "1px solid #ad674b15" }}
                  >
                    <span
                      className="font-sans text-[11px] font-semibold leading-tight block"
                      style={{ color: "#5c3d2e" }}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => { stopAuto(); scrollBy(1); }}
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
