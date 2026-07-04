import { motion } from "motion/react";
import wearAlign from "../assets/wear-device.jpeg";
import calibrate from "../assets/calibrate.png"
import realTime from "../assets/realtime-guide.png"
import track from "../assets/track-progress.png"

const steps = [
  {
    num: "01",
    title: "Wear AlignPod",
    desc: "Simply attach AlignPod to your upper back before starting work, studying, or daily activities.",
    img: wearAlign,
    alt: "Professional wearing AlignPod while working",
  },
  {
    num: "02",
    title: "Calibrate",
    desc: "In just a few seconds, AlignPod learns your natural upright posture for personalized tracking.",
    img: calibrate,
    alt: "Abstract representation of smart calibration",
  },
  {
    num: "03",
    title: "Real-Time Guidance",
    desc: "The device continuously tracks posture and provides gentle vibration reminders whenever slouching is detected.",
    img: realTime,
    alt: "Person sitting at a desk with good posture",
  },
  {
    num: "04",
    title: "Track Progress",
    desc: "View your posture trends, improvements, and daily habits inside the companion mobile application.",
    img: track,
    alt: "Smartphone showing health analytics UI",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HowItWorks() {
  return (
    <section className="relative w-full py-32 lg:py-48 bg-white overflow-hidden selection:bg-[#111111] selection:text-white" id="how-it-works">
      {/* Background Textures */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#f0f4f8_0%,transparent_70%)] opacity-50 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-24 lg:mb-40"
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

        {/* Steps Journey */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.num}
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative"
              >
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full lg:w-1/2 order-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative bg-white p-2 sm:p-3 rounded-[32px] sm:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100"
                  >
                    <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] aspect-[4/3] bg-gray-50">
                      {/* Inner image scaling animation on scroll */}
                      <motion.img
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={step.img}
                        alt={step.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[24px] sm:rounded-[32px] pointer-events-none"></div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`w-full lg:w-1/2 order-1 flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative">
                    {/* Background Number */}
                    <span className="absolute -top-16 -left-6 sm:-left-10 text-[120px] sm:text-[160px] font-display font-bold text-gray-50 select-none pointer-events-none leading-none tracking-tighter z-0">
                      {step.num}
                    </span>

                    <div className="relative z-10 pt-8 sm:pt-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-gray-300"></div>
                        <span className="text-sm font-semibold tracking-widest text-[#6B7280] uppercase">
                          Step {step.num}
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-6 text-[#111111] leading-[1.1]">
                        {step.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
