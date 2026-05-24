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
    q: "Vou receber como?",
    a: "O acesso chega imediatamente no seu e-mail após a compra.",
  },
  {
    q: "Preciso ter experiência?",
    a: "Não. O material foi feito para iniciantes.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. Você pode acessar de qualquer dispositivo.",
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
      </div>
    </SectionWrapper>
  );
}
