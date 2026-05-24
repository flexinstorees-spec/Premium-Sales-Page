import { motion } from "framer-motion";
import { Flower2, Star, Layers, Flame, LayoutGrid, TrendingUp, Bookmark, Sparkles, Gem, Copy, Plus } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const ideas = [
  { label: "Vasinhos aesthetic", icon: Flower2 },
  { label: "Miniaturas fofas", icon: Star },
  { label: "Decorações minimalistas", icon: Layers },
  { label: "Porta-velas", icon: Flame },
  { label: "Bandejas decorativas", icon: LayoutGrid },
  { label: "Peças virais do TikTok", icon: TrendingUp },
  { label: "Decorações estilo Pinterest", icon: Bookmark },
  { label: "Peças modernas", icon: Sparkles },
  { label: "Modelos elegantes", icon: Gem },
  { label: "Peças fáceis de copiar", icon: Copy },
  { label: "Muito mais...", icon: Plus },
];

export function DiscoverSection() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug text-center">
            +250 Ideias Prontas de Cerâmica Fria
          </h2>

          <div className="w-full">
            <p className="font-sans font-light text-muted-foreground text-sm mb-5 text-left">Aprenda a criar:</p>

            <div className="grid grid-cols-2 gap-3">
              {ideas.map((idea, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <idea.icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  </div>
                  <span className="font-sans font-light text-foreground text-sm sm:text-base leading-snug">{idea.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
