import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles } from "lucide-react";

type AnalysisLoaderProps = {
  imagePreview: string;
};

const statusMessages = [
  { icon: "📷", text: "Uploading image..." },
  { icon: "🧠", text: "Initializing AI..." },
  { icon: "🔍", text: "Analyzing posture..." },
  { icon: "📐", text: "Detecting body landmarks..." },
  { icon: "📊", text: "Calculating posture score..." },
  { icon: "💡", text: "Generating personalized feedback..." },
  { icon: "✨", text: "Finalizing results..." },
];

export function AnalysisLoader({ imagePreview }: AnalysisLoaderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % statusMessages.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-[#111111] min-h-[460px] sm:min-h-[520px]">
      <img
        src={imagePreview}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25 scale-105 blur-[2px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30" />

      <div className="relative z-10 flex h-full min-h-[460px] sm:min-h-[520px] flex-col items-center justify-center px-6 py-10 text-center">
        <motion.div
          animate={{ scale: [0.96, 1, 0.96], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
        >
          <div className="relative h-16 w-16 rounded-full border border-white/25">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-white"
            />
            <motion.div
              animate={{ scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.14)]"
            />
          </div>
        </motion.div>

        <div className="max-w-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Analyzing your posture
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/75">
            Our AI is reviewing your image and preparing a thoughtful report.
          </p>
        </div>

        <div className="mt-6 min-h-12 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={statusMessages[activeIndex].text}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center gap-2 text-sm font-medium text-white"
            >
              <span>{statusMessages[activeIndex].icon}</span>
              <span>{statusMessages[activeIndex].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/70">
          <Sparkles className="h-3.5 w-3.5" />
          <span>AI-powered analysis in progress</span>
        </div>
      </div>
    </div>
  );
}
