import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const deliverables = [
  "+250 ideias prontas de cerâmica fria",
  "Lista de materiais de cada peça",
  "Explicação simples e direta",
  "Referência visual para cada ideia",
  "Passo a passo fácil de seguir",
  "Dicas de acabamento profissional",
  "Acesso imediato pelo celular",
];

export function CTASection() {
  return (
    <SectionWrapper>
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border overflow-hidden"
        >
          {/* Header do card */}
          <div className="bg-primary/8 px-6 py-5 text-center border-b border-border">
            <p className="font-sans font-semibold text-foreground text-base tracking-wide">
              Oferta Especial Hoje
            </p>
          </div>

          {/* Entregáveis */}
          <div className="px-6 py-6 flex flex-col gap-3">
            <p className="font-sans font-medium text-foreground text-sm mb-1">
              O que você recebe:
            </p>
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </div>
                <span className="font-sans font-light text-foreground text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Preço e CTA */}
          <div className="border-t border-border px-6 py-7 flex flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="font-sans text-muted-foreground line-through text-sm">
                DE R$ 97,00 POR APENAS:
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-sans font-semibold text-primary text-xl">R$</span>
                <span className="font-sans font-bold text-primary text-7xl sm:text-8xl leading-none">10</span>
                <span className="font-sans font-semibold text-primary text-xl">,00</span>
              </div>
              <span className="font-sans font-light text-muted-foreground text-sm">à vista</span>
            </div>

            <button
              data-testid="button-main-cta"
              className="group flex items-center justify-center w-full min-h-[60px] px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] shadow-lg shadow-primary/20 text-base"
            >
              QUERO ACESSAR AGORA
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
              <ShieldCheck className="w-4 h-4 text-green-500/80 shrink-0" />
              <span>Compra 100% segura — 7 dias de garantia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
