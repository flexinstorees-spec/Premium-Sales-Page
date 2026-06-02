import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Award, Users, Star, BookOpen } from "lucide-react";

const alicePhoto = `${import.meta.env.BASE_URL}alice-correia.png`;

const credentials = [
  { icon: Award, label: "+5 anos ensinando cerâmica fria" },
  { icon: Users, label: "+3.000 alunas formadas" },
  { icon: Star, label: "Referência em técnicas aesthetic" },
  { icon: BookOpen, label: "Criadora do método +250 Moldes" },
];

export function ExpertSection() {
  return (
    <SectionWrapper id="expert">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-8"
        >
          <span
            className="inline-block font-sans font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-3"
            style={{ background: "#ad674b18", color: "#ad674b" }}
          >
            Quem vai te ensinar
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">
            Conheça sua <span style={{ color: "#ad674b" }}>especialista</span>
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-shrink-0 flex flex-col items-center gap-3"
          >
            <div
              className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden"
              style={{
                border: "2.5px solid #ad674b44",
                boxShadow: "0 8px 32px rgba(173,103,75,0.18)",
              }}
            >
              <img
                src={alicePhoto}
                alt="Alice Correia"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="text-center">
              <p className="font-sans font-bold text-lg text-foreground leading-tight">Alice Correia</p>
              <p className="font-sans font-light text-sm" style={{ color: "#ad674b" }}>
                Especialista em Cerâmica Fria
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-5 flex-1"
          >
            <p className="font-sans font-light text-base text-muted-foreground leading-relaxed">
              Apaixonada por artesanato desde criança, Alice transformou sua paixão por cerâmica fria em uma missão:
              <strong className="font-semibold text-foreground"> ensinar mulheres a criar peças lindas, do zero, sem complicação.</strong>
            </p>
            <p className="font-sans font-light text-base text-muted-foreground leading-relaxed">Ao longo de mais de 5 anos, ela desenvolveu um método simples e visual que já ajudou milhares de alunas a dar os primeiros passos.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              {credentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, #fdf8f5, #fff)",
                    border: "1px solid #ad674b22",
                  }}
                >
                  <div
                    className="w-8 h-8 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: "#ad674b15" }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: "#ad674b" }} />
                  </div>
                  <span className="font-sans font-medium text-foreground text-sm leading-snug">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}
