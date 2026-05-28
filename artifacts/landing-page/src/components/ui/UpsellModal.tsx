import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Check, Sparkles, Star } from "lucide-react";

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

interface UpsellModalProps {
  open: boolean;
  onClose: () => void;
}

export function UpsellModal({ open, onClose }: UpsellModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
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
            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                style={{ background: "rgba(255,255,255,0.25)" }}
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Header */}
              <div
                className="px-6 pt-7 pb-5 text-center flex flex-col items-center gap-2"
                style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
              >
                <span
                  className="flex items-center gap-1 px-3 py-1 rounded-full font-sans font-bold text-xs tracking-widest uppercase text-white mb-1"
                  style={{ background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.35)" }}
                >
                  <Star className="w-3 h-3 fill-white" /> Oferta Exclusiva
                </span>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white/80" />
                  <h2 className="font-sans font-bold text-white text-lg leading-snug">
                    Espera! Antes de sair...
                  </h2>
                  <Sparkles className="w-4 h-4 text-white/80" />
                </div>
                <p className="font-sans text-white/90 text-sm font-light max-w-xs leading-relaxed">
                  Que tal levar o <strong>material completo</strong> com passo a passo, lista de materiais e dicas profissionais por apenas:
                </p>
              </div>

              {/* Price highlight */}
              <div
                className="px-6 py-5 flex flex-col items-center gap-1 text-center"
                style={{ background: "#fdf8f5", borderBottom: "1px solid #ad674b22" }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-sans text-sm text-muted-foreground">De</span>
                  <span className="font-sans text-sm font-bold line-through" style={{ color: "#ad674b99" }}>R$ 97,00</span>
                  <span className="font-sans text-sm text-muted-foreground">por apenas</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-sans font-bold text-2xl" style={{ color: "#4a8e58" }}>R$</span>
                  <span className="font-sans font-extrabold leading-none text-7xl" style={{ color: "#4a8e58" }}>14</span>
                  <span className="font-sans font-bold text-2xl" style={{ color: "#4a8e58" }}>,99</span>
                </div>
                <span className="font-sans text-xs text-muted-foreground font-light">à vista • acesso imediato</span>
              </div>

              {/* Items */}
              <div className="px-6 py-4 flex flex-col gap-2.5" style={{ background: "#fff" }}>
                <p className="font-sans font-semibold text-xs tracking-wide uppercase mb-1" style={{ color: "#ad674b" }}>
                  O que você recebe:
                </p>
                {upsellItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center"
                      style={{ background: "#ad674b18", border: "1px solid #ad674b44" }}
                    >
                      <Check className="w-3 h-3" strokeWidth={3} style={{ color: "#ad674b" }} />
                    </div>
                    <span className="font-sans font-light text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="px-6 py-5 flex flex-col items-center gap-3"
                style={{ background: "linear-gradient(180deg, #fff 0%, #fdf6f2 100%)", borderTop: "1px solid #ad674b18" }}
              >
                <a
                  href={CHECKOUT_UPSELL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-full min-h-[56px] px-8 py-3 text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm tracking-wide"
                  style={{
                    background: "linear-gradient(135deg, #5a9e68, #4a8e58)",
                    boxShadow: "0 6px 24px rgba(90,158,104,0.35)",
                  }}
                >
                  SIM! QUERO O COMPLETO POR R$ 14,99
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center gap-2 text-xs text-muted-foreground font-light">
                  <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: "#5a9e68" }} />
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
        </>
      )}
    </AnimatePresence>
  );
}
