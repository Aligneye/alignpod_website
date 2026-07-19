import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import neckBackPain from "../assets/neck-back-pain.jpg";
import shoulderTightness from "../assets/shoulder-tightness.jpg";
import lowEnergyFatigue from "../assets/low-energy-fatigue.jpg";
import reducedFocus from "../assets/reduced-focus.jpg";

const steps = [
  {
    id: 1,
    index: "01",
    title: "Neck & back pain",
    description:
      "Poor sitting posture, including a bent neck and rounded back, puts extra stress on your spine, causing daily stiffness, neck pain, discomfort, fatigue, and increasing the risk of long-term issues.",
    image: neckBackPain,
    alt: "Woman touching the back of her neck",
  },
  {
    id: 2,
    index: "02",
    title: "Shoulder tightness",
    description:
      "Rolled-forward shoulders caused by poor sitting posture create lasting tightness, heaviness, muscle strain, restricted movement, and upper-body discomfort that builds up over time.",
    image: shoulderTightness,
    alt: "Woman touching her tight shoulder",
  },
  {
    id: 3,
    index: "03",
    title: "Low energy & fatigue",
    description:
      "Poor posture limits natural breathing and forces your body to work harder, causing faster fatigue, lower energy, reduced concentration, and less productive work or study sessions.",
    image: lowEnergyFatigue,
    alt: "Woman resting her head on her laptop, fatigued",
  },
  {
    id: 4,
    index: "04",
    title: "Reduced focus",
    description:
      "When your body feels stiff or uncomfortable, your focus repeatedly shifts away from work, reducing concentration, productivity, and your ability to stay engaged throughout the day.",
    image: reducedFocus,
    alt: "Woman distracted by her phone at her desk",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function WhyPostureMatters() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  // Restarts on every activeStep change (auto-advance or manual click) so the
  // countdown — and its visible progress bar below — always reflects real time
  // left on the currently shown step, instead of drifting after a manual pick.
  useEffect(() => {
    if (activeStep === null) return;

    const timeout = window.setTimeout(() => {
      setActiveStep((current) => ((current ?? 0) % steps.length) + 1);
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [activeStep]);

  const handleToggle = (stepId: number) => {
    setActiveStep((current) => (current === stepId ? null : stepId));
  };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#fafafa] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#fafafa_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            Posture Is Not Just Position
          </span>
          <h2 className="heading-section text-[#111111] mb-6">
            The Cost of Poor Posture
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light mt-16 max-w-2xl mx-auto"
          >
            Hours of sitting strain your body. AlignPod makes posture awareness effortless.
          </motion.p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-14 items-start">
            <div className="order-2 lg:order-1 flex flex-col lg:pr-6">
              {steps.map((step) => {
                const isActive = activeStep === step.id;

                return (
                  <motion.div
                    key={step.id}
                    initial={false}
                    className="mb-3 last:mb-0"
                  >
                    <button
                      onClick={() => handleToggle(step.id)}
                      aria-expanded={isActive}
                      className={`relative w-full overflow-hidden rounded-[22px] border px-5 py-4 text-left transition-all duration-300 ease-out ${
                        isActive
                          ? "border-[#111111] bg-[#111111] text-white shadow-[0_12px_35px_rgba(17,17,17,0.16)]"
                          : "border-gray-200 bg-white/70 text-[#111111] hover:bg-white hover:border-gray-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                          {step.index}
                        </span>
                        <span className={`text-xl font-semibold transition-all duration-300 ${isActive ? "text-white" : "text-[#111111]"}`}>
                          {step.title}
                        </span>
                      </div>

                      {/* Auto-advance progress — fills over the 5s dwell time on this step */}
                      {isActive && (
                        <motion.div
                          key={`progress-${step.id}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 5, ease: "linear" }}
                          style={{ transformOrigin: "left" }}
                          className="absolute bottom-0 left-0 h-[3px] w-full bg-white/40"
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="ml-2 mt-2 rounded-[18px] border border-gray-200 bg-[#f7f7f4] px-5 py-4 text-sm leading-7 text-gray-600">
                            {step.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-24 self-start">
              <div className="relative h-[60vh] sm:h-[72vh] w-full overflow-hidden rounded-[28px] border border-gray-200 bg-[#f3f3ef] shadow-sm">
                {steps.map((step) => {
                  const isActive = activeStep === step.id;

                  return (
                    <motion.img
                      key={step.id}
                      src={step.image}
                      alt={step.alt}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 1.03,
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
