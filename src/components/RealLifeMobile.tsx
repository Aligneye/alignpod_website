import { motion } from "motion/react";
import type { Lifestyle } from "./RealLifePinned";

interface RealLifeMobileProps {
  lifestyles: Lifestyle[];
}

export function RealLifeMobile({ lifestyles }: RealLifeMobileProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col gap-24 lg:gap-40">
        {lifestyles.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.num}
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
                    <motion.img
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      src={item.image}
                      alt={item.title}
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
                  <span className="absolute -top-16 -left-6 sm:-left-10 text-[120px] sm:text-[160px] font-display font-bold text-gray-50 select-none pointer-events-none leading-none tracking-tighter z-0">
                    {item.num}
                  </span>

                  <div className="relative z-10 pt-8 sm:pt-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-[1px] w-12 bg-gray-300"></div>
                      <span className="text-sm font-semibold tracking-widest text-[#6B7280] uppercase">
                        {item.num}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-6 text-[#111111] leading-[1.1]">
                      {item.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
