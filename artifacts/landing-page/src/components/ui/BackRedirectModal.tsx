import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Check, Zap, Star } from "lucide-react";

const CHECKOUT_BACK = "https://pay.wiapy.com/mn8PydQryz";

const items = [
  "+250 moldes prontos",
  "Passo a passo fácil",
  "Lista de materiais",
  "Dicas de acabamento",
  "Acesso pelo celular",
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(5px)" }}
          onClick={handleClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Fechar"
              className="absolute top-2.5 right-2.5 z-20 w-6 h-6 flex items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.25)" }}
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Header */}
            <div
              className="px-5 pt-4 pb-3 text-center"
              style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
            >
              <span
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold text-[10px] tracking-widest uppercase text-white mb-1.5"
                style={{ background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.35)" }}
              >
                <Zap className="w-2.5 h-2.5 fill-white" /> Oferta Relâmpago
              </span>
              <h2 className="font-bold text-white text-base leading-tight">
                Não vai embora sem aproveitar!
              </h2>
            </div>

            {/* Price — centered */}
            <div
              className="px-5 py-3 flex flex-col items-center gap-1 text-center"
              style={{ background: "linear-gradient(180deg, #f0faf3, #e8f5ec)", borderBottom: "1.5px solid #4a8e5825" }}
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>De</span>
                <span className="font-bold line-through" style={{ color: "#ad674b99" }}>R$ 97,00</span>
                <span>por apenas</span>
              </div>
              <div className="flex items-baseline justify-center gap-1 leading-none">
                <span className="font-bold text-2xl" style={{ color: "#4a8e58" }}>R$</span>
                <span
                  className="font-extrabold"
                  style={{ color: "#4a8e58", fontSize: "3.8rem", lineHeight: 1 }}
                >5</span>
                <span className="font-bold text-2xl" style={{ color: "#4a8e58" }}>,90</span>
              </div>
              <span
                className="font-semibold text-[10px] px-3 py-0.5 rounded-full"
                style={{ background: "#4a8e5822", color: "#4a8e58" }}
              >
                à vista • acesso imediato
              </span>
            </div>

            {/* Items — 2 columns */}
            <div className="px-5 py-3" style={{ background: "#fff" }}>
              <p className="font-semibold text-[10px] tracking-wide uppercase mb-2 text-center" style={{ color: "#ad674b" }}>
                Tudo que você recebe:
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="w-3.5 h-3.5 shrink-0 rounded-full flex items-center justify-center"
                      style={{ background: "#ad674b18", border: "1px solid #ad674b44" }}
                    >
                      <Check className="w-2 h-2" strokeWidth={3} style={{ color: "#ad674b" }} />
                    </div>
                    <span className="font-light text-foreground text-[11px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stars */}
            <div
              className="px-5 py-2 flex items-center justify-center gap-1"
              style={{ background: "#fdf8f5", borderTop: "1px solid #ad674b14" }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="font-light text-[10px] text-muted-foreground ml-1">+500 alunas satisfeitas</span>
            </div>

            {/* CTAs */}
            <div
              className="px-5 py-3 flex flex-col items-center gap-2"
              style={{ background: "linear-gradient(180deg, #fff 0%, #fdf6f2 100%)", borderTop: "1px solid #ad674b18" }}
            >
              <a
                href={CHECKOUT_BACK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] px-4 py-3 text-white font-bold rounded-full text-sm tracking-wide text-center flex items-center justify-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #5a9e68, #4a8e58)",
                  boxShadow: "0 4px 16px rgba(90,158,104,0.38)",
                }}
              >
                QUERO POR R$5,90 AGORA
              </a>

              <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-light">
                <ShieldCheck className="w-3 h-3 shrink-0" style={{ color: "#5a9e68" }} />
                <span>Compra 100% segura • Garantia de 7 dias</span>
              </div>

              <button
                onClick={handleClose}
                className="font-light text-[11px] text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
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
