import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F8F8F6] text-[#111111] overflow-hidden selection:bg-[#111111] selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#ffffff_0%,transparent_60%)] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,#ffffff_0%,transparent_60%)] blur-3xl"></div>
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
            <div className="relative w-full aspect-[4/3] rounded-[40px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-center overflow-hidden">
              {/* Soft radial glow inside illustration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f8f8f6_0%,transparent_70%)]"></div>
              
              {/* Floating decorative elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute right-8 top-8 w-24 h-24 rounded-full border border-gray-100/50 backdrop-blur-sm"
              />
              <motion.div 
                animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute left-12 bottom-12 w-32 h-32 rounded-full bg-gray-50/50 border border-gray-100 backdrop-blur-md"
              />

              {/* Main Floating Device Concept */}
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 flex flex-col items-center"
              >
                 <div className="w-[120px] h-[180px] bg-gradient-to-br from-white to-gray-50 rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1)] border border-gray-200/60 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl">
                   {/* Glass reflection */}
                   <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
                   
                   {/* Center Button / Node */}
                   <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,1)] border border-gray-100 flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-gray-300" strokeWidth={1.5} />
                   </div>
                 </div>
                 
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
