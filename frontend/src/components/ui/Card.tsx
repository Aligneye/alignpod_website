import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark";
  asMotion?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "light", asMotion, children, ...props }, ref) => {
    const baseStyles = "p-8 lg:p-10 rounded-[28px] transition-all duration-500 ease-out";
    
    const variants = {
      light: "bg-white border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-gray-300",
      dark: "bg-[#16181C] border border-white/5 hover:border-white/10 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]",
    };

    const classes = cn(baseStyles, variants[variant], className);

    if (asMotion) {
      const motionProps = props as unknown as HTMLMotionProps<"div">;

      return (
        <motion.div ref={ref} className={classes} {...motionProps}>
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const IconBox = ({ children, variant = "light", className }: { children: React.ReactNode, variant?: "light"|"dark", className?: string }) => {
  const base = "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-colors duration-300";
  const variants = {
    light: "bg-[#F8F8F6] border border-gray-100 text-[#111111]",
    dark: "bg-white/5 border border-white/10 text-white"
  };
  return (
    <div className={cn(base, variants[variant], className)}>
      {children}
    </div>
  );
};
