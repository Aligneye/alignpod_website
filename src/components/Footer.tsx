import { motion } from 'motion/react';
import { Target } from 'lucide-react';

const footerLinks = [
  {
    title: "Product",
    links: ["How It Works", "Training Mode", "Therapy Mode", "Smart Calibration", "Companion App"]
  },
  {
    title: "Company",
    links: ["About", "Science", "Why AlignPod", "Contact"]
  },
  {
    title: "Support",
    links: ["FAQ", "Help", "Privacy Policy", "Terms of Use"]
  },
  {
    title: "Connect",
    links: ["Email", "Instagram", "LinkedIn", "YouTube"]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function Footer() {
  return (
    <footer className="w-full bg-[#0E1014] text-white pt-16 lg:pt-24 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Area */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-20 lg:mb-24"
        >
          {/* Brand Column */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <a href="#" className="flex items-center gap-3 mb-6 group transition-opacity hover:opacity-80">
              <div className="w-10 h-10 rounded-xl bg-white text-[#111111] flex items-center justify-center">
                <Target className="w-6 h-6" strokeWidth={2} />
              </div>
              <span className="text-2xl font-display font-semibold tracking-tight text-white">AlignPod</span>
            </a>
            <p className="text-white/60 leading-relaxed font-light text-sm sm:text-base max-w-sm">
              AlignPod is a smart posture and wellness companion designed to help people build healthier posture habits through awareness, training, therapy, and app-based insights.
            </p>
          </div>

          {/* Links Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href="#" 
                        className="text-white/60 text-sm hover:text-white transition-colors duration-300 relative group inline-block"
                      >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Area */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/50"
        >
          <p>© 2026 AlignPod. All rights reserved.</p>
          <p>Designed for healthier posture habits, one day at a time.</p>
        </motion.div>
        
      </div>
    </footer>
  );
}
