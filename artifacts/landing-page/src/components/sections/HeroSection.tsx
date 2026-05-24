import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-1 px-4 mb-8 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium tracking-wide border border-secondary/50">
            PARA INICIANTES E ARTESÃS
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-foreground mb-6">
            +250 Ideias de Cerâmica Fria para Copiar e Criar Hoje Mesmo
          </h1>

          <p className="font-sans text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Aprenda a criar peças lindas, aesthetic e profissionais mesmo começando do zero — sem precisar saber desenhar, sem complicação, sem curso caro.
          </p>

          <button
            data-testid="button-hero-cta"
            className="group relative flex items-center justify-center w-full sm:w-auto min-h-[56px] px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] shadow-lg shadow-primary/20"
          >
            <span className="relative z-10 text-base">QUERO ACESSAR AGORA</span>
            <ArrowRight className="relative z-10 ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500/80" /> Acesso imediato após a compra
          </p>
        </motion.div>
      </div>
    </section>
  );
}
