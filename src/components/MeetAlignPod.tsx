import { motion } from "motion/react";
import { Activity, Vibrate, SlidersHorizontal, Smartphone } from "lucide-react";

const featuresLeft = [
  {
    title: "Real-time posture tracking",
    text: "Continuously monitors your posture angle while you sit, work, or study.",
    icon: Activity,
  },
  {
    title: "Gentle vibration feedback",
    text: "Gives silent haptic reminders when poor posture is detected.",
    icon: Vibrate,
  },
];

const featuresRight = [
  {
    title: "Personalized calibration",
    text: "Learns your natural upright position for more accurate posture awareness.",
    icon: SlidersHorizontal,
  },
  {
    title: "Mobile app insights",
    text: "Syncs posture data with the companion app to help track progress over time.",
    icon: Smartphone,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F7F7F5] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white">
      {/* Subtle Premium Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F7F7F5_100%)]"></div>
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
          <h2 className="heading-section text-[#111111] mb-6">
            A smarter way to build healthier posture.
          </h2>
          <p className="text-body text-[#6B7280]">
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
            {featuresLeft.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group card-light flex flex-col"
              >
                <div className="icon-box-light bg-white border-gray-200 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="heading-card text-xl">
                  {feature.title}
                </h3>
                <p className="text-body text-[#6B7280]">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Product Visual */}
          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center items-center h-[350px] lg:h-[500px] order-1 lg:order-2"
          >
            {/* Ambient Glow */}
            <div className="absolute w-[280px] h-[350px] bg-white rounded-full blur-[80px] opacity-80" />
            <div className="absolute w-[200px] h-[200px] bg-gray-200/50 rounded-full blur-[60px]" />

            {/* Floating Device Animation */}
            <motion.div
              animate={{ y: [-12, 12, -12], rotateZ: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)]"
            >
              {/* Device Placeholder: Matte Grey Body */}
              <div className="relative w-[130px] h-[210px] bg-gradient-to-br from-[#8A8D91] to-[#5C5F63] rounded-[36px] shadow-[inset_0_2px_6px_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.3)] border border-[#A1A4A8] flex flex-col items-center justify-center overflow-hidden">
                {/* Highlight curve on top edge */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                {/* Circular White Button */}
                <div className="relative w-16 h-16 bg-gradient-to-b from-[#FFFFFF] to-[#F0F0F0] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.8)] border border-white/80 flex items-center justify-center transition-transform hover:scale-95 duration-300 cursor-pointer">
                  {/* Button Inner Indent */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5F5F5] to-[#EBEBEB] shadow-[inset_0_2px_6px_rgba(0,0,0,0.06)]" />
                </div>
              </div>

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
            {featuresRight.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group card-light flex flex-col"
              >
                <div className="icon-box-light bg-white border-gray-200 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="heading-card text-xl">
                  {feature.title}
                </h3>
                <p className="text-body text-[#6B7280]">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
