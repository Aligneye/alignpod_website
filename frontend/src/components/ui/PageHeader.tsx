import React from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { HeroHeading, BodyText } from "./Typography";
import { Button } from "./Button";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface PageHeaderProps {
  label?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  variant?: "light" | "dark";
  className?: string;
}

export function PageHeader({ label, title, description, primaryAction, secondaryAction, variant = "light", className }: PageHeaderProps) {
  const isDark = variant === "dark";

  return (
    <section className={cn("relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-24", isDark ? "bg-deep-black text-white selection:bg-white selection:text-black" : "bg-[#F8F8F6] text-[#111111] selection:bg-[#111111] selection:text-white", className)}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center mt-12">
        {label && (
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6", isDark ? "text-text-secondary" : "text-[#6B7280]")}
          >
            {label}
          </motion.span>
        )}
        
        <HeroHeading
          asMotion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className={cn("mb-8", isDark ? "text-white" : "text-[#111111]")}
        >
          {title}
        </HeroHeading>

        <BodyText
          asMotion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={cn("max-w-2xl mx-auto mb-16", isDark ? "text-text-secondary" : "text-[#6B7280]")}
        >
          {description}
        </BodyText>

        {(primaryAction || secondaryAction) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
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
          </motion.div>
        )}
      </div>
    </section>
  );
}
