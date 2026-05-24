import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  noPadding?: boolean;
}

export function SectionWrapper({ 
  children, 
  className, 
  containerClassName, 
  id,
  noPadding = false 
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "w-full relative overflow-hidden", 
        !noPadding && "py-16 md:py-24",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn("container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl", containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}