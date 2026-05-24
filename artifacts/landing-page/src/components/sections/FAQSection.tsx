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
      <div className={cn("pb-6 pt-0", className)}>{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

export function FAQSection() {
  const faqs = [
    {
      q: "Como recebo o acesso ao curso?",
      a: "Assim que o pagamento for confirmado, você receberá um e-mail com seus dados de login e senha para acessar a plataforma exclusiva de alunas."
    },
    {
      q: "Por quanto tempo terei acesso ao material?",
      a: "O acesso ao Método Lumina é vitalício. Isso significa que você pode assistir no seu tempo, quantas vezes quiser, e ainda receberá todas as atualizações futuras."
    },
    {
      q: "E se eu não gostar do método?",
      a: "Você tem 7 dias de garantia incondicional. Se assistir às aulas e achar que o método não é para você, basta enviar um e-mail que devolveremos 100% do seu dinheiro, sem burocracia."
    },
    {
      q: "Preciso comprar materiais caros para aplicar?",
      a: "De jeito nenhum! O Método Lumina foi pensado para ser acessível. Um simples caderno e uma caneta já são suficientes para colocar tudo em prática."
    },
    {
      q: "Não tenho muito tempo. Vou conseguir fazer?",
      a: "O curso foi criado exatamente para quem não tem tempo! As aulas são curtas (10 a 15 minutos) e o método requer apenas de 10 a 15 minutos do seu dia para ser aplicado."
    },
    {
      q: "Posso acessar pelo celular?",
      a: "Sim, a plataforma é 100% responsiva. Você pode assistir às aulas pelo celular, tablet ou computador, de onde estiver."
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