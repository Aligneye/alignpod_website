import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {Link} from "react-router-dom";
import analytics from "../assets/analytics.jpeg";
import breathe from "../assets/breathe.jpeg";
import ble from "../assets/ble.jpeg";
import apfinal from "../assets/apfinal2.png";
import { 
  Activity, Vibrate, Target, Smartphone,
  Check, Maximize, Feather, Layout, Settings
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
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  <div className="absolute top-[-180px] left-[-120px] w-[560px] h-[560px] rounded-full bg-blue-500/15 blur-[140px]" />
  <div className="absolute bottom-[-220px] right-[-120px] w-[620px] h-[620px] rounded-full bg-cyan-400/10 blur-[180px]" />
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
</div>
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
          AlignPod Device
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="heading-hero text-white mb-8"
        >
          Meet the smart wearable built for posture awareness.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-body text-white/70 max-w-3xl mx-auto mb-16"
        >
          AlignPod is a compact posture and wellness companion that combines real-time posture tracking, gentle haptic feedback, smart calibration, therapy mode, and app-based insights in one minimal device.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-20"
        >
          <button className="btn-primary-light w-full sm:w-auto">
            Explore Features
          </button>
          <Link to="/contact"
            className="btn-secondary-light w-full sm:w-auto">
            Contact Us
            </Link>
        </motion.div>

        {/* Floating Device Placeholder */}
       <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-sm mx-auto flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            <img
              src={apfinal}
              alt="AlignPod product visual"
              className="w-[220px] sm:w-[260px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)]"
            />
          </motion.div>
          {/* Shadow */}
          <motion.div 
            animate={{ scale: [1, 0.7, 1], opacity: [0.15, 0.05, 0.15] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -bottom-8 w-32 h-6 bg-black rounded-[100%] blur-[12px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

const designCards = [
  { icon: Maximize, title: "Compact wearable form", text: "Minimal footprint that rests discreetly without adding bulk to your daily attire." },
  { icon: Feather, title: "Lightweight daily comfort", text: "Engineered to be practically weightless, so you can wear it all day without distraction." },
  { icon: Layout, title: "Designed for upper-back placement", text: "Positioned optimally to detect subtle shifts in your natural posture and spinal alignment." }
];

function DeviceDesign() {
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
          <h2 className="heading-section text-[#111111]">
            Minimal form. Everyday comfort.
          </h2>
          <p className="text-body text-[#6B7280]">
            AlignPod is designed to be lightweight, compact, and easy to wear on the upper back during work, study, gaming, travel, or relaxation.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {designCards.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="card-light flex flex-col items-center text-center"
            >
              <div className="icon-box-light bg-white border-gray-200 w-16 h-16">
                <item.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="heading-card text-xl">{item.title}</h3>
              <p className="text-body text-[#6B7280]">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  { icon: Activity, title: "Real-Time Posture Tracking", text: "Continuously monitors your posture angle during daily activities." },
  { icon: Vibrate, title: "Gentle Haptic Feedback", text: "Provides subtle vibration reminders when posture drops." },
  { icon: Target, title: "Smart Calibration", text: "Learns your natural upright posture for personalized tracking." },
  { icon: Check, title: "Training Mode", text: "Helps build posture awareness through guided feedback." },
  { icon: Settings, title: "Therapy Mode", text: "Provides gentle vibration sessions for upper-back comfort and relaxation support." },
  { icon: Smartphone, title: "Companion App", text: "Syncs posture, calibration, battery, therapy, and progress data with the app." }
];

function CoreFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24 text-center"
        >
          <h2 className="heading-section text-[#111111]">
            Everything your posture routine needs.
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="group card-light flex flex-col"
            >
              <div className="icon-box-light group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300 w-12 h-12 rounded-full">
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="heading-card text-xl">{item.title}</h3>
              <p className="text-body text-[#6B7280]">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrainingTherapy() {
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
            One device. Two intelligent experiences.
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
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1)_0%,transparent_50%)] transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
             
             {/* Animated Sensor Wave */}
             <div className="h-40 w-full mb-10 relative flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute w-32 h-32 border border-blue-400/30 rounded-full" />
                <motion.div animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }} className="absolute w-32 h-32 border border-blue-400/20 rounded-full" />
                <Activity className="w-12 h-12 text-blue-400 relative z-10" />
             </div>

             <h3 className="text-3xl font-display font-bold mb-4 relative z-10">Training Mode</h3>
             <p className="text-gray-300 text-lg leading-relaxed font-light relative z-10">Build healthier posture habits with real-time awareness and gentle correction.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex-1 bg-[#161A21] border border-white/10 rounded-[40px] p-10 lg:p-16 relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1)_0%,transparent_50%)] transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
             
             {/* Animated Therapy Waves */}
             <div className="h-40 w-full mb-10 relative flex items-center justify-center">
                <motion.div animate={{ height: ["20%", "80%", "20%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-emerald-400/50 rounded-full mx-1" />
                <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-emerald-400/80 rounded-full mx-1" />
                <motion.div animate={{ height: ["60%", "40%", "60%"] }} transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-emerald-400/50 rounded-full mx-1" />
                <Vibrate className="w-12 h-12 text-emerald-400 absolute z-10 mix-blend-screen" />
             </div>

             <h3 className="text-3xl font-display font-bold mb-4 relative z-10">Therapy Mode</h3>
             <p className="text-gray-300 text-lg leading-relaxed font-light relative z-10">Take short wellness breaks with gentle vibration sessions for upper-back comfort.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SmartCalibration() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111] overflow-hidden">
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
              Personalized to the way you sit.
            </h2>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light mb-6">
              Instead of using one fixed posture angle, AlignPod learns your natural upright position and uses it as your reference.
            </p>
            <ul className="flex flex-col gap-4 mt-4">
              {[
                "Up to 8 calibration profiles.",
                "One-tap default profile.",
                "More personalized posture feedback."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium text-[#111111]">
                  <div className="w-8 h-8 rounded-full bg-[#F8F8F6] border border-[#E7E7E7] flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#111111]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px] px-4 sm:px-0"
          >
            <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-[#FAFAFA] rounded-[40px] sm:rounded-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] border-[6px] sm:border-[8px] border-[#E5E7EB] flex flex-col p-6 items-center pt-24 overflow-hidden shrink-0">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl"></div>
               
               <h4 className="text-2xl font-display font-bold mb-2">Calibration</h4>
               <p className="text-sm text-gray-400 mb-12">Setting your baseline</p>

               <div className="relative w-48 h-48 mb-12">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="4" />
                    <motion.circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#111111" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      strokeDasharray="283"
                      animate={{ strokeDashoffset: [283, 100, 0] }}
                      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="w-10 h-10 text-[#111111]" />
                  </div>
               </div>

               {/* Profile Cards */}
               <div className="w-full flex flex-col gap-3">
                 {['Office', 'Study', 'Gaming', 'Travel'].map((profile, idx) => (
                   <div key={idx} className={`w-full p-4 rounded-2xl border ${idx === 0 ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-[#111111] border-gray-100 shadow-sm'} flex justify-between items-center`}>
                     <span className="font-medium">{profile}</span>
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

function AppConnected() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-section mb-8">
            Your posture data, right in your pocket.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center perspective-[1000px] flex-wrap">
          {/* Mockup 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[280px] mx-auto h-[560px] bg-white rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-[6px] border-[#E5E7EB] p-5 pt-16 relative overflow-hidden"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#E5E7EB] rounded-b-2xl"></div>
             <img
              src={ble}
              alt="Live Posture"
              className="w-full h-full object-cover"
    />
          </motion.div>

          {/* Mockup 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[280px] mx-auto h-[560px] bg-white rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-[6px] border-[#E5E7EB] p-5 pt-16 relative overflow-hidden md:-translate-y-8"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#E5E7EB] rounded-b-2xl"></div>
             <img
              src={breathe}
              alt="Live Posture"
              className="w-full h-full object-cover"
    />
          </motion.div>

          {/* Mockup 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[280px] mx-auto h-[560px] bg-[#111111] text-white rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-[6px] border-[#E5E7EB] p-5 pt-16 relative overflow-hidden"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#E5E7EB] rounded-b-2xl"></div>
              <img
              src={analytics}
              alt="Live Posture"
              className="w-full h-full object-cover"
    />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const specs = [
  { label: "Device Type", value: "Wearable posture device" },
  { label: "Tracking Method", value: "Motion sensing based tracking" },
  { label: "Feedback", value: "Gentle vibration feedback" },
  { label: "Connectivity", value: "BLE mobile app connection" },
  { label: "Modes", value: "Training and therapy modes" },
  { label: "Profiles", value: "Personalized calibration profiles" },
  { label: "Design", value: "Compact wearable design" },
  { label: "Battery Life", value: "To be finalized" },
  { label: "Dimensions", value: "To be finalized" },
  { label: "Weight", value: "To be finalized" }
];

function Specifications() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-6">
            Built for everyday posture support.
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="border-t border-gray-200"
        >
          {specs.map((spec, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-between py-6 border-b border-gray-100"
            >
              <span className="font-semibold text-[#111111] mb-2 sm:mb-0 w-1/3">{spec.label}</span>
              <span className="text-[#6B7280] font-light w-full sm:w-2/3">{spec.value}</span>
            </motion.div>
          ))}
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="w-[140px] h-[220px] mx-auto bg-gradient-to-br from-[#2A2E35] to-[#16181C] rounded-[48px] shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] border border-[#3A3F47] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent rounded-t-[48px]" />
               <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#FAFAFA] to-[#E5E5E5] rounded-full shadow-inner border border-white/80" />
          </div>
        </motion.div>

        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8"
        >
          Ready to experience AlignPod?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A compact wearable designed to make posture awareness simple, personal, and consistent.
        </motion.p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="btn-primary-dark w-full sm:w-auto">
            Contact Us
          </button>
          <button className="btn-secondary-dark w-full sm:w-auto">
            Explore Science
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Product() {
  return (
    <main className="w-full bg-[#F8F8F6] min-h-screen">
      <Navbar />
      <Hero />
      <DeviceDesign />
      <CoreFeatures />
      <TrainingTherapy />
      <SmartCalibration />
      <AppConnected />
      <Specifications />
      <FinalCTA />
      <Footer />
    </main>
  );
}
