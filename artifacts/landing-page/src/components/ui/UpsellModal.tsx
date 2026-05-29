import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Check, Star } from "lucide-react";

const CHECKOUT_UPSELL = "https://pay.wiapy.com/mn8PydQryz";
const CHECKOUT_BASICO = "https://pay.wiapy.com/mn8PydQryz";

const upsellItems = [
  "+250 moldes prontos",
  "Passo a passo fácil",
  "Lista de materiais",
  "Dicas de acabamento",
  "Acesso pelo celular",
  "Acesso vitalício",
];

const upsellBonuses = [
  { label: "Protocolo Primeira Peça", image: "/bonus1.webp" },
  { label: "Lista Secreta de Fornecedores", image: "/bonus2.webp" },
  { label: "O Truque das Peças Perfeitas", image: "/bonus3.webp" },
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-2.5 right-2.5 z-20 w-6 h-6 flex items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.28)" }}
            >
              <X className="w-3 h-3 text-white" />
            </button>

            {/* Header */}
            <div
              className="px-4 pt-3 pb-2.5 text-center"
              style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
            >
              <span
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-sans font-bold text-[10px] tracking-widest uppercase text-white mb-1"
                style={{ background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.35)" }}
              >
                <Star className="w-2.5 h-2.5 fill-white" /> Oferta Exclusiva
              </span>
              <h2 className="font-sans font-bold text-white text-sm leading-tight">
                Espera! Leve o material completo por apenas:
              </h2>
            </div>

            {/* Price */}
            <div
              className="px-4 py-3 flex flex-col items-center gap-1"
              style={{ background: "linear-gradient(180deg, #f0faf3 0%, #e8f5ec 100%)", borderBottom: "2px solid #4a8e5833" }}
            >
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-xs text-muted-foreground">De</span>
                <span className="font-sans text-xs font-semibold line-through" style={{ color: "#ad674b99" }}>R$ 97,00</span>
                <span className="font-sans text-xs text-muted-foreground">por apenas</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-sans font-bold text-xl" style={{ color: "#4a8e58" }}>R$</span>
                <span
                  className="font-sans font-extrabold leading-none"
                  style={{ color: "#4a8e58", fontSize: "clamp(3rem, 16vw, 4.5rem)", textShadow: "0 2px 12px rgba(74,142,88,0.18)" }}
                >14</span>
                <span className="font-sans font-bold text-xl" style={{ color: "#4a8e58" }}>,99</span>
              </div>
              <span
                className="font-sans font-semibold text-xs px-3 py-0.5 rounded-full"
                style={{ background: "#4a8e5822", color: "#4a8e58" }}
              >
                à vista • acesso imediato
              </span>
            </div>

            {/* Items — 2 column grid */}
            <div className="px-4 pt-2.5 pb-2" style={{ background: "#fff" }}>
              <p className="font-sans font-semibold text-[10px] tracking-wide uppercase mb-1.5" style={{ color: "#ad674b" }}>
                O que você recebe:
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                {upsellItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="w-3.5 h-3.5 shrink-0 rounded-full flex items-center justify-center"
                      style={{ background: "#ad674b18", border: "1px solid #ad674b44" }}
                    >
                      <Check className="w-2 h-2" strokeWidth={3} style={{ color: "#ad674b" }} />
                    </div>
                    <span className="font-sans font-light text-foreground text-[11px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bonuses */}
            <div className="px-4 py-2" style={{ background: "#fff", borderTop: "1px solid #ad674b14" }}>
              <p className="font-sans font-semibold text-[10px] tracking-wide uppercase mb-1.5" style={{ color: "#ad674b" }}>
                + Bônus exclusivos:
              </p>
              <div className="flex flex-col gap-1.5">
                {upsellBonuses.map((bonus, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img src={bonus.image} alt={bonus.label} className="w-7 h-7 shrink-0 object-contain rounded-md" />
                    <span className="font-sans font-light text-foreground text-[11px] leading-snug">{bonus.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div
              className="px-4 py-3 flex flex-col items-center gap-2"
              style={{ background: "linear-gradient(180deg, #fff 0%, #fdf6f2 100%)", borderTop: "1px solid #ad674b18" }}
            >
              <a
                href={CHECKOUT_UPSELL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] px-4 py-2.5 text-white font-bold rounded-full text-sm tracking-wide text-center flex items-center justify-center transition-all active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #5a9e68, #4a8e58)",
                  boxShadow: "0 4px 18px rgba(90,158,104,0.35)",
                }}
              >
                QUERO APROVEITAR OFERTA
              </a>

              <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-light">
                <ShieldCheck className="w-3 h-3 shrink-0" style={{ color: "#5a9e68" }} />
                <span>Compra 100% segura • Garantia de 7 dias</span>
              </div>

              <a
                href={CHECKOUT_BASICO}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
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
