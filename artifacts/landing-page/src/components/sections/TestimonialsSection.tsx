import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mariana S.",
      role: "Mãe e Empreendedora",
      quote: "Eu achava que precisava de mais horas no dia. O Lumina me mostrou que eu só precisava de mais intenção nas horas que já tenho. Mudou minha vida."
    },
    {
      name: "Camila T.",
      role: "Designer",
      quote: "O primeiro método que não me fez sentir culpada. A abordagem é tão gentil que as mudanças aconteceram quase sem eu perceber. Meu ambiente de trabalho é outro."
    },
    {
      name: "Juliana R.",
      role: "Arquiteta",
      quote: "Estava a um passo do burnout. As pausas restauradoras ensinadas no módulo 3 salvaram minha saúde mental este ano. Recomendo de olhos fechados."
    }
  ];

  return (
    <SectionWrapper>
      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
          Histórias de quem já transformou sua rotina
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