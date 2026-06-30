import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  Mail, Phone, Building2, HelpCircle, 
  Instagram, Linkedin, Youtube, Check,
  ArrowRight, ChevronDown
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
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#F8F8F6] text-[#111111] overflow-hidden pt-32 pb-24 selection:bg-[#111111] selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
         <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#ffffff_0%,transparent_70%)] opacity-80 blur-3xl"></div>
      </div>
      
      {/* Abstract Illustration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
           className="w-[600px] h-[600px] opacity-30"
         >
           <svg viewBox="0 0 100 100" className="w-full h-full text-gray-200">
             <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
             <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 6" />
             <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
           </svg>
         </motion.div>
         
         <motion.div 
           animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute w-4 h-4 rounded-full bg-blue-100/50 backdrop-blur-md left-1/4 top-1/3"
         />
         <motion.div 
           animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           className="absolute w-6 h-6 rounded-full bg-gray-200/50 backdrop-blur-md right-1/4 bottom-1/3"
         />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center mt-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6"
        >
          Contact
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="heading-hero text-[#111111] mb-8"
        >
          Let's start a conversation.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-body text-[#6B7280] max-w-2xl mx-auto"
        >
          Whether you have a question about Align Pod, need customer support, or simply want to learn more about our products, we're here to help.
        </motion.p>
      </div>
    </section>
  );
}

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "harshit@aligneye.com",
    subtitle: "For product questions and customer support.",
    button: "Copy Email",
    action: () => navigator.clipboard.writeText("harshit@aligneye.com")
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99551 65091",
    subtitle: "Speak with our team during business hours.",
    button: "Call Now",
    action: () => window.open("tel:+919955165091")
  },
  {
    icon: Building2,
    title: "Company",
    value: "AlignEye Vision Private Limited",
    subtitle: "Building thoughtful technology for healthier posture habits.",
    button: "Learn About Align",
    action: () => {}
  },
  {
    icon: HelpCircle,
    title: "Customer Support",
    value: "Need help?",
    subtitle: "Our support team is here to assist with product questions, setup guidance, and general inquiries.",
    button: "Contact Support",
    action: () => {}
  }
];

function GetInTouch() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleAction = (idx: number, action: () => void) => {
    action();
    if (idx === 0) {
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {contactCards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="card-light flex flex-col items-start"
            >
              <div className="icon-box-light">
                <card.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold tracking-wider text-[#6B7280] uppercase mb-2">{card.title}</span>
              <h3 className="heading-card">{card.value}</h3>
              <p className="text-[#6B7280] text-body mb-10 flex-grow">{card.subtitle}</p>
              
              <button 
                onClick={() => handleAction(idx, card.action)}
                className="group flex items-center gap-2 text-[#111111] font-semibold text-sm hover:text-gray-600 transition-colors"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    {card.button}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-5/12 flex flex-col"
          >
            <h2 className="heading-section text-[#111111]">
              How can we help?
            </h2>
            <p className="text-body text-[#6B7280]">
              Send us your message and our team will get back to you as soon as possible. We aim to respond to all inquiries within 24 hours.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-7/12"
          >
            <div className="bg-[#F8F8F6] rounded-[40px] p-8 lg:p-12 border border-[#E7E7E7]">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center text-center p-8 sm:px-8 sm:py-10 bg-white rounded-[32px] shadow-sm border border-[#E7E7E7] w-full min-h-fit overflow-visible"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                      className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 shrink-0"
                    >
                      <Check className="w-10 h-10 text-emerald-500" strokeWidth={2} />
                    </motion.div>
                    <h3 className="text-3xl font-display font-bold mb-4">Message Sent Successfully</h3>
                    <div className="text-[#6B7280] text-lg mb-8 space-y-2">
                      <p>Thank you for contacting Align.</p>
                      <p>We've received your message successfully.</p>
                      <p>Our team will review your inquiry and get back to you as soon as possible.</p>
                    </div>
                    <div className="bg-[#F8F8F6] rounded-2xl p-4 w-full mb-8 border border-[#E7E7E7]">
                      <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">Expected response time:</p>
                      <p className="text-[#6B7280] text-sm">Within 24 hours.</p>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                      <button 
                        onClick={() => setStatus('idle')}
                        className="btn-primary-light w-full"
                      >
                        Send Another Message
                      </button>
                      <Link 
                        to="/"
                        className="btn-secondary-light w-full text-center"
                      >
                        Back to Homepage
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#111111] ml-2">Full Name</label>
                        <input required type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#111111]/10 focus:border-[#111111] transition-all" placeholder="John Doe" />
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#111111] ml-2">Email Address</label>
                        <input required type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#111111]/10 focus:border-[#111111] transition-all" placeholder="john@example.com" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#111111] ml-2">Phone Number (Optional)</label>
                      <input type="tel" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#111111]/10 focus:border-[#111111] transition-all" placeholder="+1 (555) 000-0000" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#111111] ml-2">Category</label>
                      <div className="relative">
                        <select required className="w-full appearance-none bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#111111]/10 focus:border-[#111111] transition-all text-[#111111]">
                          <option value="support">Customer Support</option>
                          <option value="sales">Sales & Partnerships</option>
                          <option value="press">Press & Media</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#111111] ml-2">Message</label>
                      <textarea required rows={5} className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#111111]/10 focus:border-[#111111] transition-all resize-none" placeholder="How can we help you today?"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="btn-primary-light w-full mt-4 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <motion.div 
                          animate={{ rotate: 360 }} 
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full"
                        />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    desc: "Follow for visual updates and lifestyle inspiration.",
    url: "https://www.instagram.com/aligneye?igsh=emNkYmk2NGlucnAw"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    desc: "Connect for company news and professional updates.",
    url: "https://www.linkedin.com/company/aligneye/"
  },
  {
    icon: Youtube,
    name: "YouTube",
    desc: "Watch product guides, reviews, and features.",
    url: "https://www.youtube.com/@AlignEye"
  }
];

function Social() {
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
            Stay connected.
          </h2>
          <p className="text-body text-[#6B7280] max-w-2xl mx-auto">
            Follow Align to stay updated with product announcements, development progress, and wellness insights.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {socialLinks.map((social, idx) => (
            <motion.a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative card-light flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="icon-box-light group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300 relative z-10 w-16 h-16">
                <social.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="heading-card relative z-10">{social.name}</h3>
              <p className="text-body text-[#6B7280] mb-8 flex-grow relative z-10">{social.desc}</p>
              
              <div className="px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold text-[#111111] group-hover:border-[#111111] transition-colors relative z-10">
                Visit Profile
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CompanyInfo() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111111]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="card-dark !bg-[#0E1014] text-white relative overflow-hidden flex flex-col md:flex-row gap-12"
        >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
           
           <div className="flex-1 relative z-10">
             <div className="icon-box-dark w-16 h-16 mb-8">
               <Building2 className="w-8 h-8 text-white" strokeWidth={1.5} />
             </div>
             <h3 className="heading-card mb-4 text-[clamp(1.5rem,2.5vw,2.25rem)]">AlignEye Vision Private Limited</h3>
             <p className="text-gray-300 text-body mb-8">
               Designing intelligent wearable technology that encourages healthier posture habits through awareness, personalization, and thoughtful product design.
             </p>
           </div>
           
           <div className="flex-1 relative z-10 flex flex-col justify-center gap-6 md:border-l md:border-white/10 md:pl-12">
              <div>
                <span className="block text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">Brand</span>
                <span className="text-lg">Align</span>
              </div>
              <div>
                <span className="block text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">Email</span>
                <span className="text-lg">harshit@aligneye.com</span>
              </div>
              <div>
                <span className="block text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">Phone</span>
                <span className="text-lg">+91 99551 65091</span>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalMessage() {
  return (
    <section className="py-32 lg:py-48 bg-[#F8F8F6] text-[#111111] text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.2] mb-12"
        >
          "Every great conversation starts with a simple hello."
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-xl sm:text-2xl text-[#6B7280] font-light max-w-3xl leading-relaxed"
        >
          Whether you're reaching out for support, sharing feedback, or simply curious about Align, we'd love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <main className="w-full bg-[#F8F8F6] min-h-screen">
      <Navbar />
      <Hero />
      <GetInTouch />
      <ContactForm />
      <Social />
      <CompanyInfo />
      <FinalMessage />
      <Footer />
    </main>
  );
}
