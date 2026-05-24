import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function SolutionSection() {
  return (
    <SectionWrapper className="bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[580px] max-w-xl mx-auto lg:max-w-none rounded-[2.5rem] overflow-hidden bg-background border border-border flex items-center justify-center shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/20 to-background" />
          <div className="absolute top-1/4 -right-1/4 w-[150%] h-[150%] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center justify-center p-10 text-center h-full w-full gap-6">
            <div className="w-28 h-28 border border-primary/20 rounded-full flex items-center justify-center relative">
              <div className="w-20 h-20 bg-primary/10 rounded-full absolute -top-3 -left-3" />
              <div className="w-14 h-14 bg-secondary/30 rounded-full absolute -bottom-2 -right-2" />
              <Sparkles className="w-10 h-10 text-primary opacity-70 relative z-10" strokeWidth={1} />
            </div>
            <div className="space-y-3">
              {["Vasinhos aesthetic", "Porta-velas elegantes", "Bandejas decorativas", "Miniaturas fofas", "Peças estilo Pinterest"].map((item, i) => (
                <div key={i} className="font-serif italic text-foreground/50 text-lg">{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col justify-center px-2">
          <span className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-5">A Solução</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-[1.15]">
            Uma biblioteca completa com modelos prontos para você copiar e criar.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              Com mais de 250 ideias prontas de cerâmica fria, você nunca mais vai travar na frente da argila sem saber o que fazer.
            </p>
            <p>
              Cada ideia é apresentada de forma simples e visual, com passo a passo fácil de entender — mesmo que você esteja começando agora.
            </p>
            <p>
              Sem precisar saber desenhar. Sem complicação. Sem curso caro. Simples assim.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
