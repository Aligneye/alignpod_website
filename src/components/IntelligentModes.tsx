import { motion, type Variants } from "motion/react";
import { Check } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const trainingBullets = [
  "Real-time posture monitoring",
  "Gentle haptic correction",
  "Instant, delayed, and no-alert training options",
  "Personalized posture reference",
  "App-based progress tracking",
];

const therapyBullets = [
  "Gentle vibration patterns",
  "Relaxation-focused sessions",
  "Upper-back comfort support",
  "App or device activation",
  "Designed for daily wellness breaks",
];

export default function IntelligentModes() {
  return (
    <section className="relative w-full py-24 lg:py-10 bg-[#0F1115] text-white overflow-hidden selection:bg-white/20 selection:text-white lg:min-h-screen lg:flex lg:items-center" id="training-therapy">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,#ffffff05_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-20 lg:mb-8"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase mb-4 lg:mb-2">
            Two Intelligent Modes
          </span>
          <h2 className="heading-section text-white mb-6 lg:mb-3 lg:text-4xl">
            Train your posture.
            <br />
            Relax your back.
          </h2>
          <p className="text-lg sm:text-xl lg:text-base text-gray-300 leading-relaxed font-light">
            AlignPod combines real-time posture training with gentle vibration
            therapy, giving you one compact device for awareness, correction,
            and daily comfort.
          </p>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none scroll-smooth scroll-pl-6 lg:scroll-pl-0 no-scrollbar gap-4 sm:gap-5 lg:gap-6 -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          {/* Training Mode Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative flex flex-col w-[87%] sm:w-[70%] lg:w-auto min-w-0 flex-shrink-0 lg:flex-shrink snap-center snap-always bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] rounded-[32px] overflow-hidden transition-colors hover:bg-white/[0.06] hover:border-[#60A5FA]/40"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#60A5FA]/0 to-[#60A5FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Visual Area */}
            <div className="relative w-full h-[190px] sm:h-[320px] lg:h-[150px] bg-black/40 border-b border-white/[0.08] flex items-center justify-center overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              {/* Animated Illustration */}
              <div className="relative flex items-end h-40 scale-75 sm:scale-100 lg:scale-[0.55]">
                {/* Laptop Representation */}
                <div className="w-16 sm:w-20 h-14 border-t-2 border-r-2 border-white/20 rounded-tr-xl mr-8 sm:mr-12 relative">
                  <div className="absolute bottom-0 -left-4 w-24 sm:w-28 h-1.5 bg-white/30 rounded-full"></div>
                </div>

                {/* Abstract Spine/Person */}
                <svg
                  width="80"
                  height="150"
                  viewBox="0 0 80 150"
                  className="opacity-80"
                >
                  <path
                    d="M50 15 C 50 15, 65 45, 50 90 C 35 130, 20 150, 20 150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="text-white/40"
                  />
                  <circle
                    cx="50"
                    cy="15"
                    r="12"
                    fill="currentColor"
                    className="text-white/40"
                  />
                </svg>

                {/* Device Indicator & Waves */}
                <div className="absolute right-[24px] sm:right-[38px] top-[42px] sm:top-[44px]">
                  <motion.div
                    animate={{ scale: [1, 1.8, 2.5], opacity: [0.8, 0.3, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 w-3 h-3 bg-[#60A5FA] rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.4, 1.8], opacity: [0.6, 0.2, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                    className="absolute inset-0 w-3 h-3 bg-[#60A5FA] rounded-full"
                  />
                  <div className="relative w-3 h-3 bg-[#60A5FA] rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#60A5FA] shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-white uppercase">
                  Good Posture
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-10 lg:p-6 flex flex-col flex-grow z-10">
              <span className="text-sm font-semibold tracking-widest text-[#60A5FA] uppercase mb-2 sm:mb-3 lg:mb-2">
                Training Mode
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-xl font-display font-semibold text-white mb-3 sm:mb-4 lg:mb-2">
                Build better posture habits.
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed font-light text-base sm:text-lg lg:text-sm mb-5 sm:mb-8 lg:mb-4">
                AlignPod continuously monitors your posture angle and gives
                gentle vibration reminders when slouching is detected, helping
                you stay aware during work, study, and daily activities.
              </p>

              <ul className="mt-auto flex flex-col gap-2 sm:gap-3 lg:gap-1.5">
                {trainingBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 lg:w-2.5 lg:h-2.5 text-white/80" />
                    </div>
                    <span className="text-[#D1D5DB] font-light text-sm sm:text-base lg:text-xs">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Therapy Mode Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative flex flex-col w-[87%] sm:w-[70%] lg:w-auto min-w-0 flex-shrink-0 lg:flex-shrink snap-center snap-always bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] rounded-[32px] overflow-hidden transition-colors hover:bg-white/[0.06] hover:border-[#34D399]/40"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#34D399]/0 to-[#34D399]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Visual Area */}
            <div className="relative w-full h-[190px] sm:h-[320px] lg:h-[150px] bg-black/40 border-b border-white/[0.08] flex items-center justify-center overflow-hidden">
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#34D399]/10 blur-[80px] rounded-full pointer-events-none"></div>

              {/* Animated Illustration */}
              <div className="relative flex items-center justify-center h-40 w-40 scale-75 sm:scale-100 lg:scale-[0.55]">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border border-[#34D399]/20"
                />
                <motion.div
                  animate={{ scale: [1, 1.6, 1], opacity: [0.1, 0.4, 0.1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-4 rounded-full border border-[#34D399]/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.9, 1], opacity: [0.05, 0.2, 0.05] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute inset-8 rounded-full bg-[#34D399]/10 blur-xl"
                />

                {/* Central device/node */}
                <div className="relative w-10 h-10 rounded-full bg-[#34D399]/80 shadow-[0_0_24px_rgba(52,211,153,0.6)] z-10 flex items-center justify-center border border-white/20">
                  <div className="w-5 h-5 rounded-full bg-white/90"></div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-white uppercase">
                  10 / 20 / 30 MIN
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-10 lg:p-6 flex flex-col flex-grow z-10">
              <span className="text-sm font-semibold tracking-widest text-[#34D399] uppercase mb-2 sm:mb-3 lg:mb-2">
                Therapy Mode
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-xl font-display font-semibold text-white mb-3 sm:mb-4 lg:mb-2">
                Take a moment to reset.
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed font-light text-base sm:text-lg lg:text-sm mb-5 sm:mb-8 lg:mb-4">
                Use gentle vibration therapy sessions to relax your upper back
                after long sitting hours, screen work, or periods of stiffness.
              </p>

              <ul className="mt-auto flex flex-col gap-2 sm:gap-3 lg:gap-1.5">
                {therapyBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 lg:w-2.5 lg:h-2.5 text-white/80" />
                    </div>
                    <span className="text-[#D1D5DB] font-light text-sm sm:text-base lg:text-xs">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
