import React from "react";
import { motion, HTMLMotionProps, type Variants } from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { SectionHeading, BodyText } from "./Typography";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface CTAProps {
  title: React.ReactNode;
  description: React.ReactNode;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  variant?: "light" | "dark";
  className?: string;
}

export function CTA({ title, description, primaryAction, secondaryAction, variant = "dark", className }: CTAProps) {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const isDark = variant === "dark";

  return (
    <section className={cn("py-24 lg:py-32 overflow-hidden", isDark ? "bg-deep-black text-white" : "bg-[#F8F8F6] text-[#111111]", className)}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          <SectionHeading className={isDark ? "text-white" : "text-[#111111]"}>
            {title}
          </SectionHeading>
          
          <BodyText className={cn("max-w-2xl mx-auto mb-12", isDark ? "text-text-secondary" : "text-[#6B7280]")}>
            {description}
          </BodyText>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            {primaryAction && (
              <Button 
                variant={isDark ? "primary-dark" : "primary-light"} 
                className="w-full sm:w-auto"
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button 
                variant={isDark ? "secondary-dark" : "secondary-light"} 
                className="w-full sm:w-auto"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
