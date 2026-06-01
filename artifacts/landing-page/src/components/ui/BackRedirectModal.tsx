import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Check, Zap, Star } from "lucide-react";

const CHECKOUT_BACK = "https://pay.wiapy.com/mn8PydQryz";

const items = [
  "+250 moldes prontos de cerâmica fria",
  "Passo a passo fácil de seguir",
  "Lista de materiais de cada peça",
  "Dicas de acabamento profissional",
  "Acesso imediato pelo celular",
  "Acesso vitalício",
];

export function BackRedirectModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.history.pushState({ backRedirect: true }, "");

    const handlePopState = () => {
      setOpen(true);
      window.history.pushState({ backRedirect: true }, "");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(5px)" }}
          onClick={handleClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full sm:max-w-sm rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
            style={{ maxHeight: "92dvh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Fechar"
              className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.25)" }}
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Header */}
            <div
              className="px-5 pt-5 pb-4 text-center"
              style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
            >
              <span
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold text-[11px] tracking-widest uppercase text-white mb-2"
                style={{ background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.35)" }}
              >
                <Zap className="w-3 h-3 fill-white" /> Espera! Oferta Relâmpago
              </span>
              <h2 className="font-bold text-white text-lg leading-tight">
                Não vai embora sem aproveitar!
              </h2>
              <p className="text-white/80 text-sm mt-1 font-light">
                Tudo isso por um valor que nunca mais voltará
              </p>
            </div>

            {/* Price */}
            <div
              className="px-5 py-4 flex flex-col items-center gap-1 text-center"
              style={{ background: "linear-gradient(180deg, #f0faf3, #e8f5ec)", borderBottom: "2px solid #4a8e5833" }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>De</span>
                <span className="font-bold line-through text-base" style={{ color: "#ad674b99" }}>R$ 97,00</span>
                <span>por apenas</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-2xl" style={{ color: "#4a8e58" }}>R$</span>
                <span
                  className="font-extrabold leading-none"
                  style={{ color: "#4a8e58", fontSize: "clamp(3.5rem, 18vw, 5rem)", textShadow: "0 2px 12px rgba(74,142,88,0.18)" }}
                >4</span>
                <span className="font-bold text-2xl" style={{ color: "#4a8e58" }}>,90</span>
              </div>
              <span
                className="font-semibold text-xs px-3 py-1 rounded-full"
                style={{ background: "#4a8e5822", color: "#4a8e58" }}
              >
                à vista • acesso imediato
              </span>
            </div>

            {/* Items */}
            <div className="px-5 py-4" style={{ background: "#fff" }}>
              <p className="font-semibold text-[11px] tracking-wide uppercase mb-3" style={{ color: "#ad674b" }}>
                Tudo que você recebe:
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div
                      className="w-4 h-4 mt-0.5 shrink-0 rounded-full flex items-center justify-center"
                      style={{ background: "#ad674b18", border: "1px solid #ad674b44" }}
                    >
                      <Check className="w-2.5 h-2.5" strokeWidth={3} style={{ color: "#ad674b" }} />
                    </div>
                    <span className="font-light text-foreground text-xs leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stars */}
            <div
              className="px-5 py-3 flex items-center justify-center gap-1"
              style={{ background: "#fdf8f5", borderTop: "1px solid #ad674b14" }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="font-light text-xs text-muted-foreground ml-1">+500 alunas satisfeitas</span>
            </div>

            {/* CTAs */}
            <div
              className="px-5 py-4 flex flex-col items-center gap-3"
              style={{ background: "linear-gradient(180deg, #fff 0%, #fdf6f2 100%)", borderTop: "1px solid #ad674b18" }}
            >
              <a
                href={CHECKOUT_BACK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[52px] px-4 py-3 text-white font-bold rounded-full text-sm tracking-wide text-center flex items-center justify-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #5a9e68, #4a8e58)",
                  boxShadow: "0 4px 20px rgba(90,158,104,0.38)",
                }}
              >
                QUERO POR R$4,90 AGORA
              </a>

              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-light">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: "#5a9e68" }} />
                <span>Compra 100% segura • Garantia de 7 dias</span>
              </div>

              <button
                onClick={handleClose}
                className="font-light text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Não, prefiro perder essa oferta
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
