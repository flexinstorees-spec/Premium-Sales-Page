import { motion } from "framer-motion";
import { HelpCircle, DollarSign, Frown } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function ProblemSection() {
  const problems = [
    {
      icon: HelpCircle,
      title: "Sem ideia do que criar",
      desc: "Você tem vontade de trabalhar com cerâmica fria, mas trava na hora de decidir o que fazer. A inspiração some exatamente quando você mais precisa."
    },
    {
      icon: DollarSign,
      title: "Cursos caros demais",
      desc: "Quer aprender, mas não quer gastar centenas de reais em um curso longo. Você precisa de referências prontas, não de mais teoria."
    },
    {
      icon: Frown,
      title: "Medo de começar errada",
      desc: "Parece que todo mundo já sabe o que está fazendo menos você. Você quer resultados bonitos desde a primeira peça, mas não sabe por onde começar."
    }
  ];

  return (
    <SectionWrapper>
      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
          Você quer criar, mas algo sempre te trava?
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl font-light">
          Muitas iniciantes e artesãs vivem essa frustração — não é falta de talento, é falta de referência. E a gente resolve isso agora.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-[2rem] p-8 md:p-10 border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="w-14 h-14 bg-secondary/40 rounded-full flex items-center justify-center text-primary mb-8">
              <problem.icon className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl font-medium text-foreground mb-4">{problem.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-light">{problem.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
