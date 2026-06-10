import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

import dep1 from "@assets/DEP_1_1781098593610.png";
import dep2 from "@assets/DEP_2_1781098593610.png";
import dep3 from "@assets/DEP_3_1781098593609.png";
import dep4 from "@assets/DEP_4_1781098593609.png";
import dep5 from "@assets/DEP_5_1781098593610.png";

const testimonials = [
  { src: dep1, alt: "Depoimento Mariana" },
  { src: dep2, alt: "Depoimento Patrícia" },
  { src: dep3, alt: "Depoimento Carla" },
  { src: dep4, alt: "Depoimento Luciana" },
  { src: dep5, alt: "Depoimento Sandra" },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper>
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">
          O que Nossas Alunas Estão Falando?
        </h2>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-5xl mx-auto px-4 space-y-0">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="break-inside-avoid mb-6 rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 4px 20px rgba(173,103,75,0.13)",
              border: "1px solid #ad674b18",
            }}
          >
            <img
              src={t.src}
              alt={t.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
