import { motion, type Variants } from 'motion/react';
import { Target } from 'lucide-react';
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Training Mode", href: "#training-therapy" },
      { label: "Therapy Mode", href: "#training-therapy" },
      { label: "Calibration Profiles", href: "#companion-app" },
      { label: "Companion App", href: "#companion-app" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/product" },
      { label: "Science", href: "/science" },
      { label: "Why AlignPod", href: "/why-alignpod" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Help", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:harshit@aligneye.com" },
      { label: "Instagram", href: "https://www.instagram.com/aligneye?igsh=emNkYmk2NGlucnAw" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/aligneye/" },
      { label: "YouTube", href: "https://www.youtube.com/@AlignEye" },
    ],
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
                       href={link.href}
                       target={link.href.startsWith("http") ? "_blank" : undefined}
                       rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                       className="text-white/60 text-sm hover:text-white transition-colors duration-300 relative group inline-block">
                      {link.label}
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
