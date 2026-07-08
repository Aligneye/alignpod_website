import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

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

      <main className="min-h-screen bg-white pt-28 px-6">
        <section className="max-w-5xl mx-auto py-16 lg:py-24">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.25em] uppercase text-gray-500 mb-4">
              Order AlignPod
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold text-[#111111] mb-6">
              Buy AlignPod
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill in your details and our team will contact you to confirm availability, pricing, payment, and delivery.
            </p>
          </div>

          <div className="bg-white rounded-[36px] border border-gray-200 shadow-sm p-8 md:p-12">
            {status === "success" ? (
              <div className="text-center py-12">
                <h2 className="text-3xl font-semibold text-[#111111] mb-4">
                  Order Request Received
                </h2>
                <p className="text-gray-600">
                  Thank you. Our team will contact you shortly to confirm your AlignPod order.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required name="name" placeholder="Full Name" className="bg-[#F8F8F6] border border-gray-200 rounded-2xl px-6 py-4 placeholder:text-gray-800 text-black" />
                <input required name="email" type="email" placeholder="Email Address" className="bg-[#F8F8F6] border border-gray-200 rounded-2xl px-6 py-4 placeholder:text-gray-800 text-black" />
                <input required name="phone" type="tel" placeholder="Phone Number" className="bg-[#F8F8F6] border border-gray-200 rounded-2xl px-6 py-4 placeholder:text-gray-800 text-black" />
                <input name="quantity" type="number" min="1"  placeholder="Quantity" className="bg-[#F8F8F6] border border-gray-200 rounded-2xl px-6 py-4 placeholder:text-gray-800 text-black" />

                <textarea
                  required
                  name="address"
                  placeholder="Delivery Address"
                  rows={4}
                  className="md:col-span-2 bg-[#F8F8F6] border border-gray-200 rounded-2xl px-6 py-4 resize-none placeholder:text-gray-800 text-black"
                />

                <textarea
                  name="message"
                  placeholder="Any note or special requirement?"
                  rows={4}
                  className="md:col-span-2 bg-[#F8F8F6] border border-gray-200 rounded-2xl px-6 py-4 resize-none placeholder:text-gray-800 text-black"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="md:col-span-2 rounded-full bg-[#111111] text-white px-8 py-4 font-semibold hover:bg-black transition"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Order Request"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}