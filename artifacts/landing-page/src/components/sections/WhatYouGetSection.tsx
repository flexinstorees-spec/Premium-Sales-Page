import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function WhatYouGetSection() {
  const items = [
    "+250 moldes prontos de cerâmica fria para copiar e criar hoje mesmo.",
    "Lista de materiais necessários para cada peça — sem surpresas.",
    "Explicação simples e direta em linguagem de iniciante.",
    "Referência visual para cada ideia — você sabe exatamente o resultado antes de começar.",
    "Passo a passo fácil de seguir, mesmo que você nunca tenha tocado em argila.",
    "Dicas de acabamento da peça para um resultado ainda mais bonito e profissional.",
    "Acesso imediato por qualquer dispositivo — celular, tablet ou computador."
  ];

  return (
    <SectionWrapper className="bg-primary/[0.03] border-y border-border/50">
      <div className="max-w-4xl mx-auto bg-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm border border-border">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          O que você vai encontrar dentro do material
        </h2>
        <p className="text-center text-muted-foreground font-light mb-12 text-lg">
          Cada ideia acompanha tudo o que você precisa para criar, do zero ao acabamento.
        </p>

        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-5"
            >
              <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
              </div>
              <p className="text-foreground text-lg font-light leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
