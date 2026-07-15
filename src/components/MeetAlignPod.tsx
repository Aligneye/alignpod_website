import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { Activity, Vibrate, Sparkles , Smartphone } from "lucide-react";
import apfinal from "../assets/apfinal2.png";
import { FeatureCard, type Feature } from "./FeatureCard";

const featuresLeft: Feature[] = [
  {
    id: "realtime-tracking",
    title: "Real-time posture tracking",
    text: "Continuously monitors your posture angle while you sit, work, or study.",
    icon: Activity,
    bullets: [
      "Detects posture continuously",
      "Smart sensor calibration",
      "Low power monitoring",
    ],
  },
  {
    id: "smart-training",
    title: "Smart posture training",
    text: "Trains healthier posture habits with timely vibration alerts whenever slouching is detected.",
    icon: Sparkles,
    bullets: [
      "Instant vibration reminders",
      "Builds healthy posture habits",
      "Adaptive feedback",
    ],
  },
];

const featuresRight: Feature[] = [
  {
    id: "targeted-therapy",
    title: "Targeted vibration therapy",
    text: "Delivers soothing vibration sessions to help relax muscles, reduce stiffness, and support everyday comfort.",
    icon: Vibrate,
    bullets: [
      "Relaxing vibration modes",
      "Helps reduce stiffness",
      "Adjustable intensity",
    ],
  },
  {
    id: "app-insights",
    title: "Mobile app insights",
    text: "Syncs posture data with the companion app to help track progress over time.",
    icon: Smartphone,
    bullets: [
      "Daily posture score",
      "Weekly progress reports",
      "Habit streak tracking",
    ],
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function MeetAlignPod() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#0E1014] text-white overflow-hidden selection:bg-white selection:text-black" id="meet-alignpod">
      {/* Subtle Premium Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1A1D23_0%,#0E1014_72%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-4">
            Meet AlignPod
          </span>
          <h2 className="heading-section text-white mb-6">
            A smarter way to build healthier posture.
          </h2>
          <p className="text-body text-white/70">
            AlignPod is a compact smart wearable that tracks posture in real
            time, gives gentle vibration feedback, and helps you build better
            sitting habits through personalized calibration and app-based
            progress tracking.
          </p>
        </motion.div>

        {/* Product & Features Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column Features (Desktop) / Top Features (Mobile) */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {featuresLeft.map((feature) => (
              <motion.div key={feature.id} variants={fadeInUp}>
                <FeatureCard
                  feature={feature}
                  isActive={activeCard === feature.id}
                  onToggle={toggleCard}
                />
              </motion.div>
            ))}
          </div>

          {/* Center Column: Product Visual */}
          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center items-center h-[350px] lg:h-[500px] order-1 lg:order-2"
          >
            {/* Ambient Glow */}
            <div className="absolute w-[300px] h-[380px] bg-[#4F9CFF]/20 rounded-full blur-[90px]" />
<div className="absolute w-[220px] h-[220px] bg-white/10 rounded-full blur-[70px]" />

            {/* Floating Device Animation */}
            <motion.div
              animate={{ y: [-12, 12, -12], rotateZ: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)]"
            >
              <img
                src={apfinal}
                alt="AlignPod product visual"
                className="w-[180px] sm:w-[220px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              />

              {/* Dynamic shadow directly below the device */}
              <motion.div
                animate={{ scale: [1, 0.85, 1], opacity: [0.3, 0.15, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-[100%] blur-[10px]"
              />
            </motion.div>
          </motion.div>

          {/* Right Column Features (Desktop) / Bottom Features (Mobile) */}
          <div className="flex flex-col gap-6 order-3">
            {featuresRight.map((feature) => (
              <motion.div key={feature.id} variants={fadeInUp}>
                <FeatureCard
                  feature={feature}
                  isActive={activeCard === feature.id}
                  onToggle={toggleCard}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
