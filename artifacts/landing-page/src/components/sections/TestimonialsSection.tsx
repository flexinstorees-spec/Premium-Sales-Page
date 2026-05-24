import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const testimonials = [
  {
    name: "Mariana Souza",
    location: "São Paulo/SP",
    quote: "Eu nunca tinha feito nada de cerâmica na vida e consegui fazer minhas primeiras peças no primeiro dia. O material é muito fácil de entender e as ideias são lindas demais!",
  },
  {
    name: "Camila Ferreira",
    location: "Belo Horizonte/MG",
    quote: "Comprei mais por hobby e acabei me apaixonando. Já fiz várias peças para decorar meu quarto e todo mundo pergunta onde eu comprei.",
  },
  {
    name: "Juliana Martins",
    location: "Curitiba/PR",
    quote: "Eu já trabalhava com artesanato, mas estava sem criatividade. Essas ideias me ajudaram MUITO. Tem muita referência moderna e aesthetic.",
  },
  {
    name: "Patrícia Lima",
    location: "Recife/PE",
    quote: "Estou simplesmente viciada kkkkk. As peças são lindas e o melhor é que não tem aquelas aulas cansativas. Você abre e já consegue começar.",
  },
  {
    name: "Fernanda Rocha",
    location: "Rio de Janeiro/RJ",
    quote: "Eu estava procurando algo relaxante pra fazer depois do trabalho e encontrei isso aqui. Além de terapêutico, as peças ficam MUITO bonitas.",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper>
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">O que Nossas Alunas Estão Falando?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="flex flex-col gap-4 rounded-2xl p-6"
            style={{
              background: "linear-gradient(180deg, #fdf8f5 0%, #fff 100%)",
              border: "1px solid #ad674b22",
              boxShadow: "0 2px 16px 0 rgba(173,103,75,0.08)",
            }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#f0a500" }} />
              ))}
            </div>
            <p className="font-sans font-light text-foreground text-sm sm:text-base leading-relaxed flex-grow">
              "{t.quote}"
            </p>
            <div>
              <p className="font-sans font-semibold text-foreground text-sm">{t.name}</p>
              <p className="font-sans font-light text-muted-foreground text-xs">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
