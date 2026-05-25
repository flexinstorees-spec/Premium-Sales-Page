import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const bonuses = [
  {
    number: "01",
    title: "Protocolo Primeira Peça de Cerâmica Fria",
    description:
      "Aprenda o passo a passo completo para criar sua primeira peça mesmo sem experiência. Do zero ao acabamento final de forma simples, prática e fácil de seguir.",
  },
  {
    number: "02",
    title: "Lista Secreta de Fornecedores",
    description:
      "Descubra onde comprar materiais baratos, bonitos e de qualidade sem perder tempo procurando na internet. Tudo organizado para facilitar sua rotina.",
  },
  {
    number: "03",
    title: "O Truque das Peças Perfeitas",
    description:
      "Aprenda os truques que deixam suas peças mais bonitas, lisas e sem rachaduras. O segredo para criar peças com acabamento muito mais profissional.",
  },
];

export function BonusSection() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
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

        <div className="flex flex-col gap-4">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl p-5"
              style={{
                background: "linear-gradient(135deg, #fdf8f5 0%, #fff 100%)",
                border: "1px solid #ad674b22",
                boxShadow: "0 2px 12px rgba(173,103,75,0.07)",
              }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
              >
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className="font-sans font-bold text-xs tracking-widest uppercase"
                  style={{ color: "#ad674b" }}
                >
                  Bônus {bonus.number}
                </p>
                <p className="font-sans font-semibold text-foreground text-sm sm:text-base leading-snug">
                  {bonus.title}
                </p>
                <p className="font-sans font-light text-muted-foreground text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
