import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const steps = [
  "Lista de materiais",
  "Explicação simples",
  "Referência visual",
  "Passo a passo fácil",
  "Acabamento da peça",
];

export function StepByStepSection() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug">
            PASSO A PASSO SIMPLES E DIRETO
          </h2>

          <p className="font-sans font-light text-base sm:text-lg text-muted-foreground">
            Cada ideia acompanha:
          </p>

          <div className="w-full">
            <div className="flex flex-col gap-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  </div>
                  <span className="font-sans font-medium text-foreground text-base sm:text-lg">{step}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 space-y-1 text-center">
              <p className="font-sans font-light text-muted-foreground text-base">
                Tudo de forma prática e fácil de entender.
              </p>
              <p className="font-sans font-medium text-foreground text-base">
                Mesmo que você esteja começando agora.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
