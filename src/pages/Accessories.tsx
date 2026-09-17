import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Sparkles, 
  Magnet, 
  Feather, 
  Droplets, 
  CheckCircle2, 
  ArrowRight,
  RotateCcw
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { trackEvent } from "../utils/analytics";
import collarImg from "../assets/magnetic-collar.jpg";

// Medusa-ready data structure
export interface AccessoryProduct {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  currency: string;
  inStock: boolean;
  badge: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

export const magneticCollarProduct: AccessoryProduct = {
  id: "prod_magnetic_collar",
  title: "Magnetic Collar",
  subtitle: "Ergonomic magnetic collar mount engineered exclusively for AlignPod.",
  price: 1499,
  currency: "₹",
  inStock: true,
  badge: "Official Accessory",
  description:
    "Designed for all-day seamless wear. The AlignPod Magnetic Collar provides a secure, weightless neck mount using ultra-strong neodymium alignment magnets encased in soft-touch, hypoallergenic medical-grade silicone.",
  highlights: [
    "Snap-to-align dual N52 neodymium magnetic locking mechanism",
    "Featherlight 18g contoured collar with balanced weight distribution",
    "Sweat-resistant, skin-safe biocompatible silicone coating",
    "Zero-interference vibration pass-through for posture alerts",
    "Works under shirts, t-shirts, and sportswear discreetly",
  ],
  specs: [
    { label: "Compatibility", value: "AlignPod v1 & v2 Sensor Units" },
    { label: "Weight", value: "18 grams (Featherlight)" },
    { label: "Material", value: "Medical-Grade Silicone + Anodized Aluminum" },
    { label: "Water Resistance", value: "IPX4 Sweat & Splash Resistant" },
    { label: "Magnetic Strength", value: "Dual N52 Neodymium Array" },
    { label: "Warranty", value: "1 Year Official Warranty" },
  ],
};

export default function Accessories() {
  const [selectedColor, setSelectedColor] = useState<"Space Grey" | "Matte Black">("Matte Black");
  const product = magneticCollarProduct;

  return (
    <>
      <SEO
        title="AlignPod Magnetic Collar | Official Wearable Accessory"
        description="Explore the official AlignPod Magnetic Collar. An ergonomic, featherlight neck mount designed for seamless posture tracking."
        canonical="https://www.aligneye.com/accessories"
      />

      <Navbar />

      <main className="min-h-screen bg-[#0A0B0E] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-gray-300">
                Official Accessories
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mb-4"
            >
              Engineered for Everyday Wear
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed font-light"
            >
              Add-ons crafted to elevate your posture training experience with comfort, precision, and discreet design.
            </motion.p>
          </div>

          {/* Product Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#12141A]/70 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl mb-16">
            
            {/* Left: Product Visual Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative flex flex-col items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[480px] rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 flex items-center justify-center p-6 sm:p-8">
                {/* Floating Glow */}
                <div className="absolute inset-0 bg-radial from-white/[0.08] via-transparent to-transparent opacity-60" />
                
                <img
                  src={collarImg}
                  alt="AlignPod Magnetic Collar"
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105"
                />

                <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium tracking-wide">
                  {product.badge}
                </span>
              </div>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-[480px] mt-4">
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Magnet className="w-4 h-4 text-emerald-400 mb-1" />
                  <span className="text-[11px] text-gray-300 font-medium">N52 Magnetic</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Feather className="w-4 h-4 text-blue-400 mb-1" />
                  <span className="text-[11px] text-gray-300 font-medium">18g Weight</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Droplets className="w-4 h-4 text-purple-400 mb-1" />
                  <span className="text-[11px] text-gray-300 font-medium">IPX4 Resistant</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Product Details & Purchase Trigger */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-6 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-semibold">
                  Modular Wearable Mounting
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
                  {product.title}
                </h2>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {product.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-white/10">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-white">
                    {product.currency}{product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono">
                    Free standard delivery included
                  </span>
                </div>

                {/* Color Selector */}
                <div className="mb-6">
                  <label className="block text-xs font-mono tracking-wider uppercase text-gray-400 mb-2">
                    Finish: <span className="text-white font-semibold">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-3">
                    {(["Matte Black", "Space Grey"] as const).map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                          selectedColor === color
                            ? "bg-white text-black border-white shadow-md font-semibold"
                            : "bg-white/[0.04] text-gray-300 border-white/10 hover:border-white/20"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Highlight Bullets */}
                <div className="space-y-2.5 mb-8">
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link
                  to={`/buy-now?item=magnetic-collar&color=${encodeURIComponent(selectedColor)}`}
                  onClick={() => trackEvent("buy_accessory_clicked", { product: "magnetic_collar", color: selectedColor })}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white text-[#0A0B0E] font-semibold text-sm hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] text-center cursor-pointer"
                >
                  <span>Order Magnetic Collar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 px-2 pt-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    1 Year Warranty
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5 text-blue-400" />
                    7-Day Replacement
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Technical Specifications Grid */}
          <div className="bg-white/[0.02] border border-white/5 rounded-[28px] p-6 sm:p-10">
            <h3 className="text-xl font-display font-semibold text-white mb-6">
              Technical Specifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-gray-400 block">
                    {spec.label}
                  </span>
                  <span className="text-sm font-medium text-white block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
