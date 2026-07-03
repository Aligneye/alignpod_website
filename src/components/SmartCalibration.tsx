import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Check, UserCircle2, Users, Power, Target } from 'lucide-react';

const cards = [
  {
    title: "Learns Your Posture",
    desc: "AlignPod captures your natural upright position instead of forcing a generic posture angle.",
    icon: UserCircle2
  },
  {
    title: "Up to 8 Profiles",
    desc: "Create different calibration profiles for different users, activities, or wearing positions.",
    icon: Users
  },
  {
    title: "One-Tap Default",
    desc: "Set any saved calibration profile as your active posture reference.",
    icon: Power
  },
  {
    title: "Better Accuracy",
    desc: "Personalized calibration helps reduce false alerts and improves posture feedback relevance.",
    icon: Target
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

export function SmartCalibration() {
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [timeLeft, setTimeLeft] = useState(8);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isCalibrating && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isCalibrating && timeLeft === 0) {
      setIsCalibrating(false);
      setIsDone(true);
      // reset after a few seconds
      setTimeout(() => {
        setIsDone(false);
        setTimeLeft(8);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [isCalibrating, timeLeft]);

  const handleStart = () => {
    if (!isCalibrating && !isDone) {
      setIsCalibrating(true);
      setTimeLeft(8);
    }
  };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white" id='calibration'>
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_70%)] blur-3xl"></div>
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
            Smart Calibration
          </span>
          <h2 className="heading-section text-[#111111] mb-6">
            Personalized posture tracking in seconds.
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
            Every body sits differently. AlignPod learns your natural upright position and uses it as your personal reference for more accurate posture awareness.
          </p>
        </motion.div>

        {/* Visual Showcase: Phone & Device */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-24 lg:mb-32 max-w-5xl mx-auto">
          
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center px-4 sm:px-0"
          >
            {/* Phone Body */}
            <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-white rounded-[40px] sm:rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[6px] sm:border-[8px] border-[#E5E7EB] overflow-hidden flex flex-col items-center pt-12 pb-8 shrink-0">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl"></div>

              {/* App Content */}
              <div className="w-full px-6 flex flex-col flex-grow items-center">
                <span className="text-sm font-semibold tracking-wide text-[#6B7280] uppercase mb-2">Step 2 of 4</span>
                <h3 className="text-2xl font-display font-semibold text-[#111111] mb-12">Calibration</h3>

                {/* Progress Ring */}
                <div className="relative w-48 h-48 flex items-center justify-center mb-10">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                    {/* Background Ring */}
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#F3F4F6" 
                      strokeWidth="4" 
                    />
                    {/* Animated Progress Ring */}
                    <motion.circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke={isDone ? "#10B981" : "#111111"} 
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "283", strokeDashoffset: "283" }}
                      animate={{ 
                        strokeDashoffset: isCalibrating ? "0" : (isDone ? "0" : "283"),
                      }}
                      transition={{ 
                        duration: isCalibrating ? 8 : 0.5, 
                        ease: "linear" 
                      }}
                    />
                  </svg>

                  {/* Inner Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                      {isDone ? (
                        <motion.div
                          key="done"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(16,185,129,0.3)]"
                        >
                          <Check className="w-8 h-8 text-white" strokeWidth={3} />
                        </motion.div>
                      ) : isCalibrating ? (
                        <motion.div
                          key="timer"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center"
                        >
                          <span className="text-6xl font-display font-bold text-[#111111] leading-none tracking-tighter">
                            {timeLeft}
                          </span>
                          <span className="text-sm font-medium text-[#6B7280]">sec</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="ready"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center"
                        >
                          <Target className="w-8 h-8 text-[#9CA3AF]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <p className="text-center text-[#6B7280] font-light px-4 leading-relaxed flex-grow">
                  {isDone ? "Calibration complete! Your baseline is set." : "Hold your natural upright posture and press start."}
                </p>

                {/* CTA Button */}
                <button 
                  onClick={handleStart}
                  disabled={isCalibrating || isDone}
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] ${
                    isCalibrating 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' 
                      : isDone 
                        ? 'bg-[#10B981] text-white hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)]' 
                        : 'bg-[#111111] text-white hover:bg-black hover:scale-[1.02]'
                  }`}
                >
                  {isCalibrating ? "Calibrating..." : isDone ? "Done" : "Start Calibration"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Device Mockup & Waves */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center h-[400px] lg:h-full relative"
          >
            <div className="relative">
              {/* Sensor Waves - Only active during calibration */}
              <AnimatePresence>
                {isCalibrating && (
                  <>
                    <motion.div 
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-[#60A5FA]/20 rounded-[48px] blur-md pointer-events-none"
                    />
                    <motion.div 
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ scale: 3.5, opacity: [0, 0.2, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.5 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-[#60A5FA]/10 rounded-[48px] blur-xl pointer-events-none"
                    />
                  </>
                )}
              </AnimatePresence>
              
              {/* Device Placeholder */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10 w-[140px] h-[220px] bg-gradient-to-br from-[#3A3D40] to-[#252729] rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(0,0,0,0.3)] border border-[#4A4D52] flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Highlight edge */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                {/* Circular White Button */}
                <div className={`relative w-[72px] h-[72px] bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(0,0,0,0.05)] border border-white/80 flex items-center justify-center transition-all duration-500 ${isCalibrating ? 'shadow-[0_0_20px_rgba(255,255,255,0.6)] scale-95' : ''}`}>
                  <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#FAFAFA] to-[#E5E5E5] shadow-[inset_0_2px_6px_rgba(0,0,0,0.06)]" />
                </div>
              </motion.div>
              
              {/* Dynamic shadow */}
              <motion.div 
                animate={{ scale: [1, 0.8, 1], opacity: [0.15, 0.05, 0.15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-[100%] blur-[12px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group bg-white p-8 rounded-[32px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F8F8F6] border border-[#E5E7EB] flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                <card.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-display font-semibold text-[#111111] mb-3">
                {card.title}
              </h4>
              <p className="text-[#6B7280] leading-relaxed font-light text-base flex-grow">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
