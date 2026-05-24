import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("w-full relative overflow-hidden py-10 md:py-14", className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn("container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl", containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}
