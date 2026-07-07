import { useEffect, useState } from "react";

export function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzESJu5GE-YPZAnmDpKiqY_wifhaG6uuZ6t6LMXfII2ptV7mTDESrTo1fSEAoUQuvaU/exec";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem("leadPopupSubmitted")) {
        setShowPopup(true);
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
      source: "Website Popup",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      setSubmitted(true);
      localStorage.setItem("leadPopupSubmitted", "true");
      form.reset();

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

return (
  <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center px-4">
    <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0f] text-white shadow-2xl">
      
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center transition"
      >
        ×
      </button>

      {!submitted ? (
        <div className="relative z-10 p-7 sm:p-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-5">
            AlignEye Support
          </div>

          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Improve your sitting habits with AlignEye Pod
          </h2>

          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Share your details and our team will help you with product demo,
            pricing, and availability.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:bg-white/10 transition"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:bg-white/10 transition"
            />

            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone number"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:bg-white/10 transition"
            />

            <textarea
              name="message"
              placeholder="What would you like to know?"
              rows={3}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:bg-white/10 transition"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-white text-black py-3.5 font-semibold hover:bg-white/90 disabled:opacity-60 transition"
            >
              {isSubmitting ? "Submitting..." : "Get in Touch"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-white/35">
            We usually respond within 24 hours.
          </p>
        </div>
      ) : (
        <div className="relative z-10 p-10 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black text-2xl">
            ✓
          </div>

          <h2 className="text-3xl font-semibold mb-3">Thank you!</h2>

          <p className="text-white/60">
            Your details have been submitted successfully.
          </p>
        </div>
      )}
    </div>
  </div>
);
}