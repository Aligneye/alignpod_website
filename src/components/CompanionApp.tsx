import { motion } from 'motion/react';
import { Activity, SlidersHorizontal, Vibrate, BarChart3, Battery, Bluetooth, ChevronRight, Plus, Play, Pause, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import calibapp from "../assets/calibapp.jpeg";
import training from "../assets/training.jpeg";
import therapy from "../assets/therapy.jpeg";
import realangle from "../assets/realangle.jpeg";

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
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#E5E7EB] rounded-b-2xl z-20"></div>
              
              {/* Screen Content: training*/}
                <img
                    src={training}
                    alt="Training Screen"
                    className="w-full h-full object-cover"
                     />
            </motion.div>

          {/* Phone 2: Live Posture (Center, large, in front) */}
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="relative w-[300px] h-[640px] bg-white rounded-[48px] shadow-[0_40px_80px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[8px] border-[#E5E7EB] overflow-hidden flex flex-col shrink-0 scale-[0.85] md:scale-90 lg:scale-100 origin-center"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl z-20"></div>
                <img
                    src={calibapp}
                    alt="Calibration tracking"
                    className="w-full h-full object-cover"
                     />
              
            </motion.div>

          {/* Phone 3: Therapy (Right, pushed back) */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, rotateY: 0, z: 0 }}
              className="relative w-[260px] h-[560px] bg-white rounded-[40px] shadow-[20px_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] border-[6px] border-[#E5E7EB] overflow-hidden flex flex-col shrink-0 scale-[0.85] md:scale-90 lg:scale-100 origin-center"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#E5E7EB] rounded-b-2xl z-20"></div>
              
              {/* Screen Content: Therapy */}
              <img
                    src={therapy}
                    alt="therapy screen inside app"
                    className="w-full h-full object-cover"
                     />
              
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
              className="group flex flex-col relative overflow-hidden rounded-[28px] bg-[#181C22] border border-white/10 p-8 backdrop-blur-md hover:bg-[#0A0C0F]  transition-all duration-300"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div >
                  <card.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h4 className="heading-card text-white">
                  {card.title}
                </h4>
                <p className="text-body text-white/60 flex-grow">
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
