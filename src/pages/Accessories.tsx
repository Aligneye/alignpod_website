import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  ArrowRight,
  Sparkles,
  Check
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { trackEvent } from "../utils/analytics";
import { accessoriesCatalog } from "../data/accessories";

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

      <main className="min-h-screen bg-[#F8F8F6] text-[#111111] pt-28 sm:pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Bright Store Header */}
          <div className="border-b border-[#E5E7EB] pb-8 sm:pb-12 mb-10 sm:mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-3">
                  Store · Accessories
                </span>
                <h1 className="text-3xl sm:text-5xl font-display font-bold text-[#111111] tracking-tight">
                  AlignPod Accessories
                </h1>
                <p className="text-[#6B7280] text-sm sm:text-base font-light mt-3 max-w-xl leading-relaxed">
                  Modular mounts, bands, and daily essentials designed to personalize and elevate your posture training setup.
                </p>
              </div>

              {/* Product Counter Pill */}
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white border border-[#E5E7EB] text-[#4B5563] shadow-xs">
                  {accessoriesCatalog.length} {accessoriesCatalog.length === 1 ? "Product Available" : "Products Available"}
                </span>
              </div>
            </div>
          </div>

          {/* E-Commerce Product Grid (Bright, Clean, Scalable) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {accessoriesCatalog.map((product) => {
              const activeVariant = selectedVariants[product.id] || product.variants[0]?.title || "";

              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#D1D5DB] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                >
                  {/* Clickable Product Image Container -> Links to Product Page */}
                  <Link
                    to={`/accessories/${product.handle}`}
                    className="relative aspect-square w-full bg-[#F3F4F6] overflow-hidden flex items-center justify-center p-6 block"
                  >
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#111111] text-white shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Stock Status Indicator */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-mono text-emerald-700 border border-emerald-200/60 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>In Stock</span>
                    </div>
                  </Link>

                  {/* Product Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Compatibility note */}
                      <span className="text-[11px] font-mono text-[#9CA3AF] block mb-1.5">
                        {product.compatibility}
                      </span>

                      {/* Title with link to Dedicated Page */}
                      <Link
                        to={`/accessories/${product.handle}`}
                        className="text-lg font-display font-semibold text-[#111111] group-hover:text-black transition-colors block"
                      >
                        {product.title}
                      </Link>

                      {/* Tagline / Brief */}
                      <p className="text-xs text-[#6B7280] font-light leading-relaxed mt-2 line-clamp-2">
                        {product.subtitle}
                      </p>

                      {/* Variant Selector */}
                      {product.variants.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-[#F3F4F6]">
                          <span className="text-[11px] font-mono text-[#6B7280] block mb-2">
                            Color: <span className="text-[#111111] font-medium">{activeVariant}</span>
                          </span>

                          <div className="flex items-center gap-2">
                            {product.variants.map((v) => (
                              <button
                                key={v.id}
                                type="button"
                                onClick={() => handleVariantChange(product.id, v.title)}
                                className={`text-[11px] font-mono px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
                                  activeVariant === v.title
                                    ? "bg-[#111111] text-white border-[#111111] font-semibold"
                                    : "bg-[#F9FAFB] text-[#4B5563] border-[#E5E7EB] hover:border-[#D1D5DB]"
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
                    <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#9CA3AF] uppercase tracking-wider block">Price</span>
                        <span className="text-xl font-mono font-bold text-[#111111]">
                          {product.currency}{product.price.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to={`/accessories/${product.handle}`}
                          className="px-3 py-2 rounded-full border border-gray-300 text-xs font-semibold text-[#111111] hover:bg-gray-50 transition-all text-center"
                        >
                          Details
                        </Link>
                        
                        <Link
                          to={`/buy-now?item=${product.handle}&color=${encodeURIComponent(activeVariant)}`}
                          onClick={() =>
                            trackEvent("buy_accessory_clicked", {
                              product: product.handle,
                              variant: activeVariant,
                            })
                          }
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-black active:scale-95 transition-all shadow-xs"
                        >
                          <span>Buy</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* Teaser placeholder card for future accessories (Bright style) */}
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-[#E5E7EB] bg-white/60 text-center min-h-[360px]">
              <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-4 text-[#6B7280]">
                <Sparkles className="w-5 h-5 text-[#6B7280]" />
              </div>
              <h3 className="text-sm font-semibold font-display text-[#111111] mb-1">
                More Accessories Coming Soon
              </h3>
              <p className="text-xs text-[#6B7280] max-w-xs font-light leading-relaxed">
                We are developing new ergonomic clips, charging cases, and straps for AlignPod.
              </p>
              <Link
                to="/contact"
                className="mt-5 text-xs font-mono text-[#111111] hover:text-black font-semibold underline underline-offset-4"
              >
                Request an accessory →
              </Link>
            </div>

          </div>

          {/* Bright Store Trust / Guarantees Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs text-center sm:text-left">
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#111111]">Free Express Shipping</h4>
                <p className="text-xs text-[#6B7280] font-light">Dispatched within 24-48 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#111111]">Official 1-Year Warranty</h4>
                <p className="text-xs text-[#6B7280] font-light">100% genuine AlignPod hardware</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#111111]">7-Day Easy Replacement</h4>
                <p className="text-xs text-[#6B7280] font-light">Hassle-free customer support</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
