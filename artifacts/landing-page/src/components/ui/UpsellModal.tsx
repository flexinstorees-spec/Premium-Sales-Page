import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Check, Sparkles, Star } from "lucide-react";

const CHECKOUT_UPSELL = "https://pay.wiapy.com/BdUKV4zHR";
const CHECKOUT_BASICO = "https://pay.wiapy.com/6a1445de0cb7ee7a78ed0906";

const upsellItems = [
  "+250 moldes prontos de cerâmica fria",
  "Passo a passo fácil de seguir",
  "Lista de materiais de cada peça",
  "Dicas de acabamento profissional",
  "Acesso imediato pelo celular",
  "Acesso vitalício",
];

const upsellBonuses = [
  { label: "Bônus 01 — Protocolo Primeira Peça de Cerâmica Fria", image: "/bonus1.webp" },
  { label: "Bônus 02 — Lista Secreta de Fornecedores", image: "/bonus2.webp" },
  { label: "Bônus 03 — O Truque das Peças Perfeitas", image: "/bonus3.webp" },
];

interface UpsellModalProps {
  open: boolean;
  onClose: () => void;
}

export function UpsellModal({ open, onClose }: UpsellModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          onClick={onClose}
        >
          {/* Modal — flex-col with max height so it never overflows screen */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-sm shadow-2xl rounded-3xl flex flex-col"
            style={{ maxHeight: "calc(100dvh - 40px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.25)" }}
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>

            {/* ── FIXED TOP: Header ── */}
            <div
              className="shrink-0 px-5 pt-4 pb-3 text-center flex flex-col items-center gap-1.5 rounded-t-3xl"
              style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
            >
              <span
                className="flex items-center gap-1 px-3 py-0.5 rounded-full font-sans font-bold text-xs tracking-widest uppercase text-white"
                style={{ background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.35)" }}
              >
                <Star className="w-3 h-3 fill-white" /> Oferta Exclusiva
              </span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-white/80" />
                <h2 className="font-sans font-bold text-white text-base leading-snug">
                  Espera! Antes de sair...
                </h2>
                <Sparkles className="w-3.5 h-3.5 text-white/80" />
              </div>
              <p className="font-sans text-white/90 text-xs font-light max-w-xs leading-relaxed">
                Leve o <strong>material completo</strong> com passo a passo e dicas profissionais por apenas:
              </p>
            </div>

            {/* ── SCROLLABLE MIDDLE: Price + Items ── */}
            <div className="overflow-y-auto flex-1" style={{ background: "#fff" }}>
              {/* Price */}
              <div
                className="px-5 py-3 flex flex-col items-center gap-0.5 text-center"
                style={{ background: "#fdf8f5", borderBottom: "1px solid #ad674b22" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-sans text-xs text-muted-foreground">De</span>
                  <span className="font-sans text-xs font-bold line-through" style={{ color: "#ad674b99" }}>R$ 97,00</span>
                  <span className="font-sans text-xs text-muted-foreground">por apenas</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-sans font-bold text-base" style={{ color: "#4a8e58" }}>R$</span>
                  <span
                    className="font-sans font-extrabold leading-none"
                    style={{ color: "#4a8e58", fontSize: "clamp(2.8rem, 14vw, 3.75rem)" }}
                  >14</span>
                  <span className="font-sans font-bold text-base" style={{ color: "#4a8e58" }}>,99</span>
                </div>
                <span className="font-sans text-xs text-muted-foreground font-light">à vista • acesso imediato</span>
              </div>

              {/* Items */}
              <div className="px-5 py-3 flex flex-col gap-2">
                <p className="font-sans font-semibold text-xs tracking-wide uppercase" style={{ color: "#ad674b" }}>
                  O que você recebe:
                </p>
                {upsellItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 shrink-0 rounded-full flex items-center justify-center"
                      style={{ background: "#ad674b18", border: "1px solid #ad674b44" }}
                    >
                      <Check className="w-2.5 h-2.5" strokeWidth={3} style={{ color: "#ad674b" }} />
                    </div>
                    <span className="font-sans font-light text-foreground text-sm">{item}</span>
                  </div>
                ))}

                <div className="border-t my-1" style={{ borderColor: "#ad674b22" }} />

                <p className="font-sans font-semibold text-xs tracking-wide uppercase" style={{ color: "#ad674b" }}>
                  + Bônus exclusivos:
                </p>
                {upsellBonuses.map((bonus, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <img src={bonus.image} alt={bonus.label} className="w-8 h-8 shrink-0 object-contain rounded-lg" />
                    <span className="font-sans font-light text-foreground text-xs leading-snug">{bonus.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── FIXED BOTTOM: CTAs ── */}
            <div
              className="shrink-0 px-5 py-4 flex flex-col items-center gap-2.5 rounded-b-3xl"
              style={{ background: "linear-gradient(180deg, #fff 0%, #fdf6f2 100%)", borderTop: "1px solid #ad674b18" }}
            >
              <a
                href={CHECKOUT_UPSELL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[50px] px-4 py-3 text-white font-bold rounded-full transition-all duration-300 active:scale-[0.98] text-sm tracking-wide text-center flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #5a9e68, #4a8e58)",
                  boxShadow: "0 6px 24px rgba(90,158,104,0.35)",
                }}
              >
                QUERO APROVEITAR OFERTA
              </a>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-light">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: "#5a9e68" }} />
                <span>Compra 100% segura • Garantia de 7 dias</span>
              </div>

              <a
                href={CHECKOUT_BASICO}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Não, prefiro continuar só com o básico
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
