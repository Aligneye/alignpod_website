import { motion, AnimatePresence, type Variants } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
  bullets: string[];
}

interface FeatureCardProps {
  feature: Feature;
  isActive: boolean;
  onToggle: (id: string) => void;
}

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const bulletVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: 8, transition: { duration: 0.15 } },
};

export function FeatureCard({ feature, isActive, onToggle }: FeatureCardProps) {
  const { id, title, text, icon: Icon, bullets } = feature;

  return (
    <motion.div
      layout
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={() => onToggle(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(id);
        }
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      animate={{ scale: isActive ? 1.02 : 1 }}
      transition={{ layout: { duration: 0.45, ease: [0.4, 0, 0.2, 1] }, default: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
      className={[
        "group cursor-pointer rounded-[28px] border p-8 flex flex-col backdrop-blur-sm transition-colors duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d8080]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1014]",
        isActive
          ? "bg-white/[0.12] border-[#0d8080]/60 shadow-[0_0_0_1px_rgba(13,128,128,0.25),0_25px_60px_-15px_rgba(13,128,128,0.4),0_20px_45px_rgba(0,0,0,0.35)]"
          : "bg-white/[0.06] border-white/10 hover:bg-white/[0.09] hover:border-white/20 hover:shadow-[0_20px_40px_-10px_rgba(13,128,128,0.25)]",
      ].join(" ")}
    >
      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#111111] transition-colors duration-300">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>

      <h3 className="heading-card text-xl text-white">{title}</h3>
      <p className="text-body text-white/60">{text}</p>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="expanded-content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-6 pt-6 border-t border-white/10"
          >
            <ul className="space-y-2.5 mb-6">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={bullet}
                  custom={i}
                  variants={bulletVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-start gap-2.5 text-sm text-white/70"
                >
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[#0d8080] shrink-0" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              type="button"
              custom={bullets.length}
              variants={bulletVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0d8080] hover:gap-2.5 transition-all duration-300"
            >
              Learn More <span aria-hidden>→</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
