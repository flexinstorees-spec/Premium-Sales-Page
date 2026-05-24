import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function BenefitsSection() {
  const benefits = [
    {
      num: "01",
      title: "Vasinhos aesthetic",
      desc: "Modelos delicados e modernos que combinam com qualquer decoração — os queridinhos do TikTok e do Pinterest."
    },
    {
      num: "02",
      title: "Miniaturas fofas",
      desc: "Pequenas peças cheias de charme, perfeitas para presentear ou vender com alto valor percebido."
    },
    {
      num: "03",
      title: "Porta-velas elegantes",
      desc: "Designs sofisticados que parecem saídos de lojas de decoração premium — mas feitos pela sua própria mão."
    },
    {
      num: "04",
      title: "Bandejas decorativas",
      desc: "Peças funcionais e lindas para organizar e decorar qualquer ambiente com estilo minimalista."
    },
    {
      num: "05",
      title: "Decorações minimalistas",
      desc: "Peças clean e modernas que têm tudo a ver com a estética que domina as redes sociais agora."
    },
    {
      num: "06",
      title: "Peças virais do TikTok",
      desc: "Os modelos mais compartilhados e desejados, adaptados para você reproduzir com facilidade."
    }
  ];

  return (
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <span className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-5 block">O que você vai criar</span>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          Peças lindas que parecem profissionais desde a primeira vez
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
