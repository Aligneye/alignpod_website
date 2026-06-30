import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export const SectionContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "light" | "dark" }>((props, ref) => {
  const { className, variant = "light", ...rest } = props;
  
  const baseStyles = "py-24 lg:py-32";
  const variants = {
    light: "bg-[#F8F8F6] text-[#111111]",
    dark: "bg-deep-black text-white"
  };

  return (
    <section ref={ref} className={cn(baseStyles, variants[variant], className)} {...rest}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {props.children}
      </div>
    </section>
  );
});
