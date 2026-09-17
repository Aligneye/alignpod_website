import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  ArrowLeft,
  ChevronRight,
  Magnet,
  Feather,
  Droplets,
  Package,
  Sparkles,
  ShoppingBag
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { trackEvent } from "../utils/analytics";
import { getAccessoryByHandle, accessoriesCatalog } from "../data/accessories";

export default function AccessoryProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const product = getAccessoryByHandle(handle || "magnetic-collar");

  // Fallback to first product or redirect if invalid handle
  if (!product) {
    return <Navigate to="/accessories" replace />;
  }

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.title || "Matte Black");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"features" | "specs" | "box">("features");

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <>
      <SEO
        title={`${product.title} | AlignPod Official Accessory`}
        description={product.subtitle}
        canonical={`https://www.aligneye.com/accessories/${product.handle}`}
      />

      <Navbar />

      <main className="min-h-screen bg-[#F8F8F6] text-[#111111] pt-28 sm:pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#6B7280] mb-8 sm:mb-10">
            <Link to="/" className="hover:text-[#111111] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#9CA3AF]" />
            <Link to="/accessories" className="hover:text-[#111111] transition-colors">Accessories</Link>
            <ChevronRight className="w-3 h-3 text-[#9CA3AF]" />
            <span className="text-[#111111] font-semibold">{product.title}</span>
          </nav>

          {/* Main PDP Grid: Gallery on Left, Product Buy Box on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
            
            {/* Left Column: Product Visuals */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative aspect-square w-full rounded-3xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center p-8 sm:p-12 overflow-hidden group">
                {product.badge && (
                  <span className="absolute top-6 left-6 z-10 text-xs font-mono font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-[#111111] text-white shadow-xs">
                    {product.badge}
                  </span>
                )}

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                <span className="absolute bottom-6 left-6 text-[11px] font-mono text-[#6B7280] bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-1 rounded-full">
                  {product.compatibility}
                </span>
              </div>

              {/* Thumbnail Gallery Row */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-2xl bg-white border-2 border-[#111111] p-3 flex items-center justify-center cursor-pointer shadow-2xs"
                  >
                    <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: E-Commerce Buy Box */}
            <div className="lg:col-span-5 flex flex-col bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
              
              {/* Category & Title */}
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B7280] font-semibold mb-2 block">
                Official Hardware Accessory
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#111111] mb-2 tracking-tight">
                {product.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed mb-6">
                {product.subtitle}
              </p>

              {/* Pricing & Stock Status */}
              <div className="flex items-baseline justify-between pb-6 border-b border-[#E5E7EB] mb-6">
                <div>
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#111111]">
                    {product.currency}{product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="block text-[11px] text-[#6B7280] mt-0.5">
                    Inclusive of all taxes · Free delivery
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>In Stock</span>
                </div>
              </div>

              {/* Color Variant Selector */}
              <div className="mb-6">
                <label className="block text-xs font-mono tracking-wider uppercase text-[#4B5563] mb-2 font-medium">
                  Color Finish: <span className="text-[#111111] font-semibold">{selectedVariant}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v.title)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                        selectedVariant === v.title
                          ? "bg-[#111111] text-white border-[#111111] shadow-xs font-medium"
                          : "bg-white text-[#4B5563] border-[#E5E7EB] hover:border-gray-400"
                      }`}
                    >
                      {v.colorHex && (
                        <span
                          className="w-3 h-3 rounded-full border border-white/20"
                          style={{ backgroundColor: v.colorHex }}
                        />
                      )}
                      <span>{v.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-xs font-mono tracking-wider uppercase text-[#4B5563] mb-2 font-medium">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center border border-[#E5E7EB] rounded-full bg-[#F9FAFB] p-1">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold hover:bg-white text-[#111111] transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-mono font-semibold text-[#111111]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={handleIncrement}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold hover:bg-white text-[#111111] transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs font-mono text-[#6B7280]">Max 5 units per order</span>
                </div>
              </div>

              {/* CTAs: Buy Now + Add to Bag (Medusa Ready) */}
              <div className="flex flex-col gap-3 mb-8">
                <Link
                  to={`/buy-now?item=${product.handle}&color=${encodeURIComponent(selectedVariant)}&qty=${quantity}`}
                  onClick={() =>
                    trackEvent("buy_now_clicked", {
                      product: product.handle,
                      variant: selectedVariant,
                      quantity,
                    })
                  }
                  className="w-full py-4 px-6 rounded-full bg-[#111111] text-white text-center font-semibold text-sm hover:bg-black active:scale-[0.99] transition-all shadow-md cursor-pointer"
                >
                  Buy Now · {product.currency}{(product.price * quantity).toLocaleString("en-IN")}
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    alert(`${quantity}x ${product.title} (${selectedVariant}) selected! Ready for Medusa Cart integration.`);
                    trackEvent("add_to_cart", {
                      product: product.handle,
                      variant: selectedVariant,
                      quantity,
                    });
                  }}
                  className="w-full py-3.5 px-6 rounded-full border border-[#111111] text-[#111111] text-center font-semibold text-sm hover:bg-gray-50 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
              </div>

              {/* Guarantees List */}
              <div className="space-y-3 pt-6 border-t border-[#E5E7EB] text-xs text-[#4B5563]">
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Free Express Delivery (2–4 business days)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>1-Year Official Hardware Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>7-Day Replacement Guarantee</span>
                </div>
              </div>

            </div>

          </div>

          {/* Structured Information Tabs (Features / Specs / In the Box) */}
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-xs mb-16">
            <div className="flex items-center gap-4 sm:gap-8 border-b border-[#E5E7EB] pb-4 mb-8 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("features")}
                className={`text-sm font-semibold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "features"
                    ? "border-[#111111] text-[#111111]"
                    : "border-transparent text-[#6B7280] hover:text-[#111111]"
                }`}
              >
                Key Features & Benefits
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("specs")}
                className={`text-sm font-semibold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "specs"
                    ? "border-[#111111] text-[#111111]"
                    : "border-transparent text-[#6B7280] hover:text-[#111111]"
                }`}
              >
                Technical Specifications
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("box")}
                className={`text-sm font-semibold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "box"
                    ? "border-[#111111] text-[#111111]"
                    : "border-transparent text-[#6B7280] hover:text-[#111111]"
                }`}
              >
                What's in the Box
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB]">
                    <div className="w-7 h-7 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-[#374151] font-light leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "specs" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B7280] block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-[#111111] block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "box" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] space-y-2">
                  <Package className="w-6 h-6 text-[#111111]" />
                  <h4 className="text-sm font-semibold text-[#111111]">1x Magnetic Collar</h4>
                  <p className="text-xs text-[#6B7280] font-light">With integrated dual N52 neodymium magnetic clasp</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] space-y-2">
                  <ShieldCheck className="w-6 h-6 text-[#111111]" />
                  <h4 className="text-sm font-semibold text-[#111111]">1x Quick Start & Sizing Guide</h4>
                  <p className="text-xs text-[#6B7280] font-light">Instructions on attachment, cleaning, and maintenance</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] space-y-2">
                  <Sparkles className="w-6 h-6 text-[#111111]" />
                  <h4 className="text-sm font-semibold text-[#111111]">Official Warranty Card</h4>
                  <p className="text-xs text-[#6B7280] font-light">1-Year manufacturer replacement guarantee</p>
                </div>
              </div>
            )}
          </div>

          {/* Back to Catalog Link */}
          <div className="text-center">
            <Link
              to="/accessories"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B7280] hover:text-[#111111] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all accessories</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
