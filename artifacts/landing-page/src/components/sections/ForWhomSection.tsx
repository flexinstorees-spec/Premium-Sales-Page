import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function ForWhomSection() {
  const isForYou = [
    "Você quer começar com cerâmica fria mas não sabe o que criar.",
    "Quer referências visuais prontas para copiar e adaptar.",
    "Procura algo prático, sem enrolação e sem curso caro.",
    "Ama estética Pinterest e TikTok e quer criar peças nesse estilo.",
    "Quer criar peças para vender ou decorar a sua casa."
  ];

  const notForYou = [
    "Você já é especialista e procura técnicas avançadas.",
    "Quer um curso em vídeo com aulas longas.",
    "Não tem interesse em criar peças físicas de cerâmica fria.",
  ];

  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 md:p-10 rounded-[2.5rem] border border-border"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8 flex items-center gap-3">
            Isso <span className="text-primary italic">É</span> para você se...
          </h3>
          <ul className="space-y-5">
            {isForYou.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-muted-foreground text-lg font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-background p-8 md:p-10 rounded-[2.5rem] border border-border/50"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8 flex items-center gap-3">
            Isso <span className="text-muted-foreground italic">NÃO É</span> para você se...
          </h3>
          <ul className="space-y-5">
            {notForYou.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-muted-foreground/50 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-muted-foreground text-lg font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
