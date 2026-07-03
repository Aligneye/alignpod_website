import { motion } from "motion/react";
import { Activity, Zap, Target, Clock } from "lucide-react";

const cards = [
  {
    title: "Neck & Back Stress",
    text: "Poor posture places unnecessary load on your spine and upper back during long sitting hours.",
    icon: Activity,
  },
  {
    title: "Lower Energy",
    text: "Slouching can affect breathing efficiency and make the body feel tired faster.",
    icon: Zap,
  },
  {
    title: "Reduced Focus",
    text: "Discomfort from poor posture can silently affect concentration and work performance.",
    icon: Target,
  },
  {
    title: "Long-Term Habits",
    text: "Small posture mistakes repeated every day can become lasting body patterns.",
    icon: Clock,
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

export function WhyPostureMatters() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#fafafa] text-charcoal overflow-hidden selection:bg-charcoal selection:text-white">
      {/* Premium subtle background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
            Every healthy posture starts with a small habit
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
            Long sitting hours, screen work, and unnoticed slouching can slowly
            create stress on your neck, back, breathing, and focus. AlignPod is
            built to make posture awareness effortless.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-[28px] p-8 sm:p-10 border border-gray-200/60 shadow-sm hover:shadow-[0_0_40px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-500"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-gray-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 text-deep-black group-hover:scale-110 group-hover:bg-deep-black group-hover:text-white group-hover:shadow-md transition-all duration-500">
                  <card.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-deep-black mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-base sm:text-lg">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
