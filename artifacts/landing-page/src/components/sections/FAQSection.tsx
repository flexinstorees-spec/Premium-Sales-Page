import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
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
      className={cn("border-b border-border/60 py-2", className)}
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
          "group flex flex-1 items-center justify-between py-5 font-medium transition-all text-left text-lg text-foreground hover:text-primary",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDown
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
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
      className="overflow-hidden text-muted-foreground text-base font-light data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
      ref={forwardedRef}
    >
      <div className={cn("pb-6 pt-0 leading-relaxed", className)}>{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

export function FAQSection() {
  const faqs = [
    {
      q: "Como vou receber o material?",
      a: "O acesso chega imediatamente no seu e-mail após a confirmação da compra. Você não precisa esperar nada — é acesso na hora."
    },
    {
      q: "Preciso ter experiência com cerâmica fria?",
      a: "Não. O material foi criado especialmente para iniciantes. Cada ideia é apresentada de forma simples, com passo a passo fácil de entender do zero."
    },
    {
      q: "Posso acessar pelo celular?",
      a: "Sim. Você pode acessar de qualquer dispositivo — celular, tablet ou computador. O material funciona em todos eles."
    },
    {
      q: "E se eu não gostar do material?",
      a: "Você pode acessar o material completo e testar sem nenhum risco. Se achar que o conteúdo não é para você, basta pedir o reembolso dentro de 7 dias. Simples assim, sem burocracia."
    },
    {
      q: "Preciso saber desenhar para criar as peças?",
      a: "Não precisa saber desenhar nada. O material traz referências visuais prontas para você copiar e adaptar — você só precisa seguir o modelo."
    },
    {
      q: "Quantas ideias estão incluídas?",
      a: "São mais de 250 ideias prontas de cerâmica fria, cobrindo vasinhos, miniaturas, porta-velas, bandejas, decorações minimalistas, peças virais do TikTok e muito mais."
    }
  ];

  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
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
      </div>
    </SectionWrapper>
  );
}
