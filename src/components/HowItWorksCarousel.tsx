import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Step } from "./howItWorks.data";

interface HowItWorksCarouselProps {
  steps: Step[];
}

const AUTOPLAY_MS = 5000;

const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 32 : -32,
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -32 : 32,
  }),
};

export function HowItWorksCarousel({ steps }: HowItWorksCarouselProps) {
  const [[currentStep, direction], setState] = useState<[number, number]>([0, 1]);
  const total = steps.length;

  const goTo = (index: number) => {
    const next = ((index % total) + total) % total;
    setState([next, next > currentStep ? 1 : -1]);
  };

  const goNext = () => setState(([i]) => [(i + 1) % total, 1]);
  const goPrev = () => setState(([i]) => [(i - 1 + total) % total, -1]);

  // Restarts on every currentStep change — manual or automatic — so there is
  // always exactly one live timer, always counting from zero.
  useEffect(() => {
    const timeout = window.setTimeout(goNext, AUTOPLAY_MS);
    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === total - 1;

  const arrowButtonClasses =
    "absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 bg-white text-[#111111] shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d8080]/60 focus-visible:ring-offset-2";

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <div className="relative">
        {!isFirst && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous step"
            className={`${arrowButtonClasses} left-1 lg:-left-6`}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>
        )}

        {!isLast && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next step"
            className={`${arrowButtonClasses} right-1 lg:-right-6`}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </button>
        )}

        <div className="relative bg-white rounded-[32px] sm:rounded-[40px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-12">
          <div
            className="relative min-h-[520px] sm:min-h-[440px] lg:min-h-[300px] overflow-hidden"
            aria-live="polite"
          >
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={step.num}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Text */}
                <div>
                  <div className="flex items-center gap-4 mb-4 lg:mb-3">
                    <div className="h-[1px] w-12 bg-[#111111]"></div>
                    <span className="text-sm font-semibold tracking-widest uppercase text-[#111111]">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-3xl font-display font-semibold mb-4 lg:mb-3 text-[#111111] leading-[1.1]">
                    {step.title}
                  </h3>
                  <p className="text-lg lg:text-base text-[#6B7280] leading-relaxed font-light max-w-md">
                    {step.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="relative bg-white p-2 sm:p-3 rounded-[24px] sm:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100">
                  <div className="relative overflow-hidden rounded-[18px] sm:rounded-[24px] aspect-[4/3] lg:aspect-[16/10] bg-gray-50">
                    <img
                      src={step.img}
                      alt={step.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[18px] sm:rounded-[24px] pointer-events-none"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div
            className="relative z-10 mt-6 lg:mt-8 flex items-center justify-center gap-2.5"
            role="tablist"
            aria-label="How it works steps"
          >
            {steps.map((s, i) => (
              <button
                key={s.num}
                type="button"
                role="tab"
                aria-selected={i === currentStep}
                aria-label={`Go to step ${i + 1}: ${s.title}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d8080]/60 focus-visible:ring-offset-2 ${
                  i === currentStep
                    ? "w-6 bg-[#0d8080]"
                    : "w-2.5 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
