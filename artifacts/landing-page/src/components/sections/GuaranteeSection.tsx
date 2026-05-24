import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function GuaranteeSection() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </div>

        <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">
          Garantia de 7 dias
        </h2>

        <div className="space-y-3">
          <p className="font-sans font-light text-muted-foreground text-base sm:text-lg leading-relaxed">
            Você pode acessar o material completo e testar sem risco.
          </p>
          <p className="font-sans font-light text-muted-foreground text-base sm:text-lg leading-relaxed">
            Se achar que o conteúdo não é para você, basta pedir reembolso dentro de 7 dias.
          </p>
          <p className="font-sans font-medium text-foreground text-base sm:text-lg">
            Simples assim.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
