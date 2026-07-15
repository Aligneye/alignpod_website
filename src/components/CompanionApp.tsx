import { motion, AnimatePresence, type Variants } from 'motion/react';
import { Activity, SlidersHorizontal, Vibrate, BarChart3, X, UserCircle2, Users, Power, Target, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import calibapp from "../assets/calibapp.jpeg";
import training from "../assets/training.jpeg";
import therapy from "../assets/therapy.jpeg";

const cards = [
  {
    title: "Live Monitoring",
    desc: "See posture changes instantly while working or studying.",
    icon: Activity
  },
  {
    title: "Calibration Profiles",
    desc: "Manage multiple personalized posture profiles effortlessly.",
    icon: SlidersHorizontal
  },
  {
    title: "Therapy Control",
    desc: "Start and customize therapy sessions directly from the app.",
    icon: Vibrate
  },
  {
    title: "Progress Analytics",
    desc: "Understand long-term posture habits with beautiful insights.",
    icon: BarChart3
  }
];

const popupHighlights = [
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

export function CompanionApp() {
  const [showCalibrationPopup, setShowCalibrationPopup] = useState(false);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [timeLeft, setTimeLeft] = useState(8);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let resetTimer: ReturnType<typeof setTimeout> | undefined;

    if (isCalibrating && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isCalibrating && timeLeft === 0) {
      setIsCalibrating(false);
      setIsDone(true);
      resetTimer = setTimeout(() => {
        setIsDone(false);
        setTimeLeft(8);
      }, 4000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (resetTimer) {
        clearTimeout(resetTimer);
      }
    };
  }, [isCalibrating, timeLeft]);

  const handleStartCalibration = () => {
    if (!isCalibrating && !isDone) {
      setIsCalibrating(true);
      setTimeLeft(8);
    }
  };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#0E1014] text-white overflow-hidden selection:bg-[#111111] selection:text-white" id='companion-app'>
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,#60A5FA15_0%,transparent_70%)] blur-3xl"></div>
        <div className="absolute top-[40%] right-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#34D39910_0%,transparent_70%)] blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-24 lg:mb-32"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">
            Companion App
          </span>
          <h2 className="heading-section text-white mb-6">
            Everything you need.<br/>Right in your pocket.
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light">
            Monitor posture in real time, personalize calibration, control therapy sessions, and discover long-term progress through one beautifully designed application.
          </p>
        </motion.div>

        {/* Cinematic Phones Showcase */}
        <div className="relative h-auto md:h-[800px] lg:h-[700px] w-full flex flex-col md:block lg:flex lg:flex-row items-center justify-center lg:justify-between gap-12 md:gap-0 mb-24 lg:mb-32 px-0 lg:px-12 max-w-6xl mx-auto perspective-[2000px]">
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.05, rotateY: 0, z: 0 }}
            className="relative w-[260px] h-[560px] bg-white rounded-[40px] shadow-[-20px_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[6px] border-[#E5E7EB] overflow-hidden flex flex-col shrink-0 scale-[0.85] md:scale-90 lg:scale-100 origin-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#E5E7EB] rounded-b-2xl z-20"></div>
            <img
              src={training}
              alt="Training Screen"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative w-[300px] h-[640px] bg-white rounded-[48px] shadow-[0_40px_80px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[8px] border-[#E5E7EB] overflow-hidden flex flex-col shrink-0 scale-[0.85] md:scale-90 lg:scale-100 origin-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl z-20"></div>
            <img
              src={calibapp}
              alt="Calibration tracking"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.05, rotateY: 0, z: 0 }}
            className="relative w-[260px] h-[560px] bg-white rounded-[40px] shadow-[20px_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[6px] border-[#E5E7EB] overflow-hidden flex flex-col shrink-0 scale-[0.85] md:scale-90 lg:scale-100 origin-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#E5E7EB] rounded-b-2xl z-20"></div>
            <img
              src={therapy}
              alt="therapy screen inside app"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-20"
        >
          {cards.map((card, idx) => {
            const isProfileCard = card.title === "Calibration Profiles";

            return (
              <motion.button
                key={idx}
                type="button"
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={isProfileCard ? () => setShowCalibrationPopup(true) : undefined}
                className={`group flex flex-col relative overflow-hidden rounded-[28px] bg-[#181C22] border border-white/10 p-8 backdrop-blur-md hover:bg-[#0A0C0F] transition-all duration-300 text-left ${
                  isProfileCard ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div>
                    <card.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h4 className="heading-card text-white">
                    {card.title}
                  </h4>
                  <p className="text-body text-white/60 flex-grow">
                    {card.desc}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {showCalibrationPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center px-4 py-6"
            onClick={() => setShowCalibrationPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-[#E5E7EB] bg-[#F8F8F6] text-[#111111] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            >
              <button
                type="button"
                onClick={() => setShowCalibrationPopup(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-white shadow-sm transition hover:bg-black"
                aria-label="Close calibration popup"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-8 max-w-3xl">
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-4">
                    Smart Calibration
                  </span>
                  <h3 className="heading-section text-[#111111] mb-4">
                    Personalized posture tracking in seconds.
                  </h3>
                  <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
                    Every body sits differently. AlignPod learns your natural upright position and uses it as your personal reference for more accurate posture awareness.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                  <div className="flex justify-center">
                    <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-white rounded-[40px] sm:rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[6px] sm:border-[8px] border-[#E5E7EB] overflow-hidden flex flex-col items-center pt-12 pb-8 shrink-0">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl"></div>

                      <div className="w-full px-6 flex flex-col flex-grow items-center">
                        <span className="text-sm font-semibold tracking-wide text-[#6B7280] uppercase mb-2">Step 2 of 4</span>
                        <h4 className="text-2xl font-display font-semibold text-[#111111] mb-12">Calibration</h4>

                        <div className="relative w-48 h-48 flex items-center justify-center mb-10">
                          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="4" />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="45"
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

                        <button
                          type="button"
                          onClick={handleStartCalibration}
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {popupHighlights.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={index}
                          className="rounded-[24px] bg-white border border-[#E5E7EB] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F8F8F6] border border-[#E5E7EB] text-[#111111]">
                            <Icon className="h-5 w-5" strokeWidth={1.5} />
                          </div>
                          <h4 className="mb-2 text-lg font-display font-semibold text-[#111111]">{item.title}</h4>
                          <p className="text-sm leading-relaxed text-[#6B7280] font-light">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
