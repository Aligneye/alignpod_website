import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, ChevronDown } from "lucide-react";
import heroVideoUrl from "../assets/videos/alignpod-ezremove.mp4";
import { Link } from 'react-router-dom';
import { trackEvent } from "../utils/analytics";

export function Hero() {
  const words = ["Posture", "Alignment", "Habits", "Wellness"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500); // pause on full word
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 500); // pause on empty space before typing next
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100); // speed of typing/deleting

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

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
            className="flex flex-col justify-center max-w-2xl"
          >
            <h1 className="heading-hero mb-6 mt-8">
              Redefine your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-silver to-text-secondary inline-block min-h-[1.2em]">
                {words[index].substring(0, subIndex)}
              </span>
              <span className="inline-block w-[3px] h-[0.8em] bg-white ml-2 align-middle animate-pulse" />
            </h1>

            <p className="text-body text-text-secondary mb-10 max-w-lg">
              Intelligent posture tracking that helps you build healthier
              sitting habits through real-time monitoring and gentle, intuitive
              reminders.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/posture-check"
                className="btn-primary-dark"
                onClick={() =>
                 trackEvent("analyze_posture_clicked", {
                location: "hero",
               })
              }
             >
              Analyze Your Posture
           </Link>
              <button
                onClick={() => {trackEvent("watch_demo_clicked", { location: "hero" });
                setShowVideo(true);
                }}
               className="group w-full sm:w-auto btn-secondary-dark flex items-center justify-center gap-3"
                >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-white" />
                </div>
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Ambient glow accent (desktop only — no product visual here, video already carries the imagery) */}
          <div className="relative hidden lg:flex justify-center items-center order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-lg bg-white/5 blur-[100px] rounded-full pointer-events-none" />
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
      {showVideo && (
  <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center px-4">
    <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden">
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white text-black text-2xl flex items-center justify-center"
      >
        ×
      </button>

      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/ZVy5krlFEqk?autoplay=1"
        title="AlignEye Demo Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </div>
)}
    </section>
    
  );
}
