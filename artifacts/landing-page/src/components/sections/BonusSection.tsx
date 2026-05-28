import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

const bonuses = [
  {
    number: "01",
    image: "/bonus1.webp",
    originalPrice: "R$ 47,00",
    description:
      "Aprenda o passo a passo completo para criar sua primeira peça mesmo sem experiência. Do zero ao acabamento final de forma simples, prática e fácil de seguir.",
  },
  {
    number: "02",
    image: "/bonus2.webp",
    originalPrice: "R$ 37,00",
    description:
      "Descubra onde comprar materiais baratos, bonitos e de qualidade sem perder tempo procurando na internet. Tudo organizado para facilitar sua rotina.",
  },
  {
    number: "03",
    image: "/bonus3.webp",
    originalPrice: "R$ 37,00",
    description:
      "Aprenda os truques que deixam suas peças mais bonitas, lisas e sem rachaduras. O segredo para criar peças com acabamento muito mais profissional.",
  },
];

export function BonusSection() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block font-sans font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#ad674b18", color: "#ad674b" }}
          >
            Bônus exclusivos
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">
            Você também recebe <span style={{ color: "#ad674b" }}>de graça</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col items-center text-center rounded-2xl p-5 gap-4"
              style={{
                background: "linear-gradient(180deg, #fdf8f5 0%, #fff 100%)",
                border: "1px solid #ad674b22",
                boxShadow: "0 2px 16px rgba(173,103,75,0.08)",
              }}
            >
              <img
                src={bonus.image}
                alt={`Bônus ${bonus.number}`}
                className="w-40 h-40 object-contain"
                loading="lazy"
                decoding="async"
                width={160}
                height={160}
              />
              <span
                className="font-sans font-bold text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ background: "#ad674b18", color: "#ad674b" }}
              >
                Bônus {bonus.number}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-medium text-muted-foreground line-through">
                  {bonus.originalPrice}
                </span>
                <span className="font-sans text-sm font-bold px-2 py-0.5 rounded-full" style={{ background: "#4a8e5820", color: "#4a8e58" }}>
                  GRÁTIS
                </span>
              </div>
              <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">
                {bonus.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
