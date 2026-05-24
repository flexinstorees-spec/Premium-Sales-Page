import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-12 pb-10 px-4 overflow-hidden">

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground">
            +250 Ideias de cerâmica fria para iniciantes e artesãs
          </h1>

          <p className="font-sans font-light text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Aprenda a criar peças lindas, aesthetic e profissionais mesmo começando do zero!
          </p>

          <button
            data-testid="button-hero-cta"
            className="group flex items-center justify-center w-full sm:w-auto min-h-[56px] px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] shadow-lg shadow-primary/20 text-base mt-2"
          >
            QUERO ACESSAR AGORA
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500/80 shrink-0" />
            Acesso imediato após a compra
          </p>
        </motion.div>
      </div>
    </section>
  );
}
