import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import type { Step } from "./howItWorks.data";
import { StepProgressBar } from "./StepProgressBar";

interface HowItWorksPinnedProps {
  steps: Step[];
}

export function HowItWorksPinned({ steps }: HowItWorksPinnedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Number of steps to keep pinned and horizontally scrollable
  const pinnedCount = Math.min(4, steps.length);

  // Single source of scroll truth — everything below reads from this.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal slide position (unchanged from before).
  // Only translate horizontally across the pinned steps.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(pinnedCount - 1) * 100}%`]
  );

  // Same scrollYProgress, just also read here to derive a discrete step
  // number for the progress bar. This does NOT add a new scroll listener —
  // it's a second subscriber to the motion value useScroll already tracks.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      pinnedCount - 1,
      Math.max(0, Math.floor(latest * pinnedCount))
    );
    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  return (
    <>
      <div ref={containerRef} className="relative" style={{ height: `${pinnedCount * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <StepProgressBar totalSteps={pinnedCount} activeIndex={activeIndex} />

        <motion.div style={{ x }} className="flex w-full h-full">
          {steps.slice(0, pinnedCount).map((step) => (
            <div
              key={step.num}
              className="w-full h-full flex-shrink-0 flex items-center px-6 lg:px-8"
            >
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Text */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-12 bg-[#111111]"></div>
                    <span className="text-sm font-semibold tracking-widest uppercase text-[#111111]">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-display font-semibold mb-6 text-[#111111] leading-[1.1]">
                    {step.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-[#6B7280] leading-relaxed font-light max-w-md">
                    {step.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="relative bg-white p-2 sm:p-3 rounded-[32px] sm:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100">
                  <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] aspect-[4/3] bg-gray-50">
                    <img
                      src={step.img}
                      alt={step.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[24px] sm:rounded-[32px] pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Render remaining steps vertically after the pinned section to avoid blank area */}
    {steps.slice(pinnedCount).map((step) => (
      <div key={step.num} className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#111111]"></div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#111111]">Step {step.num}</span>
            </div>
            <h3 className="text-3xl lg:text-5xl font-display font-semibold mb-6 text-[#111111] leading-[1.1]">{step.title}</h3>
            <p className="text-lg lg:text-xl text-[#6B7280] leading-relaxed font-light max-w-md">{step.desc}</p>
          </div>

          <div className="relative bg-white p-2 sm:p-3 rounded-[32px] sm:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100">
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] aspect-[4/3] bg-gray-50">
              <img src={step.img} alt={step.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[24px] sm:rounded-[32px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  );
}