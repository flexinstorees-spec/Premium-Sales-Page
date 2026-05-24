import { motion } from "framer-motion";
import { Clock, BatteryWarning, BrainCircuit } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Atrasada para a vida",
      desc: "Você acorda cansada, corre o dia todo e, quando a noite chega, sente que não fez nada de importante para você."
    },
    {
      icon: BatteryWarning,
      title: "Exaustão constante",
      desc: "Sua mente não desliga. Uma lista infinita de tarefas rouba sua energia e te impede de estar presente nos momentos bons."
    },
    {
      icon: BrainCircuit,
      title: "Desconexão de si mesma",
      desc: "No meio de tantas responsabilidades e cuidados com os outros, você esqueceu do que te faz sorrir de verdade."
    }
  ];

  return (
    <SectionWrapper>
      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
          Parece que você está sempre tentando equilibrar pratos que não param de cair?
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl font-light">
          Muitas mulheres vivem nesse ciclo de exaustão, acreditando que a culpa é delas por não darem conta de tudo. Mas não precisa ser assim.
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