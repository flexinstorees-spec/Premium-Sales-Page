import { motion } from "framer-motion";
import { Layers, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

export function SocialProofBar() {
  const stats = [
    { icon: Layers, value: "+250", label: "Ideias prontas para copiar" },
    { icon: ShieldCheck, value: "7 dias", label: "Garantia de reembolso" },
    { icon: Smartphone, value: "100%", label: "Acessível pelo celular" },
    { icon: Sparkles, value: "Zero", label: "Experiência necessária" },
  ];

  return (
    <section className="w-full py-12 border-y border-border/60 bg-background/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-primary shadow-sm border border-border/50">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-2xl text-foreground leading-none">{stat.value}</span>
                <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
