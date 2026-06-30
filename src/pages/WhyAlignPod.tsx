import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  Target, XCircle, SlidersHorizontal, 
  Smartphone, Activity, Vibrate, Users, Check,
  ChevronDown
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
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-[#F8F8F6] text-[#111111] overflow-hidden pt-32 pb-24 selection:bg-[#111111] selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
         <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_70%)] opacity-80 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6"
        >
          Why AlignPod
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="heading-hero text-[#111111] mb-8"
        >
          Designed differently.<br/>Built intentionally.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-body text-[#6B7280] max-w-2xl mx-auto mb-20"
        >
          AlignPod wasn't created to simply remind you to sit straighter. It was designed to help people build healthier posture habits through awareness, personalization, and consistency.
        </motion.p>

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
            className="relative z-10 w-[140px] sm:w-[160px] h-[220px] sm:h-[240px] bg-gradient-to-br from-[#EAEAEA] to-[#D5D5D5] rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(0,0,0,0.05)] border border-[#FFFFFF] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl"
          >
            {/* Glass reflection */}
            <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/80 to-transparent pointer-events-none rounded-t-[40px]" />
            {/* Center Button */}
            <div className="relative w-[70px] h-[70px] bg-gradient-to-b from-[#FFFFFF] to-[#F0F0F0] rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.02)] border border-white flex items-center justify-center">
               <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#FAFAFA] to-[#E5E5E5] shadow-[inset_0_2px_6px_rgba(0,0,0,0.03)]" />
            </div>
          </motion.div>
          {/* Shadow */}
          <motion.div 
            animate={{ scale: [1, 0.7, 1], opacity: [0.15, 0.05, 0.15] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -bottom-8 w-32 h-6 bg-black rounded-[100%] blur-[12px]"
          />
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B7280]"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight leading-[1.2] text-[#111111]">
              "Technology should quietly support healthy habits, not interrupt them."
            </h2>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-1/2"
          >
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light mb-8">
              Many wellness devices are designed to be demanding—buzzing constantly, requiring attention, and creating frustration. We took a different approach.
            </p>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
              AlignPod is built around the philosophy of subtle feedback and deep personalization. It respects your time and adapts to your body, offering gentle guidance only when you truly need it. It’s an everyday companion, not a strict coach.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const shortcomingsData = [
  { title: "Fixed posture reference", desc: "Most devices assume a perfect 'straight' posture that doesn't fit everyone's body type or natural resting position." },
  { title: "One-size-fits-all reminders", desc: "Generic vibrations can quickly become annoying when they buzz during tasks where leaning is necessary." },
  { title: "Limited personalization", desc: "Without context, simple sensors cannot distinguish between slouching and leaning forward intentionally." },
  { title: "No long-term tracking", desc: "Many tools lack the software ecosystem needed to visualize long-term habit changes and improvements." }
];

function Shortcomings() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            Why traditional posture devices fall short.
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">
            We studied the limitations of early posture wearables to understand why people stop using them after a few weeks.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {shortcomingsData.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="card-light"
            >
              <div className="icon-box-light bg-[#F8F8F6] text-[#6B7280]">
                <XCircle className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="heading-card text-xl">{item.title}</h3>
              <p className="text-body text-[#6B7280]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const differencesData = [
  { icon: SlidersHorizontal, title: "Smart Calibration", desc: "Calibrate exactly to your body. AlignPod learns what 'good posture' means for you." },
  { icon: Target, title: "Training & Therapy", desc: "Two distinct modes. Train your habits or relax with gentle upper-back therapy pulses." },
  { icon: Smartphone, title: "Companion App", desc: "A beautifully designed application to manage settings, start therapy, and view history." },
  { icon: Users, title: "Multiple Profiles", desc: "Save different profiles for the office, gaming, or studying so you aren't interrupted unnecessarily." },
  { icon: Activity, title: "Real-Time Monitoring", desc: "Instantly see your live posture angle and status directly on your smartphone screen." },
  { icon: Vibrate, title: "Gentle Haptics", desc: "Refined vibration motors provide soft, non-intrusive feedback that feels like a tap, not an alarm." }
];

function Differences() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            How AlignPod is different.
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {differencesData.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="group card-light flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="icon-box-light bg-white border-gray-200 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="heading-card text-xl">{item.title}</h3>
                <p className="text-body text-[#6B7280]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const lifestyles = [
  { title: "Office Professionals", desc: "Maintain energy and reduce the strain of long meetings and focused desk work. AlignPod acts as a silent partner to keep you aligned without breaking your flow.", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" },
  { title: "Students", desc: "Long study sessions can compromise posture. The dedicated study profile ensures you stay aware and focused without annoying vibrations.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" },
  { title: "Developers", desc: "Deep coding sessions often result in the 'developer hunch.' Set a relaxed coding profile that only alerts you when you deeply slouch.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" },
  { title: "Gamers", desc: "Keep a healthy posture during intense gaming sessions. A specialized profile accommodates natural leans while preventing severe slumps.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" },
  { title: "Remote Workers", desc: "Working from home often means the sofa becomes the office. AlignPod helps maintain structure even in relaxed, unstructured environments.", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop" }
];

function RealLife() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-20 lg:mb-32 text-center"
        >
          <h2 className="heading-section text-[#111111] mb-6">
            Designed around real life.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {lifestyles.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2 relative rounded-[40px] overflow-hidden aspect-[4/3] bg-gray-200 border border-gray-200 shadow-sm"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">{item.title}</h3>
                  <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TwoExperiences() {
  return (
    <section className="py-32 lg:py-48 bg-[#0F1115] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1A1E26_0%,transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-6">
            Dual Functionality
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight mb-16 lg:mb-24">
            One Device.<br/>Two Intelligent Experiences.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
          {/* Training */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-[#16181C] p-10 lg:p-16 rounded-[40px] border border-white/5 relative overflow-hidden group text-left"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-700"></div>
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white relative z-10">
               <Activity className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4 relative z-10">Training Mode</h3>
            <p className="text-[#9CA3AF] text-lg leading-relaxed font-light relative z-10">Gentle haptic reminders when you deviate from your calibrated posture. Builds long-term awareness and muscle memory.</p>
          </motion.div>

          {/* Therapy */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 bg-[#16181C] p-10 lg:p-16 rounded-[40px] border border-white/5 relative overflow-hidden group text-left"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white relative z-10">
               <Vibrate className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4 relative z-10">Therapy Mode</h3>
            <p className="text-[#9CA3AF] text-lg leading-relaxed font-light relative z-10">Dedicated sessions of rhythmic, soothing vibrations designed to relax the upper back after long sitting hours.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PersonalizedCalibration() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Phone / Device UI Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center perspective-[1000px]"
          >
            <motion.div 
              animate={{ rotateY: [-5, 5, -5], y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-[#FAFAFA] rounded-[40px] sm:rounded-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] border-[6px] sm:border-[8px] border-[#E5E7EB] flex flex-col p-6 items-center pt-24 overflow-hidden shrink-0"
            >
               {/* Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl"></div>
               
               <h4 className="text-2xl font-display font-bold mb-2">Office Profile</h4>
               <p className="text-sm text-gray-400 mb-12">Calibrating your posture...</p>

               {/* Progress Ring */}
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
                      animate={{ strokeDashoffset: [283, 56, 0] }}
                      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="w-12 h-12 text-[#111111]" strokeWidth={1} />
                  </div>
               </div>
               
               <div className="w-full max-w-[200px] h-2 bg-gray-200 rounded-full overflow-hidden">
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }}
                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                   className="w-1/2 h-full bg-[#111111] rounded-full"
                 />
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="heading-section text-[#111111] mb-6">
              Personalized Calibration.
            </h2>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light mb-6">
              Your body isn't a straight line. What feels comfortable and aligned for you might be completely different for someone else.
            </p>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light mb-10">
              AlignPod uses a quick, smart calibration process to establish your unique baseline. You can create different profiles for different contexts—one for your standing desk, and another for deep, relaxed reading.
            </p>
            
            <div className="flex flex-col gap-6">
               {['Customizable delay before alerts', 'Multiple saved lifestyle profiles', 'Adaptive sensing sensitivity'].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#F8F8F6] border border-[#E7E7E7] flex items-center justify-center flex-shrink-0">
                     <Check className="w-4 h-4 text-[#111111]" />
                   </div>
                   <span className="font-medium text-lg text-[#111111]">{item}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-24"
        >
          <h2 className="heading-section text-[#111111] mb-6">
            A Complete Ecosystem.
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed font-light max-w-2xl mx-auto">
            The hardware is only half the story. The companion app gives you total control over your experience, insights, and therapy sessions.
          </p>
        </motion.div>

        {/* Floating Phones Representation */}
        <div className="relative h-[500px] sm:h-[700px] w-full flex justify-center items-center perspective-[2000px]">
           <motion.div 
             animate={{ y: [-15, 15, -15] }}
             transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
             className="relative z-20 w-[260px] sm:w-[320px] h-[520px] sm:h-[640px] bg-white rounded-[40px] sm:rounded-[48px] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-[6px] sm:border-[8px] border-[#E5E7EB] flex flex-col p-6 items-center pt-20 shrink-0"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E5E7EB] rounded-b-3xl"></div>
              <div className="w-full flex justify-between items-center mb-8">
                 <span className="font-display font-bold text-xl">Live Posture</span>
                 <Activity className="w-6 h-6 text-[#111111]" />
              </div>
              <div className="flex flex-col items-center mb-10">
                  <div className="flex items-start">
                    <span className="text-[80px] leading-none font-display font-bold text-[#111111] tracking-tighter">12</span>
                    <span className="text-4xl text-gray-400 font-light mt-2">°</span>
                  </div>
                  <div className="mt-4 px-4 py-1.5 bg-[#111111] text-white rounded-full flex items-center gap-2">
                     <span className="text-xs font-semibold uppercase tracking-wider">Good Posture</span>
                  </div>
              </div>
              <div className="w-full flex-grow bg-gray-50 rounded-3xl border border-gray-100 flex flex-col justify-end p-5">
                 <div className="flex items-end justify-between h-24 gap-2">
                    {[30, 50, 40, 70, 50, 80, 60].map((h, i) => (
                      <div key={i} className={`w-full rounded-t-sm ${i === 6 ? 'bg-blue-400' : 'bg-[#111111]'}`} style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ x: 0, rotateY: 0, z: 0 }}
             whileInView={{ x: -180, rotateY: 20, z: -150 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="hidden lg:flex absolute z-10 w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-[#FAFAFA] rounded-[48px] shadow-xl border-[8px] border-[#E5E7EB] flex-col p-6 items-center pt-20 opacity-90 shrink-0"
           >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#E5E7EB] rounded-b-3xl"></div>
             <div className="w-full flex justify-between items-center mb-10">
                 <span className="font-display font-bold text-xl">Profiles</span>
             </div>
             <div className="w-full h-16 bg-white shadow-sm border border-gray-100 rounded-2xl mb-4"></div>
             <div className="w-full h-16 bg-white shadow-sm border border-gray-100 rounded-2xl mb-4"></div>
             <div className="w-full h-16 bg-white shadow-sm border border-gray-100 rounded-2xl"></div>
           </motion.div>

           <motion.div 
             initial={{ x: 0, rotateY: 0, z: 0 }}
             whileInView={{ x: 180, rotateY: -20, z: -150 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="hidden lg:flex absolute z-10 w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-[#111111] text-white rounded-[48px] shadow-xl border-[8px] border-[#E5E7EB] flex-col p-6 items-center pt-20 opacity-90 shrink-0"
           >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#E5E7EB] rounded-b-3xl"></div>
             <div className="text-center mb-10">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#34D399] uppercase block mb-2">Therapy</span>
                  <div className="text-5xl font-display font-light text-white">14<span className="opacity-50">:</span>30</div>
             </div>
             <div className="w-40 h-40 rounded-full border border-white/20 mx-auto mb-10 flex items-center justify-center relative">
                <div className="absolute w-32 h-32 rounded-full border border-[#34D399]/40 animate-ping"></div>
                <Vibrate className="w-10 h-10 text-[#34D399]" />
             </div>
             <div className="w-full h-20 bg-white/10 rounded-3xl mt-auto"></div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="py-32 lg:py-48 bg-white text-[#111111] text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Target className="w-12 h-12 text-gray-200 mb-12" />
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-12"
        >
          "We believe better posture begins with awareness—not perfection."
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-xl sm:text-2xl text-[#6B7280] font-light max-w-3xl leading-relaxed"
        >
          Our vision is to build thoughtful technology that quietly integrates into your life. Small corrections, gentle reminders, and personalized insights leading to long-term health.
        </motion.p>
      </div>
    </section>
  );
}

function WhyAlignPodCTA() {
  return (
    <section className="relative w-full py-32 lg:py-48 bg-[#0F1115] text-white overflow-hidden flex flex-col items-center">
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
          <div className="w-[120px] h-[200px] mx-auto bg-gradient-to-br from-[#2A2E35] to-[#16181C] rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] border border-[#3A3F47] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent rounded-t-[40px]" />
               <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#FAFAFA] to-[#E5E5E5] rounded-full shadow-inner border border-white/80" />
          </div>
        </motion.div>

        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-12"
        >
          Ready to experience AlignPod?
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

export default function WhyAlignPod() {
  return (
    <main className="w-full bg-[#F8F8F6] min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Shortcomings />
      <Differences />
      <RealLife />
      <TwoExperiences />
      <PersonalizedCalibration />
      <Ecosystem />
      <Vision />
      <WhyAlignPodCTA />
      <Footer />
    </main>
  );
}
