import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-light" | "primary-dark" | "secondary-light" | "secondary-dark";
  size?: "default" | "sm" | "lg";
  asMotion?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary-light", size = "default", asMotion, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-[0.98]";
    
    const variants = {
      "primary-light": "bg-[#111111] text-white hover:bg-black hover:scale-[1.02] shadow-[0_4px_15px_rgba(0,0,0,0.1)]",
      "primary-dark": "bg-white text-black hover:bg-gray-100 hover:scale-[1.02] shadow-[0_0_15px_rgba(255,255,255,0.1)]",
      "secondary-light": "bg-transparent text-[#111111] border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
      "secondary-dark": "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40 backdrop-blur-sm",
    };

    const sizes = {
      default: "px-8 py-4 text-base",
      sm: "px-6 py-3 text-sm",
      lg: "px-10 py-5 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asMotion) {
      return (
        <motion.button ref={ref} className={classes} {...(props as HTMLMotionProps<"button">)}>
          {children}
        </motion.button>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
