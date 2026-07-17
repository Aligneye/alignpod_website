import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import { FormInput, FormTextarea } from "../components/ui/FormInput";

export function BuyNow() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("submitting");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    quantity: formData.get("quantity") || "1",
    address: formData.get("address"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/order.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      setStatus("success");
      trackEvent("buy_now_form_submitted");
      form.reset();
    } else {
      alert(result.message || "Order could not be submitted.");
      setStatus("idle");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
    setStatus("idle");
  }
};

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F8F6] pt-32 pb-24 px-6">
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6">
              Order AlignPod
            </span>

            <h1 className="heading-hero text-[#111111] mb-6">
              Buy AlignPod
            </h1>

            <p className="text-body text-[#6B7280] max-w-2xl mx-auto">
              Fill in your details and our team will contact you to confirm availability, pricing, payment, and delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-[32px] sm:rounded-[40px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-10 lg:p-12"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center text-center py-8 sm:py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6"
                  >
                    <Check className="w-10 h-10 text-emerald-500" strokeWidth={2} />
                  </motion.div>
                  <h2 className="heading-card text-[#111111] mb-4">
                    Order Request Received
                  </h2>
                  <p className="text-[#6B7280] text-lg max-w-md mb-10">
                    Thank you. Our team will contact you shortly to confirm your AlignPod order.
                  </p>
                  <Link to="/" className="btn-secondary-light">
                    Back to Homepage
                  </Link>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <FormInput required name="name" label="Full Name" placeholder="John Doe" />
                  <FormInput required name="email" type="email" label="Email Address" placeholder="john@example.com" />
                  <FormInput required name="phone" type="tel" label="Phone Number" placeholder="+1 (555) 000-0000" />
                  <FormInput name="quantity" type="number" min="1" label="Quantity" placeholder="1" />

                  <div className="md:col-span-2">
                    <FormTextarea required name="address" label="Delivery Address" rows={4} placeholder="Street, city, state, ZIP" />
                  </div>

                  <div className="md:col-span-2">
                    <FormTextarea name="message" label="Any note or special requirement? (Optional)" rows={4} placeholder="Let us know if there's anything else we should know" />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="md:col-span-2 btn-primary-light flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full"
                      />
                    ) : (
                      "Submit Order Request"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
