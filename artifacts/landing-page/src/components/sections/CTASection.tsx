import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function CTASection() {
  return (
    <SectionWrapper className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card p-10 md:p-16 rounded-[3rem] shadow-sm border border-border"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Chegou a hora de priorizar você.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-xl mx-auto">
            Junte-se a milhares de mulheres que já transformaram suas rotinas com o Método Lumina.
          </p>

          <div className="flex flex-col items-center justify-center mb-10">
            <span className="text-muted-foreground line-through text-lg mb-1">De R$ 297,00 por apenas</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-medium text-primary">12x de</span>
              <span className="text-6xl md:text-7xl font-serif text-primary">R$ 14,32</span>
            </div>
            <span className="text-muted-foreground text-sm mt-2">ou R$ 147,00 à vista</span>
          </div>

          <button className="group relative w-full sm:w-auto min-w-[300px] min-h-[64px] px-10 py-5 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] shadow-xl shadow-primary/20 mb-6">
            <span className="relative z-10 text-lg">Garantir minha vaga agora</span>
            <ArrowRight className="relative z-10 ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-green-500/80" />
            <span>Compra 100% segura • 7 dias de garantia incondicional</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}