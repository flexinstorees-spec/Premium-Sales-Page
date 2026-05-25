import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const deliverables = [
  "+250 moldes prontos de cerâmica fria",
  "Passo a passo fácil de seguir",
  "Lista de materiais de cada peça",
  "Explicação simples e direta",
  "Referência visual para cada ideia",
  "Dicas de acabamento profissional",
  "Acesso imediato pelo celular",
];

const bonuses = [
  "🎁 Bônus 01 — Protocolo Primeira Peça de Cerâmica Fria",
  "🎁 Bônus 02 — Lista Secreta de Fornecedores",
  "🎁 Bônus 03 — O Truque das Peças Perfeitas",
];

export function CTASection() {
  return (
    <SectionWrapper id="oferta">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ boxShadow: "0 8px 48px 0 rgba(173,103,75,0.18), 0 2px 16px 0 rgba(0,0,0,0.07)" }}
        >
          {/* Gradient border glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none z-0"
            style={{
              background: "linear-gradient(135deg, #ad674b22 0%, #c8956622 50%, #6aaa7a22 100%)",
              border: "1.5px solid #ad674b33",
            }}
          />

          {/* Header badge */}
          <div
            className="relative z-10 px-6 py-5 text-center"
            style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-white/80" />
              <p className="font-sans font-bold text-white text-sm tracking-widest uppercase">
                Oferta Especial Hoje
              </p>
              <Sparkles className="w-4 h-4 text-white/80" />
            </div>
          </div>

          {/* Entregáveis */}
          <div
            className="relative z-10 px-6 py-6 flex flex-col gap-3"
            style={{ background: "linear-gradient(180deg, #fdf8f5 0%, #fff 100%)" }}
          >
            <p className="font-sans font-semibold text-foreground text-sm mb-1 tracking-wide uppercase" style={{ color: "#ad674b" }}>
              O que você recebe:
            </p>
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #ad674b22, #6aaa7a22)", border: "1px solid #ad674b44" }}
                >
                  <Check className="w-3 h-3" strokeWidth={3} style={{ color: "#ad674b" }} />
                </div>
                <span className="font-sans font-light text-foreground text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}

            {/* Divider */}
            <div className="border-t my-1" style={{ borderColor: "#ad674b22" }} />

            <p className="font-sans font-semibold text-foreground text-sm tracking-wide uppercase" style={{ color: "#ad674b" }}>
              + Bônus exclusivos:
            </p>
            {bonuses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <span className="font-sans font-medium text-foreground text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Preço e CTA */}
          <div
            className="relative z-10 px-6 py-8 flex flex-col items-center gap-5 text-center"
            style={{ background: "linear-gradient(180deg, #fff 0%, #fdf6f2 100%)", borderTop: "1px solid #ad674b22" }}
          >
            {/* Price block */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="font-sans text-base font-medium text-muted-foreground">De</span>
                <span className="font-sans text-xl font-bold line-through" style={{ color: "#ad674b99" }}>R$ 97,00</span>
                <span className="font-sans text-base font-medium text-muted-foreground">por apenas</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-sans font-bold text-2xl" style={{ color: "#4a8e58" }}>R$</span>
                <span className="font-sans font-extrabold leading-none" style={{ color: "#4a8e58", fontSize: "clamp(5rem,20vw,7rem)" }}>10</span>
                <span className="font-sans font-bold text-2xl" style={{ color: "#4a8e58" }}>,00</span>
              </div>
              <span className="font-sans font-light text-muted-foreground text-sm">à vista • acesso imediato</span>
            </div>

            <a
              href="https://pay.wiapy.com/6a1445de0cb7ee7a78ed0906"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-main-cta"
              className="group flex items-center justify-center w-full min-h-[60px] px-8 py-4 text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-base tracking-wide"
              style={{
                background: "linear-gradient(135deg, #5a9e68, #4a8e58)",
                boxShadow: "0 6px 24px rgba(90,158,104,0.35)",
              }}
            >
              QUERO COMPRAR AGORA
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
              <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: "#5a9e68" }} />
              <span>Compra 100% segura • Garantia de 7 dias</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
