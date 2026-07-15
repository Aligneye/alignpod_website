import { motion, type Variants } from "motion/react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { howItWorksSteps } from "./howItWorks.data";
import { HowItWorksPinned } from "./HowItWorksPinned";
import { HowItWorksMobile } from "./HowItWorksMobile";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function HowItWorks() {
  // Pinned scroll effect only makes sense on wider, two-column layouts.
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      className="relative w-full py-32 lg:py-48 bg-white selection:bg-[#111111] selection:text-white"
      id="how-it-works"
    >
      {/* Background Textures — overflow-hidden lives HERE, not on the section,
          so it never clips the sticky panel inside HowItWorksPinned. */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#f0f4f8_0%,transparent_70%)] opacity-50 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-24 lg:mb-40 px-6 lg:px-8"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6">
            How It Works
          </span>
          <h2 className="heading-section text-[#111111] mb-6">
            Better posture starts in four simple steps.
          </h2>
          <p className="text-body text-[#6B7280]">
            From wearing the device to building healthier posture habits,
            AlignPod quietly works in the background while you focus on your
            day.
          </p>
        </motion.div>

        {isDesktop ? (
          <HowItWorksPinned steps={howItWorksSteps} />
        ) : (
          <HowItWorksMobile steps={howItWorksSteps} />
        )}
      </div>
    </section>
  );
}