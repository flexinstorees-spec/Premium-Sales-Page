import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const ideas = [
  "Vasinhos aesthetic",
  "Miniaturas fofas",
  "Decorações minimalistas",
  "Porta-velas",
  "Bandejas decorativas",
  "Peças virais do TikTok",
  "Decorações estilo Pinterest",
  "Peças modernas",
  "Modelos elegantes",
  "Peças fáceis de copiar",
  "Muito mais...",
];

export function DiscoverSection() {
  return (
    <SectionWrapper className="bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug">
            DESCUBRA MAIS DE 250 IDEIAS PRONTAS DE CERÂMICA FRIA PARA COPIAR E CRIAR HOJE MESMO
          </h2>

          <p className="font-sans font-light text-base sm:text-lg text-muted-foreground leading-relaxed">
            Com esse material, você vai ter acesso a uma biblioteca completa com modelos prontos de cerâmica fria.
          </p>

          <div className="w-full bg-background rounded-3xl border border-border p-8 sm:p-10 shadow-sm text-left space-y-2">
            <p className="font-sans text-muted-foreground font-light text-sm sm:text-base mb-6">
              Sem precisar saber desenhar. Sem complicação. Sem curso caro.{" "}
              <span className="font-medium text-foreground">Simples assim.</span>
            </p>

            <p className="font-sans font-semibold text-foreground text-base mb-4">
              +250 Ideias Prontas de Cerâmica Fria
            </p>

            <p className="font-sans font-light text-muted-foreground text-sm mb-4">Aprenda a criar:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ideas.map((idea, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                  </div>
                  <span className="font-sans font-light text-foreground text-sm sm:text-base">{idea}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
