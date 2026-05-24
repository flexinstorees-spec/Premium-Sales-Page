import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function GuaranteeSection() {
  return (
    <SectionWrapper className="bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <ShieldCheck className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Garantia de 7 Dias
        </h2>

        <p className="text-muted-foreground text-lg font-light leading-relaxed">
          Você pode acessar o material completo e testar sem nenhum risco. Se achar que o conteúdo não é para você, basta pedir o reembolso dentro de 7 dias.
        </p>

        <p className="text-muted-foreground text-lg font-light leading-relaxed mt-4">
          Simples assim.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
