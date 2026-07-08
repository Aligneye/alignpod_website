import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import record from "../assets/record.jpeg";
import dayrecord from "../assets/dayrecord.jpeg";
import { 
  Target, Smartphone, Activity, Vibrate, Users, Check,
  ChevronDown, Brain, Zap, ArrowDown
} from 'lucide-react';

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

function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-[#0B0F14] text-white overflow-hidden pt-32 pb-24 selection:bg-[#111111] selection:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
         <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_70%)] opacity-80 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block text-xs font-semibold tracking-[0.2em] text-white/70 uppercase mb-6"
        >
          The Science
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="heading-hero text-white mb-8"
        >
          Designed around the way your body naturally moves.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-body text-white/70 max-w-3xl mx-auto mb-20"
        >
          AlignPod combines motion sensing, personalized calibration, gentle haptic feedback, and intelligent software to help people build healthier posture habits through everyday awareness.
        </motion.p> 

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B7280]"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to explore</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyPostureMatters() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="heading-section text-[#111111]">
              Why Posture Matters
            </h2>
            <p className="text-body text-[#6B7280] mb-6">
              Long periods of sitting often reduce our natural awareness of body alignment. When focused on a screen, people usually don't notice when their posture gradually changes.
            </p>
            <p className="text-body text-[#6B7280]">
              Awareness is the first step toward healthier movement habits. By identifying the moments when alignment slips, we can begin to build long-term consistency.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#F8F8F6] rounded-[40px] flex items-center justify-center p-8 border border-[#E7E7E7]">
              <div className="relative w-full h-full flex items-center justify-center max-w-[200px]">
                <svg viewBox="0 0 200 300" className="w-full h-full">
                  <motion.path 
                    d="M100 50 Q130 100 110 170 T100 270" 
                    fill="none" 
                    stroke="#E5E7EB" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                  />
                  <motion.path 
                    d="M100 50 Q110 100 100 170 T100 270" 
                    fill="none" 
                    stroke="#111111" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                  {[50, 100, 150, 200, 250].map((cy, i) => (
                    <motion.circle 
                      key={i}
                      cx="100" cy={cy} r="10" fill="#111111" 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1 + (i * 0.1) }}
                      viewport={{ once: true }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  const steps = [
    { title: "Body Movement", icon: Activity },
    { title: "Motion Sensor", icon: Zap },
    { title: "Calibration Engine", icon: Target },
    { title: "Posture Analysis", icon: Brain },
    { title: "Haptic Feedback", icon: Vibrate },
    { title: "Companion App", icon: Smartphone }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            How AlignPod Understands Movement
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="flex flex-col items-center"
        >
           {steps.map((step, idx) => (
             <div key={idx} className="flex flex-col items-center">
               <motion.div 
                 variants={fadeInUp} 
                 className="bg-white px-8 py-6 rounded-[24px] shadow-sm border border-gray-100 flex items-center gap-6 min-w-[280px] hover:shadow-md transition-shadow"
               >
                 <div className="w-12 h-12 rounded-full bg-[#F8F8F6] border border-[#E7E7E7] flex items-center justify-center text-[#111111]">
                   <step.icon className="w-6 h-6" strokeWidth={1.5} />
                 </div>
                 <span className="font-display font-semibold text-lg sm:text-xl text-left flex-grow">{step.title}</span>
               </motion.div>
               {idx < steps.length - 1 && (
                 <motion.div variants={fadeInUp} className="h-10 w-px bg-gray-300 my-2 relative">
                   <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-[#6B7280]" />
                 </motion.div>
               )}
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}

function MotionSensing() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
             <div className="relative w-[300px] h-[300px] border border-gray-100 rounded-full flex items-center justify-center bg-gray-50/50">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-dashed border-gray-300 rounded-full"></motion.div>
                <div className="w-32 h-32 bg-white rounded-[32px] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 z-10">
                  <Activity className="w-10 h-10 text-[#111111]" />
                </div>
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-32 h-32 rounded-[32px] border border-[#111111]"></motion.div>
             </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="heading-section text-[#111111]">
              Motion Sensing Technology
            </h2>
            <p className="text-body text-[#6B7280] mb-6">
              AlignPod continuously detects body orientation and posture changes using advanced, low-power motion sensors. 
            </p>
            <p className="text-body text-[#6B7280]">
              This sensing data acts as the foundation for the entire ecosystem, instantly recognizing subtle shifts in alignment as you move throughout your day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SmartCalibration() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="heading-section mb-8">
              Smart Calibration Engine
            </h2>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light mb-6">
              Every person sits differently. What is comfortable and natural for one spine might be uncomfortable for another.
            </p>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
              Instead of forcing one generic posture angle for everyone, the Calibration Engine learns your unique natural upright posture. It sets a personalized reference point before monitoring begins.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]"
          >
            <div className="relative w-[280px] sm:w-[300px] h-[500px] sm:h-[550px] bg-white rounded-[40px] sm:rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.06)] border-[6px] sm:border-[8px] border-[#E5E7EB] flex flex-col p-6 items-center pt-20 overflow-hidden shrink-0">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl"></div>
               <h4 className="text-xl font-display font-semibold mb-2 text-[#111111]">Calibrating Profile</h4>
               <p className="text-sm text-[#6B7280] mb-12">Sit comfortably...</p>

               <div className="relative w-40 h-40 mb-12">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="4" />
                    <motion.circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#111111" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      strokeDasharray="283"
                      animate={{ strokeDashoffset: [283, 0] }}
                      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="w-10 h-10 text-[#111111]" />
                  </div>
               </div>

               <div className="w-full space-y-3">
                 {['Office Mode', 'Reading'].map((profile, idx) => (
                   <div key={idx} className={`w-full p-4 rounded-2xl border ${idx === 0 ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#F8F8F6] text-[#6B7280] border-[#E7E7E7]'} flex justify-between items-center`}>
                     <span className="font-medium text-sm">{profile}</span>
                     {idx === 0 && <Check className="w-4 h-4 text-white" />}
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function RealTimeAnalysis() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-section mb-8">
            Real-Time Posture Analysis
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
            Posture is continuously compared with your personalized reference. The system intelligently distinguishes between natural movement and prolonged slouching.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#F8F8F6] rounded-[40px] p-10 flex flex-col items-center justify-center text-center border border-[#E7E7E7]"
          >
             <div className="text-emerald-500 font-bold tracking-widest text-sm uppercase mb-4">Good Posture</div>
             <div className="text-7xl font-display font-light mb-8">0° - 25°</div>
             <div className="w-full max-w-[200px] h-2 bg-gray-200 rounded-full overflow-hidden">
               <motion.div className="h-full bg-emerald-500 rounded-full" animate={{ width: ["20%", "40%", "20%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#F8F8F6] rounded-[40px] p-10 flex flex-col items-center justify-center text-center border border-[#E7E7E7]"
          >
             <div className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4">Bad Posture</div>
             <div className="text-7xl font-display font-light mb-8">25°+</div>
             <div className="w-full max-w-[200px] h-2 bg-gray-200 rounded-full overflow-hidden">
               <motion.div className="h-full bg-amber-500 rounded-full" animate={{ width: ["60%", "90%", "60%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HabitFormation() {
  const habits = ["Awareness", "Reminder", "Correction", "Repetition", "Habit Formation", "Long-term Consistency"];
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           className="mb-20 text-center max-w-3xl mx-auto"
         >
            <h2 className="heading-section mb-8">The Science of Habit Formation</h2>
            <p className="text-lg sm:text-xl text-[#6B7280] font-light leading-relaxed">
              Small consistent reminders can encourage healthier posture habits over time. It is a structured process of building muscle memory and neurological awareness.
            </p>
         </motion.div>
         
         <motion.div 
           variants={staggerContainer} 
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: true }} 
           className="flex flex-col md:flex-row items-center justify-between gap-4 w-full"
         >
            {habits.map((habit, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center w-full">
                 <motion.div 
                   variants={fadeInUp} 
                   className="bg-white w-full md:w-auto px-6 py-4 rounded-2xl border border-[#E7E7E7] shadow-sm flex items-center justify-center text-center hover:border-gray-300 transition-colors"
                 >
                    <span className="font-medium text-[#111111] whitespace-nowrap">{habit}</span>
                 </motion.div>
                 {idx < habits.length - 1 && (
                   <motion.div variants={fadeInUp} className="h-8 w-px md:h-px md:w-8 bg-gray-300 my-2 md:my-0 md:mx-2"></motion.div>
                 )}
              </div>
            ))}
         </motion.div>
      </div>
    </section>
  );
}

function TrainingAndTherapy() {
  return (
    <section className="py-24 lg:py-32 bg-[#0E1014] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1A1E26_0%,transparent_70%)] opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24 text-center"
        >
          <h2 className="heading-section text-white mb-6">
            Why Training and Therapy Work Together
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex-1 bg-[#161A21] border border-white/10 rounded-[40px] p-10 lg:p-16 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-700"></div>
             
             <div className="h-32 w-full mb-10 relative flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute w-24 h-24 border border-blue-400/40 rounded-full" />
                <Target className="w-10 h-10 text-blue-400 relative z-10" />
             </div>

             <h3 className="text-3xl font-display font-bold mb-4">Training Mode</h3>
             <p className="text-gray-300 text-lg leading-relaxed font-light">
               Helps users become more aware of posture throughout daily activities by providing gentle reminders when posture drops below the calibrated threshold.
             </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex-1 bg-[#161A21] border border-white/10 rounded-[40px] p-10 lg:p-16 relative overflow-hidden group"
          >
             <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700"></div>
             
             <div className="h-32 w-full mb-10 relative flex items-center justify-center">
                <motion.div animate={{ height: ["30%", "100%", "30%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-emerald-400/60 rounded-full mx-1" />
                <motion.div animate={{ height: ["50%", "80%", "50%"] }} transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-emerald-400/80 rounded-full mx-1" />
                <motion.div animate={{ height: ["70%", "40%", "70%"] }} transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-emerald-400/60 rounded-full mx-1" />
             </div>

             <h3 className="text-3xl font-display font-bold mb-4">Therapy Mode</h3>
             <p className="text-gray-300 text-lg leading-relaxed font-light">
               Provides gentle, rhythmic vibration sessions designed to support relaxation and upper-back comfort after extended sitting or focused work.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CompanionApp() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24 max-w-3xl mx-auto"
        >
          <h2 className="heading-section mb-8">
            Companion App Intelligence
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
            The companion app provides a connected experience for monitoring posture, managing calibration profiles, controlling therapy sessions, and viewing long-term trends.
          </p>
        </motion.div>

        <div className="relative h-[500px] sm:h-[600px] w-full flex justify-center items-center perspective-[2000px]">
           <motion.div 
             animate={{ y: [-10, 10, -10] }}
             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
             className="relative z-20 w-[240px] sm:w-[280px] h-[480px] sm:h-[560px] bg-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-[6px] border-[#E5E7EB] flex flex-col p-5 items-center pt-16"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#E5E7EB] rounded-b-2xl"></div>
              <span className="font-display font-bold text-lg mb-8">History</span>
              <img src={dayrecord} alt="record of sessions of day" className='w-full h-full object-cover' />
           </motion.div>

           <motion.div 
             initial={{ x: 0, rotateY: 0, z: 0 }}
             whileInView={{ x: -160, rotateY: 15, z: -100 }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="hidden lg:flex absolute z-10 w-[240px] sm:w-[280px] h-[480px] sm:h-[560px] bg-[#FAFAFA] rounded-[40px] shadow-xl border-[6px] border-[#E5E7EB] flex-col p-5 items-center pt-16 opacity-90"
           >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#E5E7EB] rounded-b-2xl"></div>
             <img src={record} alt="record of sessions of day" className='w-full h-full object-cover' />
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function PersonalizedProfiles() {
  const profiles = ["Office Desk", "Lounge / Reading", "Gaming Setup", "Travel"];
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-6">
            Personalized For Every User
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed font-light">
            Multiple profiles support different sitting styles and family members.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {profiles.map((profile, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-white p-6 rounded-3xl border border-[#E7E7E7] flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#F8F8F6] border border-[#E7E7E7] flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#111111]" />
              </div>
              <span className="font-semibold text-sm">{profile}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-32 lg:py-48 bg-white text-[#111111] text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Brain className="w-12 h-12 text-gray-200 mb-12" />
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.2] mb-12"
        >
          "We believe technology should quietly support healthier habits—not interrupt them."
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-xl sm:text-2xl text-[#6B7280] font-light max-w-3xl leading-relaxed"
        >
          Thoughtful product design, subtle interactions, and deep personalization form the core of AlignPod's philosophy.
        </motion.p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative w-full py-32 lg:py-48 bg-[#0E1014] text-white overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#2A303C_0%,transparent_70%)] opacity-60 blur-3xl mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl sm:text-6xl font-display font-bold tracking-tight mb-12"
        >
          Experience the science behind AlignPod.
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="w-full sm:w-auto btn-primary-dark">
            Explore Product
          </button>
          <button className="w-full sm:w-auto btn-secondary-dark">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Science() {
  return (
    <main className="w-full bg-[#F8F8F6] min-h-screen">
      <Navbar />
      <Hero />
      <WhyPostureMatters />
      <Pipeline />
      <MotionSensing />
      <SmartCalibration />
      <RealTimeAnalysis />
      <HabitFormation />
      <TrainingAndTherapy />
      <CompanionApp />
      <PersonalizedProfiles />
      <Philosophy />
      <FinalCTA />
      <Footer />
    </main>
  );
}
