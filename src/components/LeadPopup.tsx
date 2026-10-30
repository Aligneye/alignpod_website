
import { useEffect, useState, useCallback } from "react";
import { ShoppingBag, ArrowRight, X, ShieldCheck } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import popupProductImage from "../assets/alignpod-popup.png";

const PRODUCT_URL =
  "https://shop.aligneye.com/product/alignpod/";

const DISMISS_KEY = "alignpodOfferDismissedAt";
const DISMISS_DAYS = 7;

export function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = useCallback((method: string) => {
    setShowPopup(false);

    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // Continue if storage is unavailable.
    }

    trackEvent("offer_popup_closed", { method });
  }, []);

  useEffect(() => {
    try {
      const dismissedAt = Number(
        localStorage.getItem(DISMISS_KEY) || 0
      );

      const cooldown =
        DISMISS_DAYS * 24 * 60 * 60 * 1000;

      if (
        dismissedAt &&
        Date.now() - dismissedAt < cooldown
      ) {
        return;
      }
    } catch {
      // Allow popup if storage is unavailable.
    }

    const timer = window.setTimeout(() => {
      setShowPopup(true);
      trackEvent("offer_popup_opened");
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showPopup) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup("escape_key");
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showPopup, closePopup]);

  const handleBuyNow = () => {
    trackEvent("offer_popup_buy_now_clicked", {
      location: "homepage_popup",
    });

    try {
      localStorage.setItem(
        DISMISS_KEY,
        String(Date.now())
      );
    } catch {
      // Navigation still works.
    }
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 py-5"
      onClick={() => closePopup("outside_click")}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="alignpod-offer-title"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[28px] border border-white/10 bg-[#0b0e12] text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => closePopup("close_button")}
          aria-label="Close offer"
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* ACTUAL ALIGNPOD PRODUCT IMAGE */}
          <div className="relative flex min-h-[220px] sm:min-h-[300px] items-center justify-center overflow-hidden bg-[#e8f2f3] md:min-h-[480px]">
            <img
              src={popupProductImage}
              alt="AlignPod smart posture wearable"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* OFFER CONTENT */}
          <div className="relative flex flex-col justify-center p-6 sm:p-9">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-teal-200">
              ALIGNPOD LAUNCH OFFER
            </div>

            <h2
              id="alignpod-offer-title"
              className="mb-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight"
            >
              Better posture
              <br />
              starts here.
            </h2>

            <p className="mb-6 text-sm sm:text-base leading-relaxed text-white/65">
              Meet AlignPod, your everyday posture companion.
              Build healthier sitting habits with gentle,
              real-time posture reminders.
            </p>

            {/* OFFER PRICE */}
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-white/50">
                Special Launch Price
              </p>

              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight">
                  ₹6,999
                </span>

                <span className="text-lg text-white/40 line-through">
                  ₹7,999
                </span>
              </div>

              <div className="mt-4 inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1.5 text-xs font-semibold text-teal-200">
                Save ₹1,000
              </div>
            </div>

            {/* BUY NOW BUTTON */}
            <a
              href={PRODUCT_URL}
              onClick={handleBuyNow}
              className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#087c80] px-6 py-4 text-base font-semibold text-white no-underline shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#0b9598] hover:text-white"
            >
              <ShoppingBag className="h-5 w-5" />
              Buy Now
              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-4 w-4 text-teal-300" />
              <span>Explore product details before checkout</span>
            </div>

            <button
              type="button"
              onClick={() => closePopup("not_now")}
              className="mt-5 w-full bg-transparent p-2 text-center text-sm text-white/45 transition hover:text-white/80"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
