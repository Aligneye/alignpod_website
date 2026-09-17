import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { trackEvent } from "../utils/analytics";
import collarImg from "../assets/magnetic-collar.jpg";

// E-commerce Product Schema (Direct 1:1 map to MedusaJS Product Model)
export interface StoreProduct {
  id: string;
  title: string;
  handle: string;
  tagline: string;
  compatibility: string;
  price: number;
  currency: string;
  inStock: boolean;
  badge?: string;
  image: string;
  variants: { id: string; title: string; colorHex?: string }[];
}

// Initial catalog data (Ready to be populated via Medusa API: /store/products)
export const initialAccessories: StoreProduct[] = [
  {
    id: "prod_magnetic_collar",
    title: "Magnetic Collar",
    handle: "magnetic-collar",
    tagline: "Ergonomic silicone neck mount with dual N52 neodymium locking magnets.",
    compatibility: "Compatible with AlignPod v1 & v2",
    price: 1499,
    currency: "₹",
    inStock: true,
    badge: "New Arrival",
    image: collarImg,
    variants: [
      { id: "var_black", title: "Matte Black", colorHex: "#1C1C1E" },
      { id: "var_grey", title: "Space Grey", colorHex: "#48484A" },
    ],
  },
];

export default function Accessories() {
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({
    prod_magnetic_collar: "Matte Black",
  });

  const handleVariantChange = (productId: string, variantTitle: string) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variantTitle }));
  };

  return (
    <>
      <SEO
        title="Accessories | Official AlignPod Store"
        description="Shop official accessories, mounts, and essentials designed for your AlignPod smart posture tracker."
        canonical="https://www.aligneye.com/accessories"
      />

      <Navbar />

      <main className="min-h-screen bg-[#0E1014] text-white pt-28 sm:pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Store Header */}
          <div className="border-b border-white/10 pb-8 sm:pb-12 mb-10 sm:mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 font-semibold block mb-3">
                  Store · Accessories
                </span>
                <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                  AlignPod Accessories
                </h1>
                <p className="text-gray-400 text-sm sm:text-base font-light mt-3 max-w-xl">
                  Modular mounts, bands, and daily essentials designed to personalize and elevate your posture training setup.
                </p>
              </div>

              {/* Product Counter / Filter indicator */}
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-gray-300">
                  {initialAccessories.length} {initialAccessories.length === 1 ? "Product Available" : "Products Available"}
                </span>
              </div>
            </div>
          </div>

          {/* E-Commerce Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {initialAccessories.map((product) => {
              const activeVariant = selectedVariants[product.id] || product.variants[0]?.title || "";

              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-[#14171F] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
                >
                  {/* Product Image Container */}
                  <div className="relative aspect-square w-full bg-[#1A1E27] overflow-hidden flex items-center justify-center p-6">
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 text-[10px] font-mono font-medium tracking-wider uppercase px-2.5 py-1 rounded-md bg-white text-black font-semibold shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    />

                    {/* Stock Status Indicator */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>In Stock</span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Compatibility note */}
                      <span className="text-[11px] font-mono text-gray-400 block mb-1.5">
                        {product.compatibility}
                      </span>

                      {/* Title */}
                      <h2 className="text-lg font-display font-semibold text-white group-hover:text-gray-100 transition-colors">
                        {product.title}
                      </h2>

                      {/* Tagline / Brief */}
                      <p className="text-xs text-gray-400 font-light leading-relaxed mt-2 line-clamp-2">
                        {product.tagline}
                      </p>

                      {/* Variant Selector */}
                      {product.variants.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/5">
                          <span className="text-[11px] font-mono text-gray-400 block mb-2">
                            Color: <span className="text-white font-medium">{activeVariant}</span>
                          </span>

                          <div className="flex items-center gap-2">
                            {product.variants.map((v) => (
                              <button
                                key={v.id}
                                type="button"
                                onClick={() => handleVariantChange(product.id, v.title)}
                                className={`text-[11px] font-mono px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                                  activeVariant === v.title
                                    ? "bg-white text-black border-white font-semibold"
                                    : "bg-white/[0.04] text-gray-400 border-white/10 hover:border-white/20"
                                }`}
                              >
                                {v.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price & Action Row */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Price</span>
                        <span className="text-xl font-mono font-bold text-white">
                          {product.currency}{product.price.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <Link
                        to={`/buy-now?item=${product.handle}&color=${encodeURIComponent(activeVariant)}`}
                        onClick={() =>
                          trackEvent("buy_accessory_clicked", {
                            product: product.handle,
                            variant: activeVariant,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 active:scale-95 transition-all shadow-sm cursor-pointer"
                      >
                        <span>Buy Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* Teaser placeholder card for future accessories */}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] text-center min-h-[360px]">
              <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center mb-4 text-gray-400">
                <Sparkles className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-sm font-semibold font-display text-gray-200 mb-1">
                More Accessories in Development
              </h3>
              <p className="text-xs text-gray-400 max-w-xs font-light leading-relaxed">
                We are engineering new ergonomic clips, charging docks, and straps for AlignPod.
              </p>
              <Link
                to="/contact"
                className="mt-5 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Request an accessory →
              </Link>
            </div>

          </div>

          {/* Store Trust / Guarantees Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center sm:text-left">
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Free Express Shipping</h4>
                <p className="text-xs text-gray-400 font-light">Dispatched within 24-48 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Official 1-Year Warranty</h4>
                <p className="text-xs text-gray-400 font-light">100% genuine AlignPod hardware</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">7-Day Easy Replacement</h4>
                <p className="text-xs text-gray-400 font-light">Hassle-free support guarantee</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
