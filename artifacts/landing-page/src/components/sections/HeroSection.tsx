import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import productImage from "@assets/APOSTILA_3000X3000_(3)_1779637984168.png";

const tickerItems = [
  "+250 ideias prontas para copiar",
  "Sem precisar saber desenhar",
  "Passo a passo simples e direto",
  "Vasinhos, miniaturas e muito mais",
  "Acesso imediato pelo celular",
  "Garantia de 7 dias",
];

const allItems = [...tickerItems, ...tickerItems];

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-12 pb-10 overflow-hidden">

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground">
            +250 Ideias de Cerâmica Fria para Iniciantes e Artesãs
          </h1>

          <motion.img
            src={productImage}
            alt="+250 Ideias de Cerâmica Fria"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg mx-auto rounded-2xl"
          />

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
        </motion.div>
      </div>

      {/* Ticker full-width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full mt-8"
      >
        <div className="ticker-viewport w-full">
          <div className="ticker-track">
            {allItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-3 bg-white border border-border rounded-xl shadow-sm font-sans text-sm font-medium text-foreground whitespace-nowrap flex-shrink-0"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
