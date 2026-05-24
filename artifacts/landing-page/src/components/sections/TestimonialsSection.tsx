import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Clara M.",
      role: "Iniciante em cerâmica fria",
      quote: "Eu travava toda vez que ia começar uma peça. Com esse material, abri na ideia de vasinho, segui o passo a passo e o resultado ficou lindo. Nunca imaginei que ficaria assim na primeira vez."
    },
    {
      name: "Fernanda L.",
      role: "Artesã há 2 anos",
      quote: "Comprei mais como curiosidade e fiquei impressionada. São 250 ideias de verdade, organizadas e com referência visual. Minha produção praticamente dobrou de volume de inspiração."
    },
    {
      name: "Juliana R.",
      role: "Vende peças pelo Instagram",
      quote: "Achei que seria mais do mesmo, mas não. As ideias são atuais, com aquele estilo aesthetic que vende muito. Já criei 3 peças novas essa semana e postei — voltaram a me perguntar onde comprar."
    }
  ];

  return (
    <SectionWrapper>
      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
          Quem já acessou está criando peças lindas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card p-8 rounded-[2rem] border border-border flex flex-col h-full"
          >
            <div className="flex gap-1 mb-6 text-primary">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="font-serif text-lg md:text-xl italic text-foreground mb-8 flex-grow leading-relaxed">
              "{testimonial.quote}"
            </p>

            <div className="mt-auto">
              <p className="font-medium text-foreground text-lg">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground font-light">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
