import { motion } from 'motion/react';
import { BookOpen, Briefcase, Code2, Gamepad2, Laptop, Plane } from 'lucide-react';

const lifestyles = [
  {
    title: "Students",
    text: "Stay aware during long study sessions and online classes.",
    icon: BookOpen,
  },
  {
    title: "Office Professionals",
    text: "Reduce unnoticed slouching during meetings, desk work, and daily tasks.",
    icon: Briefcase,
  },
  {
    title: "Developers & Designers",
    text: "Stay comfortable through deep work, coding, editing, and creative sessions.",
    icon: Code2,
  },
  {
    title: "Gamers",
    text: "Maintain better posture during long gaming sessions.",
    icon: Gamepad2,
  },
  {
    title: "Remote Workers",
    text: "Build healthier work-from-home posture habits.",
    icon: Laptop,
  },
  {
    title: "Frequent Travelers",
    text: "Use gentle therapy breaks after long sitting hours.",
    icon: Plane,
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function DesignedForEveryLifestyle() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_70%)] opacity-80 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-20 lg:mb-24"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-4">
            Built Around Your Day
          </span>
          <h2 className="heading-section text-[#111111] mb-6">
            Posture support for the way you live and work.
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
            Whether you're studying, coding, working long hours, gaming, or travelling, AlignPod helps you stay aware of posture without interrupting your routine.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {lifestyles.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative bg-white p-6 sm:p-8 rounded-[28px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all flex flex-col"
            >
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px] pointer-events-none"></div>

              {/* Premium CSS/SVG Illustration Container */}
              <div className="relative z-10 w-full h-40 sm:h-48 rounded-[20px] bg-[#F8F8F6] border border-[#E5E7EB]/60 mb-8 overflow-hidden flex items-center justify-center">
                
                {/* Background Ambience inside illustration */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_60%)] opacity-80"></div>
                
                {/* Abstract decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 sm:w-32 sm:h-32 border border-gray-200/40 rounded-full"></div>
                   <div className="absolute w-36 h-36 sm:w-48 sm:h-48 border border-gray-100/50 rounded-full"></div>
                </div>

                {/* Floating SVG Graphic */}
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 4 + (idx % 2), ease: "easeInOut", delay: idx * 0.2 }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl sm:rounded-3xl shadow-[0_12px_24px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] border border-gray-100 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-500">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.25} />
                  </div>
                  
                  {/* Dynamic underlying shadow */}
                  <motion.div 
                     animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.1, 0.3] }}
                     transition={{ repeat: Infinity, duration: 4 + (idx % 2), ease: "easeInOut", delay: idx * 0.2 }}
                     className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-[100%] blur-[6px]"
                  />
                </motion.div>

              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-display font-semibold text-[#111111] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed font-light text-base">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
