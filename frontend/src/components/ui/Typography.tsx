import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, type HTMLMotionProps } from "motion/react";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

type HeroHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & HTMLMotionProps<"h1"> & { asMotion?: boolean };

export const HeroHeading = React.forwardRef<HTMLHeadingElement, HeroHeadingProps>((props, ref) => {
  const { className, asMotion, ...rest } = props;
  const classes = cn("font-display font-bold tracking-tight leading-[1.1] text-[clamp(2.5rem,6vw+1rem,5.5rem)]", className);
  if (asMotion) {
    return <motion.h1 ref={ref} className={classes} {...rest} />;
  }
  return <h1 ref={ref} className={classes} {...rest} />;
});

type SectionHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & HTMLMotionProps<"h2"> & { asMotion?: boolean };

export const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>((props, ref) => {
  const { className, asMotion, ...rest } = props;
  const classes = cn("font-display font-bold tracking-tight mb-6 text-[clamp(2rem,4vw+1rem,4rem)]", className);
  if (asMotion) {
    return <motion.h2 ref={ref} className={classes} {...rest} />;
  }
  return <h2 ref={ref} className={classes} {...rest} />;
});

export const CardHeading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => {
  const { className, ...rest } = props;
  const classes = cn("font-display font-semibold mb-4 text-[clamp(1.25rem,2vw+0.5rem,1.75rem)]", className);
  return <h3 ref={ref} className={classes} {...rest} />;
});

type BodyTextProps = React.HTMLAttributes<HTMLParagraphElement> & HTMLMotionProps<"p"> & { asMotion?: boolean };

export const BodyText = React.forwardRef<HTMLParagraphElement, BodyTextProps>((props, ref) => {
  const { className, asMotion, ...rest } = props;
  const classes = cn("text-base sm:text-lg lg:text-xl font-light leading-relaxed", className);
  if (asMotion) {
    return <motion.p ref={ref} className={classes} {...rest} />;
  }
  return <p ref={ref} className={classes} {...rest} />;
});
