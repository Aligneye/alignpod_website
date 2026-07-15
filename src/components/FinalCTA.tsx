import { motion, type Variants } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import apfinal from '../assets/apfinal2.png';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const trustItems = [
  "Smart Calibration",
  "Training + Therapy",
  "Companion App",
  "Personalized Profiles"
];

export function FinalCTA() {
  return (
    <section className="relative w-full py-32 lg:py-48 bg-[#0E1014] text-white overflow-hidden selection:bg-white/20 selection:text-white flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#2A303C_0%,transparent_70%)] opacity-50 blur-3xl mix-blend-screen"></div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0E1014_100%)]"></div>
        
        {/* Subtle floating particles (CSS based) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-white rounded-full blur-[1px] animate-[ping_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-[60%] left-[70%] w-1.5 h-1.5 bg-white rounded-full blur-[2px] animate-[ping_12s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-[80%] left-[20%] w-2 h-2 bg-white rounded-full blur-[2px] animate-[ping_10s_ease-in-out_infinite_1s]"></div>
          <div className="absolute top-[30%] left-[80%] w-1 h-1 bg-white rounded-full blur-[1px] animate-[ping_14s_ease-in-out_infinite_3s]"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center pb-24">
        
        {/* Main Floating Product Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-20 lg:mb-24 flex justify-center items-center h-[300px] w-full"
        >
           {/* Spotlight behind device */}
           <motion.div 
             animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
             className="absolute w-64 h-64 bg-white/5 rounded-full blur-[80px]"
           />
           
           <motion.div
             animate={{ y: [-15, 15, -15] }}
             transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
             className="relative z-10 flex flex-col items-center"
           >
             {/* Product Visual */}
             <img
               src={apfinal}
               alt="AlignPod product visual"
               className="w-[160px] sm:w-[200px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
             />
             
             {/* Floor Shadow */}
             <motion.div 
               animate={{ scale: [1, 0.7, 1], opacity: [0.3, 0.1, 0.3] }}
               transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
               className="mt-16 w-32 h-6 bg-black rounded-[100%] blur-[12px]"
             />
           </motion.div>
        </motion.div>

        {/* Text Content & Actions */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="heading-hero text-white mb-8"
          >
            Better posture<br/>starts with awareness.
          </motion.h2>

          <motion.div 
            variants={fadeInUp}
            className="text-body text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            <p className="mb-2">One compact wearable. Two intelligent modes. One companion app.</p>
            <p>Designed to help you build healthier posture habits through awareness, personalized feedback, and everyday consistency.</p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-20 w-full sm:w-auto"
          >
            <button className="btn-primary-dark w-full sm:w-auto">
              Get Started
            </button>
            <Link to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111111] text-white hover:bg-black transition duration-300">
            Contact Us
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4"
          >
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white/40" />
                <span className="text-sm font-medium tracking-wide text-white/60 uppercase">
                  {item}
                </span>
                {idx !== trustItems.length - 1 && (
                  <span className="hidden sm:block w-px h-4 bg-white/10 ml-6"></span>
                )}
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Brand Statement / Footer divider */}
      <div className="absolute bottom-0 w-full flex flex-col items-center pb-8 pt-20">
         <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
         <p className="text-xs font-light tracking-widest text-white/30 uppercase text-center px-4">
           Designed to help people build healthier posture habits, one day at a time.
         </p>
      </div>
    </section>
  );
}
