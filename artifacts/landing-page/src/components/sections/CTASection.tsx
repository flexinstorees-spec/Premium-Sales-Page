import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function CTASection() {
  return (
    <SectionWrapper className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card p-8 sm:p-12 rounded-3xl shadow-sm border border-border flex flex-col items-center gap-6"
        >
          <p className="font-sans font-light text-muted-foreground text-base">
            OFERTA ESPECIAL HOJE
          </p>

          <div className="flex flex-col items-center gap-1">
            <span className="font-sans text-muted-foreground line-through text-base">DE R$ 97,00 POR APENAS:</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-sans font-semibold text-primary text-2xl">R$</span>
              <span className="font-sans font-bold text-primary text-7xl sm:text-8xl leading-none">10</span>
              <span className="font-sans font-semibold text-primary text-2xl">,00</span>
            </div>
            <span className="font-sans font-light text-muted-foreground text-sm">à vista</span>
          </div>

          <button
            data-testid="button-main-cta"
            className="group flex items-center justify-center w-full min-h-[60px] px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] shadow-xl shadow-primary/20 text-base"
          >
            QUERO ACESSAR AGORA
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
            <ShieldCheck className="w-4 h-4 text-green-500/80 shrink-0" />
            <span>Compra 100% segura — 7 dias de garantia</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
