import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import apfinal from '../assets/apfinal2.png';

const faqs = [
  {
    question: "How does AlignPod detect poor posture?",
    answer: "AlignPod continuously monitors body orientation using motion sensing technology and compares it with your personalized calibration profile."
  },
  {
    question: "How long does calibration take?",
    answer: "Calibration only takes a few seconds and helps create your personalized posture reference."
  },
  {
    question: "Can multiple users use one device?",
    answer: "Yes. Multiple calibration profiles can be created and switched whenever needed."
  },
  {
    question: "Does AlignPod work without the app?",
    answer: "Yes. Training and therapy can be used directly from the device, while the app provides additional controls and insights."
  },
  {
    question: "What is Therapy Mode?",
    answer: "Therapy Mode delivers gentle vibration sessions designed to support relaxation and upper-back comfort after prolonged sitting."
  },
  {
    question: "Is AlignPod comfortable to wear?",
    answer: "Its compact lightweight design is intended for comfortable everyday use."
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white" id='faq'>
      {/* Background Ambience */}
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  <motion.div
    animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
    className="absolute top-[8%] left-[10%] w-[420px] h-[420px] bg-[#A7C7FF]/30 rounded-full blur-[90px]"
  />

  <motion.div
    animate={{ y: [20, -20, 20], x: [15, -15, 15] }}
    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
    className="absolute bottom-[5%] right-[8%] w-[520px] h-[520px] bg-[#4F9CFF]/25 rounded-full blur-[110px]"
  />

  <motion.div
    animate={{ y: [-15, 15, -15] }}
    transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
    className="absolute top-[38%] left-[42%] w-[360px] h-[360px] bg-white/70 rounded-full blur-[100px]"
  />
</div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Illustration Area */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-5/12 flex flex-col pt-4 lg:sticky lg:top-32"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-4">
              Support
            </span>
            <h2 className="heading-section text-[#111111] mb-6">
              Frequently<br />Asked Questions.
            </h2>
            <p className="text-body text-[#6B7280] mb-12 max-w-md">
              Everything you need to know about AlignPod, calibration, modes, and device usage.
            </p>

            {/* Premium CSS Illustration */}
            <div className="relative w-[90%] max-w-[460px] aspect-[4/3] mx-auto rounded-[40px] bg-white/80 shadow-[0_30px_80px_rgba(0,0,0,0.10)] border border-white/70 backdrop-blur-xl flex items-center justify-center overflow-hidden">
              {/* Soft blue glow inside illustration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#DBEAFE_0%,transparent_72%)]"></div>
              

              {/* Main Floating Device Concept */}
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 flex flex-col items-center"
              >
                 <img
                   src={apfinal}
                   alt="AlignPod device"
                   className="w-[130px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                 />
                 
                 {/* Shadow underneath */}
                 <motion.div 
                   animate={{ scale: [1, 0.8, 1], opacity: [0.15, 0.05, 0.15] }}
                   transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                   className="mt-12 w-24 h-4 bg-black rounded-[100%] blur-[10px]"
                 />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Accordion FAQ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="w-full lg:w-7/12 flex flex-col gap-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`group relative bg-white rounded-[28px] border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-gray-300 shadow-[0_12px_30px_rgba(0,0,0,0.06)]' 
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                  }`}
                >
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 sm:px-8 py-6 flex items-center justify-between focus:outline-none"
                  >
                    <span className="text-lg sm:text-xl font-display font-medium text-[#111111] pr-8">
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? 'bg-[#111111] text-white' : 'bg-gray-50 text-[#111111] group-hover:bg-gray-100'
                    }`}>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 sm:px-8 pb-8 pt-0 text-[#6B7280] font-light text-base sm:text-lg leading-relaxed border-t border-gray-50 mt-2">
                          <div className="pt-6">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
