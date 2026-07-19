import { motion, type Variants } from 'motion/react';
import { Quote, Beaker, SlidersHorizontal, Activity, Smartphone } from 'lucide-react';

const testimonials = [
  {
    quote: "AlignPod made me more aware of how often I slouch during long work sessions.",
    name: "Early tester",
    role: "Desk worker",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The gentle vibration feedback feels subtle and useful, not distracting.",
    name: "Prototype user",
    role: "Student",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The calibration flow makes the device feel more personal than a fixed posture reminder.",
    name: "Beta reviewer",
    role: "Technology enthusiast",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=200&auto=format&fit=crop"
  }
];

const trustItems = [
  { text: "Prototype Tested", icon: Beaker },
  { text: "Smart Calibration", icon: SlidersHorizontal },
  { text: "Training + Therapy", icon: Activity },
  { text: "Mobile App Connected", icon: Smartphone }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function EarlyUserFeedback() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-white text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#f3f4f6_0%,transparent_70%)] blur-3xl"></div>
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
            Early Feedback
          </span>
          <h2 className="heading-section text-[#111111] mb-6">
            Designed with real posture habits in mind.
          </h2>
          <p className="text-body text-[#6B7280]">
            AlignPod is being built through continuous prototyping, user feedback, and real-world posture testing to create a more practical daily wellness experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative card-light flex flex-col h-full !p-8 sm:!p-10"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Header: Avatar and User Info */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center flex-shrink-0 shadow-inner overflow-hidden group-hover:scale-110 transition-transform duration-500 bg-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111]">{item.name}</h4>
                    <span className="text-sm text-[#6B7280] font-light">{item.role}</span>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-gray-200 mb-6" />
                <p className="text-xl sm:text-2xl font-display font-medium text-[#111111] leading-relaxed flex-grow">
                  "{item.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full border-t border-gray-100 pt-12 lg:pt-16"
        >
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-4">
            {trustItems.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex items-center gap-3 px-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8F8F6] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280]">
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm sm:text-base font-semibold tracking-wide text-[#111111] uppercase">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
