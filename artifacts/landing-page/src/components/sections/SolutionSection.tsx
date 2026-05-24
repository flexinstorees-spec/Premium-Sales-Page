import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function SolutionSection() {
  return (
    <SectionWrapper className="bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] max-w-xl mx-auto lg:max-w-none rounded-[2.5rem] overflow-hidden bg-background border border-border flex items-center justify-center shadow-sm">
          {/* Decorative soft visual */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/20 to-background" />
          <div className="absolute top-1/4 -right-1/4 w-[150%] h-[150%] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[80px]" />
          
          {/* Abstract geometry representing balance */}
          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center h-full w-full">
            <div className="w-32 h-40 border border-primary/20 rounded-full flex items-center justify-center mb-8 relative">
               <div className="w-24 h-24 bg-primary/10 rounded-full absolute -top-4 -left-4" />
               <div className="w-16 h-16 bg-secondary/30 rounded-full absolute -bottom-2 -right-2" />
               <Sparkles className="w-10 h-10 text-primary opacity-70 relative z-10" strokeWidth={1} />
            </div>
            <div className="font-serif text-2xl md:text-3xl italic text-foreground/50 px-6 max-w-sm">
              "A beleza de viver uma vida intencional."
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col justify-center px-2">
          <span className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-5">Apresentando</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-[1.15]">
            O Método Lumina é o seu novo respiro.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              Eu criei esse método porque também já estive no seu lugar. Sei como é difícil tentar seguir métodos de produtividade rígidos que só geram mais ansiedade.
            </p>
            <p>
              O Método Lumina não é sobre fazer mais em menos tempo. É sobre fazer o que realmente importa, com calma e clareza.
            </p>
            <p>
              Através de pilares simples e gentis, você vai aprender a organizar sua mente, seu espaço e seu tempo, abrindo espaço para o que te faz genuinamente feliz.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}