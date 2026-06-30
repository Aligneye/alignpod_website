import { motion } from 'motion/react';
import { Activity, SlidersHorizontal, Vibrate, BarChart3, Battery, Bluetooth, ChevronRight, Plus, Play, Pause, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

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

export function CompanionApp() {
  const [isPlaying, setIsPlaying] = useState(true);

  // Simple therapy timer toggle
  useEffect(() => {
    const interval = setInterval(() => {
      // Just to trigger re-renders for some subtle animations if needed
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white">
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
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-4">
            Companion App
          </span>
          <h2 className="heading-section text-[#111111] mb-6">
            Everything you need.<br/>Right in your pocket.
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
            Monitor posture in real time, personalize calibration, control therapy sessions, and discover long-term progress through one beautifully designed application.
          </p>
        </motion.div>

        {/* Cinematic Phones Showcase */}
        <div className="relative h-auto md:h-[800px] lg:h-[700px] w-full flex flex-col md:block lg:flex lg:flex-row items-center justify-center lg:justify-between gap-12 md:gap-0 mb-24 lg:mb-32 px-0 lg:px-12 max-w-6xl mx-auto perspective-[2000px]">
          
          {/* Phone 1: Calibration (Left, pushed back) */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 20, z: -100 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 15, z: -50 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative md:absolute lg:relative md:left-1/2 lg:left-auto md:-translate-x-1/2 lg:translate-x-0 md:-ml-[160px] lg:-ml-0 md:top-8 lg:top-8 z-10 w-full flex justify-center md:w-auto -my-8 md:my-0"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05, rotateY: 0, z: 0 }}
              className="relative w-[260px] h-[560px] bg-white rounded-[40px] shadow-[-20px_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[6px] border-[#E5E7EB] overflow-hidden flex flex-col shrink-0 scale-[0.85] md:scale-90 lg:scale-100 origin-center"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#E5E7EB] rounded-b-2xl z-20"></div>
              
              {/* Screen Content: Calibration */}
              <div className="w-full h-full bg-[#FAFAFA] flex flex-col pt-12 px-5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-display font-semibold text-[#111111]">Profiles</h3>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <Plus className="w-4 h-4 text-[#111111]" />
                  </div>
                </div>

                <div className="space-y-3">
                  {['Office', 'Study', 'Gaming', 'Standing'].map((profile, idx) => (
                    <div key={profile} className={`p-4 rounded-2xl flex items-center justify-between ${idx === 0 ? 'bg-[#111111] text-white shadow-md' : 'bg-white border border-gray-100 text-[#111111]'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#60A5FA] shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'bg-gray-300'}`}></div>
                        <span className="font-medium text-sm">{profile}</span>
                      </div>
                      {idx === 0 && <span className="text-[10px] uppercase tracking-wider text-white/70">Default</span>}
                      {idx !== 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                   <div className="relative w-20 h-20 mb-3">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="6" />
                        <motion.circle 
                          cx="50" cy="50" r="45" 
                          fill="none" 
                          stroke="#10B981" 
                          strokeWidth="6" 
                          strokeLinecap="round"
                          strokeDasharray="283"
                          animate={{ strokeDashoffset: [283, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-semibold text-[#10B981]">100%</span>
                      </div>
                   </div>
                   <span className="text-xs text-gray-500 font-medium">Calibration Success</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone 2: Live Posture (Center, large, in front) */}
          <motion.div
            initial={{ opacity: 0, y: 40, z: 0 }}
            whileInView={{ opacity: 1, y: 0, z: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative md:absolute lg:relative md:left-1/2 lg:left-auto md:-translate-x-1/2 lg:translate-x-0 z-30 lg:-mt-12 w-full flex justify-center md:w-auto -my-10 md:my-0"
          >
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="relative w-[300px] h-[640px] bg-white rounded-[48px] shadow-[0_40px_80px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[8px] border-[#E5E7EB] overflow-hidden flex flex-col shrink-0 scale-[0.85] md:scale-90 lg:scale-100 origin-center"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl z-20"></div>

              {/* Status Bar */}
              <div className="absolute top-3 left-6 right-6 flex justify-between items-center z-20 text-[#111111]">
                <span className="text-[10px] font-medium">9:41</span>
                <div className="flex items-center gap-1.5">
                  <Bluetooth className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>
              
              {/* Screen Content: Live Posture */}
              <div className="w-full h-full bg-white flex flex-col pt-16 px-6 relative">
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full">
                     <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                     <span className="text-[10px] font-bold tracking-wider uppercase">Connected</span>
                   </div>
                   <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                     <span className="text-[#111111] font-semibold text-sm">AM</span>
                   </div>
                </div>

                <div className="flex flex-col items-center mb-8">
                  <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2">Live Angle</span>
                  <div className="flex items-start">
                    <span className="text-[80px] leading-none font-display font-bold text-[#111111] tracking-tighter">14</span>
                    <span className="text-4xl text-gray-400 font-light mt-2">°</span>
                  </div>
                  <div className="mt-4 px-4 py-1.5 bg-[#111111] text-white rounded-full flex items-center gap-2">
                     <Check className="w-3.5 h-3.5" />
                     <span className="text-xs font-semibold uppercase tracking-wider">Good Posture</span>
                  </div>
                </div>

                {/* Animated Graph Area */}
                <div className="flex-grow w-full bg-gray-50 rounded-3xl p-5 border border-gray-100 flex flex-col justify-end relative overflow-hidden mb-6">
                   <span className="absolute top-4 left-5 text-xs font-medium text-gray-500">Today's Session</span>
                   <div className="absolute top-4 right-5 text-xs font-bold text-[#111111]">2h 15m</div>
                   
                   {/* CSS Chart bars */}
                   <div className="flex items-end justify-between h-24 gap-1 sm:gap-2 mt-8">
                      {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                        <div key={i} className="w-full bg-gray-200 rounded-t-sm relative group">
                          <motion.div 
                            initial={{ height: "0%" }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            className={`absolute bottom-0 w-full rounded-t-sm ${i === 6 ? 'bg-[#60A5FA]' : 'bg-[#111111]'}`}
                          ></motion.div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Bottom Nav Bar */}
                <div className="h-16 border-t border-gray-100 flex items-center justify-between px-2 text-gray-400">
                  <Activity className="w-5 h-5 text-[#111111]" />
                  <SlidersHorizontal className="w-5 h-5" />
                  <Vibrate className="w-5 h-5" />
                  <BarChart3 className="w-5 h-5" />
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#111111] rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone 3: Therapy (Right, pushed back) */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -20, z: -100 }}
            whileInView={{ opacity: 1, x: 0, rotateY: -15, z: -50 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative md:absolute lg:relative md:left-1/2 lg:left-auto md:-translate-x-1/2 lg:translate-x-0 md:ml-[160px] lg:ml-0 md:top-12 lg:top-12 z-10 w-full flex justify-center md:w-auto -my-8 md:my-0"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, rotateY: 0, z: 0 }}
              className="relative w-[260px] h-[560px] bg-white rounded-[40px] shadow-[20px_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[6px] border-[#E5E7EB] overflow-hidden flex flex-col shrink-0 scale-[0.85] md:scale-90 lg:scale-100 origin-center"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#E5E7EB] rounded-b-2xl z-20"></div>
              
              {/* Screen Content: Therapy */}
              <div className="w-full h-full bg-[#111111] flex flex-col pt-12 px-5 relative overflow-hidden">
                {/* Subtle dark glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#34D399]/20 blur-[50px] rounded-full pointer-events-none"></div>

                <div className="text-center mb-10 relative z-10 pt-4">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#34D399] uppercase mb-1 block">Therapy Mode</span>
                  <span className="text-xs text-white/50 font-medium">Remaining Time</span>
                  <div className="text-5xl font-display font-light text-white mt-2">18<span className="opacity-50">:</span>42</div>
                </div>

                {/* Animated Waves */}
                <div className="relative w-full h-40 flex items-center justify-center mb-8 z-10">
                   <motion.div 
                     animate={{ scale: isPlaying ? [1, 1.5, 1] : 1, opacity: isPlaying ? [0.2, 0, 0.2] : 0.1 }}
                     transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                     className="absolute w-24 h-24 rounded-full border border-[#34D399]/40"
                   />
                   <motion.div 
                     animate={{ scale: isPlaying ? [1, 2, 1] : 1, opacity: isPlaying ? [0.1, 0, 0.1] : 0.05 }}
                     transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                     className="absolute w-24 h-24 rounded-full border border-[#34D399]/20"
                   />
                   <div className="w-20 h-20 bg-[#34D399]/10 rounded-full flex items-center justify-center backdrop-blur-md border border-[#34D399]/30">
                      <Vibrate className="w-8 h-8 text-[#34D399]" />
                   </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6 z-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white/60">Pattern</span>
                    <span className="text-xs font-semibold text-white">Gentle Pulse</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/60">Intensity</span>
                    <span className="text-xs font-semibold text-white">Medium</span>
                  </div>
                </div>

                <div className="mt-auto mb-8 flex justify-center z-10">
                   <button 
                     onClick={() => setIsPlaying(!isPlaying)}
                     className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                   >
                     {isPlaying ? <Pause className="w-6 h-6 text-[#111111] fill-current" /> : <Play className="w-6 h-6 text-[#111111] fill-current" />}
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-20"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group card-light flex flex-col relative overflow-hidden"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="icon-box-light bg-[#F8F8F6] border-[#E7E7E7] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300 w-12 h-12 rounded-2xl">
                  <card.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h4 className="heading-card">
                  {card.title}
                </h4>
                <p className="text-body text-[#6B7280] flex-grow">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
