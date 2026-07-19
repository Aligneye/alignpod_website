import { useEffect, useState } from "react";
import { trackEvent } from "../utils/analytics";
import { supabase } from "../lib/supabase";

export function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem("leadPopupSubmitted")) {
        setShowPopup(true);
        trackEvent("lead_popup_opened");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const { error } = await supabase.from("contact_requests").insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          question: data.message,
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
      localStorage.setItem("leadPopupSubmitted", "true");
      trackEvent("lead_popup_submitted");
      form.reset();

      setTimeout(() => {
        trackEvent("lead_popup_closed");
        setShowPopup(false);
      }, 2000);
    } catch (error) {
      console.error("Supabase insert error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

return (
  <div
    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center px-4 py-6"
    onClick={() => {
      trackEvent("lead_popup_closed", { method: "outside_click" });
      setShowPopup(false);
    }}
  >
    <div
      className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-[24px] border border-white/10 bg-[#0b0b0f] text-white shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => {
          trackEvent("lead_popup_closed", { method: "close_button" });
          setShowPopup(false);
        }}
        className="sticky top-4 ml-auto mr-4 mt-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center transition"
        aria-label="Close popup"
      >
        ×
      </button>

      {!submitted ? (
        <div className="relative z-10 p-6 sm:p-6 pt-2">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70 mb-5">
            Connect with us
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            Improve your sitting habits with AlignPod
          </h2>

          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Share your details and our team will help you with product demo,
            pricing, and availability.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:bg-white/10 transition"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:bg-white/10 transition"
            />

            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone number"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:bg-white/10 transition"
            />

            <textarea
              name="message"
              placeholder="What would you like to know?"
              rows={2}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:bg-white/10 transition"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-white text-black py-2.5 font-semibold hover:bg-white/90 disabled:opacity-60 transition"
            >
              {isSubmitting ? "Submitting..." : "Get in Touch"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-white/35">
            We usually respond within 24 hours.
          </p>
        </div>
      ) : (
        <div className="relative z-10 p-7 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black text-2xl">
            ✓
          </div>

          <h2 className="text-2xl font-semibold mb-3">Thank you!</h2>

          <p className="text-white/60">
            Your details have been submitted successfully.
          </p>
        </div>
      )}
    </div>
  </div>
);
}