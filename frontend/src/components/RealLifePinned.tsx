import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { StepProgressBar } from "./StepProgressBar";

export interface Lifestyle {
  num: string;
  title: string;
  desc: string;
  image: string;
}

interface RealLifePinnedProps {
  lifestyles: Lifestyle[];
}

export function RealLifePinned({ lifestyles }: RealLifePinnedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = lifestyles.length;

  // Single source of scroll truth — everything below reads from this.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal slide position across all lifestyle slides.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(count - 1) * 100}%`]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      count - 1,
      Math.max(0, Math.floor(latest * count))
    );
    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${count * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <StepProgressBar totalSteps={count} activeIndex={activeIndex} />

        <motion.div style={{ x }} className="flex w-full h-full">
          {lifestyles.map((item) => (
            <div
              key={item.num}
              className="w-full h-full flex-shrink-0 flex items-center px-6 lg:px-8"
            >
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Text */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-12 bg-[#111111]"></div>
                    <span className="text-sm font-semibold tracking-widest uppercase text-[#111111]">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-display font-semibold mb-6 text-[#111111] leading-[1.1]">
                    {item.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-[#6B7280] leading-relaxed font-light max-w-md">
                    {item.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="relative bg-white p-2 sm:p-3 rounded-[32px] sm:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100">
                  <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] aspect-[4/3] bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.title}
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
  );
}
