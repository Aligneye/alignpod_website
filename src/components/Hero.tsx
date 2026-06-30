import { motion } from "motion/react";
import { Play, ChevronDown } from "lucide-react";
import heroVideoUrl from "../assets/videos/hero-section.2.mp4";
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-deep-black">
      {/* Background Video/Gradient Setup */}
      <div className="absolute inset-0 z-0 bg-deep-black">
        <video
          autoPlay
          loop
          muted
          playsInline
           className="absolute inset-0 w-full h-full object-cover" 
           src={heroVideoUrl} 
         /> 
         {/* Subtle dark overlay (approx 40-50% opacity) to ensure text readability  */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)] py-12">
          {/* LEFT SIDE: Typography and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center max-w-2xl order-2 lg:order-1"
          >
            <h1 className="heading-hero mb-6 mt-8">
              Better Posture.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-silver to-text-secondary">
                Smarter Living.
              </span>
            </h1>

            <p className="text-body text-text-secondary mb-10 max-w-lg">
              Intelligent posture tracking that helps you build healthier
              sitting habits through real-time monitoring and gentle, intuitive
              reminders.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto btn-primary-dark">
                Buy Now
              </button>
              <a
  href="https://www.youtube.com/watch?v=ZVy5krlFEqk&t=1s"
  target="_blank"
  rel="noopener noreferrer"
  className="group w-full sm:w-auto btn-secondary-dark flex items-center justify-center gap-3"
>
  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
    <Play className="w-3.5 h-3.5 fill-white" />
  </div>
  Watch Demo
</a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Product Showcase */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 h-[40vh] sm:h-[50vh] lg:h-auto">
            {/* Ambient subtle glow behind product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-lg bg-white/5 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative z-10 w-full max-w-md"
            >
              <motion.div
                animate={{
                  y: [-12, 12, -12],
                  rotateZ: [-1, 1, -1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative flex justify-center drop-shadow-2xl"
              >
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-text-secondary opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
