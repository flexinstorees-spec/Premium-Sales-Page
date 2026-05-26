import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Check, Sparkles, Star } from "lucide-react";
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
  { label: "Bônus 01 — Protocolo Primeira Peça de Cerâmica Fria", image: "/bonus1.webp", price: "R$ 47,00" },
  { label: "Bônus 02 — Lista Secreta de Fornecedores", image: "/bonus2.webp", price: "R$ 37,00" },
  { label: "Bônus 03 — O Truque das Peças Perfeitas", image: "/bonus3.webp", price: "R$ 37,00" },
];

const CHECKOUT_BASICO = "https://pay.wiapy.com/6a1445de0cb7ee7a78ed0906";
const CHECKOUT_PREMIUM = "https://pay.wiapy.com/6a1445de0cb7ee7a78ed0906";

export function CTASection() {
  return (
    <SectionWrapper id="oferta">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <span
            className="inline-block font-sans font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-3"
            style={{ background: "#ad674b18", color: "#ad674b" }}
          >
            Oferta Especial Hoje
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">
            Escolha o seu <span style={{ color: "#ad674b" }}>plano</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">

          {/* ── PLANO BÁSICO ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: "1.5px solid #ad674b33",
              boxShadow: "0 4px 24px rgba(173,103,75,0.10)",
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-5 text-center"
              style={{ background: "linear-gradient(135deg, #f5ede8, #fdf8f5)" }}
            >
              <p className="font-sans font-bold text-sm tracking-widest uppercase" style={{ color: "#ad674b" }}>
                Plano Básico
              </p>
            </div>

            {/* Items */}
            <div className="px-6 py-5 flex flex-col gap-3" style={{ background: "#fff" }}>
              <p className="font-sans font-semibold text-xs mb-1 tracking-wide uppercase" style={{ color: "#ad674b" }}>
                O que você recebe:
              </p>
              {deliverables.map((item, i) => (
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

            {/* Price + CTA */}
            <div
              className="px-6 py-6 flex flex-col items-center gap-4 text-center"
              style={{ background: "linear-gradient(180deg, #fff 0%, #fdf6f2 100%)", borderTop: "1px solid #ad674b18" }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-sm font-medium text-muted-foreground">De</span>
                  <span className="font-sans text-base font-bold line-through" style={{ color: "#ad674b99" }}>R$ 97,00</span>
                  <span className="font-sans text-sm font-medium text-muted-foreground">por</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-sans font-bold text-xl" style={{ color: "#4a8e58" }}>R$</span>
                  <span className="font-sans font-extrabold leading-none text-6xl" style={{ color: "#4a8e58" }}>10</span>
                  <span className="font-sans font-bold text-xl" style={{ color: "#4a8e58" }}>,00</span>
                </div>
                <span className="font-sans font-light text-muted-foreground text-xs">à vista • acesso imediato</span>
              </div>

              <a
                href={CHECKOUT_BASICO}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-full min-h-[52px] px-6 py-3 font-bold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #c89566, #ad674b)",
                  color: "#fff",
                  boxShadow: "0 4px 18px rgba(173,103,75,0.30)",
                }}
              >
                QUERO O BÁSICO
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* ── PLANO PREMIUM ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: "2px solid #4a8e58",
              boxShadow: "0 8px 40px rgba(74,142,88,0.18), 0 2px 16px rgba(0,0,0,0.07)",
            }}
          >
            {/* Mais Popular badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <span
                className="flex items-center gap-1 px-4 py-1 rounded-full font-sans font-bold text-xs tracking-widest uppercase text-white"
                style={{ background: "linear-gradient(135deg, #5a9e68, #4a8e58)", boxShadow: "0 2px 8px rgba(74,142,88,0.35)" }}
              >
                <Star className="w-3 h-3 fill-white" /> Mais Popular
              </span>
            </div>

            {/* Header */}
            <div
              className="px-6 pt-8 pb-5 text-center"
              style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-white/80" />
                <p className="font-sans font-bold text-white text-sm tracking-widest uppercase">
                  Plano Premium
                </p>
                <Sparkles className="w-4 h-4 text-white/80" />
              </div>
            </div>

            {/* Items */}
            <div className="px-6 py-5 flex flex-col gap-3" style={{ background: "linear-gradient(180deg, #fdf8f5 0%, #fff 100%)" }}>
              <p className="font-sans font-semibold text-xs mb-1 tracking-wide uppercase" style={{ color: "#ad674b" }}>
                O que você recebe:
              </p>
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #ad674b22, #6aaa7a22)", border: "1px solid #ad674b44" }}
                  >
                    <Check className="w-3 h-3" strokeWidth={3} style={{ color: "#ad674b" }} />
                  </div>
                  <span className="font-sans font-light text-foreground text-sm">{item}</span>
                </motion.div>
              ))}

              <div className="border-t my-1" style={{ borderColor: "#ad674b22" }} />

              <p className="font-sans font-semibold text-xs tracking-wide uppercase" style={{ color: "#ad674b" }}>
                + Bônus exclusivos:
              </p>
              {bonuses.map((bonus, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <img src={bonus.image} alt={bonus.label} className="w-10 h-10 shrink-0 object-contain rounded-lg" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans font-medium text-foreground text-sm leading-snug">{bonus.label}</span>
                    <span className="font-sans text-xs font-semibold line-through" style={{ color: "#ad674b99" }}>{bonus.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Price + CTA */}
            <div
              className="px-6 py-6 flex flex-col items-center gap-4 text-center"
              style={{ background: "linear-gradient(180deg, #fff 0%, #fdf6f2 100%)", borderTop: "1px solid #ad674b22" }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="font-sans text-xs font-medium text-muted-foreground uppercase tracking-wide">Valor total do pacote</span>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-sm font-medium text-muted-foreground">De</span>
                  <span className="font-sans text-base font-bold line-through" style={{ color: "#ad674b99" }}>R$ 218,00</span>
                  <span className="font-sans text-sm font-medium text-muted-foreground">por apenas</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-sans font-bold text-xl" style={{ color: "#4a8e58" }}>R$</span>
                  <span className="font-sans font-extrabold leading-none" style={{ color: "#4a8e58", fontSize: "clamp(4rem,18vw,6rem)" }}>19</span>
                  <span className="font-sans font-bold text-xl" style={{ color: "#4a8e58" }}>,90</span>
                </div>
                <span className="font-sans font-light text-muted-foreground text-xs">à vista • acesso imediato</span>
              </div>

              <a
                href={CHECKOUT_PREMIUM}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-main-cta"
                className="group flex items-center justify-center w-full min-h-[60px] px-8 py-4 text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-base tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #5a9e68, #4a8e58)",
                  boxShadow: "0 6px 24px rgba(90,158,104,0.35)",
                }}
              >
                QUERO O PREMIUM
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="flex items-center gap-2 text-xs text-muted-foreground font-light">
                <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: "#5a9e68" }} />
                <span>Compra 100% segura • Garantia de 7 dias</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}
