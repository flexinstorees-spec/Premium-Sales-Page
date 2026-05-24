import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function WhatYouGetSection() {
  const items = [
    "Acesso completo a 6 módulos de aulas em vídeo curtas e diretas ao ponto.",
    "Workbook exclusivo em PDF com exercícios práticos para cada etapa.",
    "Templates de organização (imprimíveis e digitais) no formato Lumina.",
    "Bônus: Masterclass sobre como lidar com a ansiedade digital.",
    "Bônus: Playlist exclusiva com áudios de meditação guiada para iniciantes.",
    "Acesso vitalício: o curso é seu para sempre, incluindo futuras atualizações."
  ];

  return (
    <SectionWrapper className="bg-primary/[0.03] border-y border-border/50">
      <div className="max-w-4xl mx-auto bg-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm border border-border">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
          Exatamente o que você vai receber
        </h2>

        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
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