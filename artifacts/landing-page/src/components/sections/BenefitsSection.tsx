import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function BenefitsSection() {
  const benefits = [
    {
      num: "01",
      title: "Rotina com intenção",
      desc: "Aprenda a planejar sua semana alinhada com seus valores, sem planilhas complicadas."
    },
    {
      num: "02",
      title: "Foco no que importa",
      desc: "Diga adeus à procrastinação através de técnicas gentis de atenção plena."
    },
    {
      num: "03",
      title: "Autocuidado real",
      desc: "Descubra como inserir pausas restauradoras no seu dia, mesmo com a agenda cheia."
    },
    {
      num: "04",
      title: "Ambiente sereno",
      desc: "Organize seus espaços físicos para que eles tragam paz e não mais trabalho."
    },
    {
      num: "05",
      title: "Limites saudáveis",
      desc: "Aprenda a dizer não com graciosidade para preservar a sua energia."
    },
    {
      num: "06",
      title: "Consistência leve",
      desc: "Crie hábitos que duram porque se adaptam à sua vida, não o contrário."
    }
  ];

  return (
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <span className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-5 block">A Transformação</span>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          O que muda quando você aplica o método?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-[2rem] bg-background border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
          >
            <div className="font-serif text-4xl text-primary/30 mb-6 transition-colors duration-300 group-hover:text-primary/60">
              {benefit.num}
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}