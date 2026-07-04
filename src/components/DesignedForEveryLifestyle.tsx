import { motion } from "motion/react";

import student from "../assets/student.webp";
import office from "../assets/office.webp";
import developer from "../assets/developer.jpg";
import gamer from "../assets/gamer.jpg";
import remote from "../assets/remote.jpg";
import traveller from "../assets/traveller.jpg";

const lifestyles = [
  {
    title: "Students",
    text: "Stay aware during long study sessions and online classes.",
    image: student,
  },
  {
    title: "Office Professionals",
    text: "Build healthier posture habits during long desk hours.",
    image: office,
  },
  {
    title: "Developers & Designers",
    text: "Stay comfortable through deep work, coding, and creative sessions.",
    image: developer,
  },
  {
    title: "Gamers",
    text: "Maintain better posture during focused gaming sessions.",
    image: gamer,
  },
  {
    title: "Remote Workers",
    text: "Support healthier work-from-home posture routines.",
    image: remote,
  },
  {
    title: "Frequent Travelers",
    text: "Use gentle therapy breaks after extended sitting.",
    image: traveller,
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
    transition: { staggerChildren: 0.12 },
  },
};

export function DesignedForEveryLifestyle() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-4">
            Built Around Your Day
          </span>

          <h2 className="heading-section text-[#111111] mb-6">
            Posture support for every lifestyle.
          </h2>

          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
            From study sessions to workdays, gaming, travel, and remote routines,
            AlignPod supports posture awareness wherever your day takes you.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8"
        >
          {lifestyles.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden mb-6 border border-[#E5E7EB] shadow-[0_12px_30px_rgba(0,0,0,0.06)] bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#6B7280] leading-relaxed max-w-[170px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
