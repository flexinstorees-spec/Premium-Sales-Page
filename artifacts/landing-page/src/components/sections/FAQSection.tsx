import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
  value: string;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn("border-b border-border/60 py-1", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; className?: string }>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between py-5 font-sans font-medium text-base sm:text-lg text-foreground text-left transition-all hover:text-primary",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDown
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-data-[state=open]:rotate-180 ml-4"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className="overflow-hidden text-muted-foreground font-sans font-light text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
      ref={forwardedRef}
    >
      <div className={cn("pb-6 pt-0 leading-relaxed", className)}>{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

const faqs = [
  {
    q: "Preciso ter experiência com cerâmica fria?",
    a: "Não. O material foi criado justamente para iniciantes que querem começar do zero de forma simples e prática.",
  },
  {
    q: "Eu vou aprender mesmo sem saber desenhar?",
    a: "Sim. Os moldes acompanham referências visuais e explicações simples para você apenas seguir e criar suas peças.",
  },
  {
    q: "O material é em vídeo ou PDF?",
    a: "O material é digital e contém passo a passo visual organizado de forma simples e fácil de acompanhar.",
  },
  {
    q: "Vou conseguir fazer as peças pelo celular?",
    a: "Sim. Você pode acessar todo o material pelo celular, tablet ou computador.",
  },
];

export function FAQSection() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground">
            Dúvidas Frequentes
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion.Root>

        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center justify-center w-full sm:w-auto min-h-[56px] px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] shadow-lg shadow-primary/20 text-base"
          >
            QUERO ACESSAR AGORA
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <span className="font-sans font-light text-xs text-muted-foreground">
            Acesso imediato • Garantia de 7 dias
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
