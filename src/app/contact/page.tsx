import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact AlignEye | AlignPod Support",
  description:
    "Contact AlignEye for AlignPod product information, demos, pricing, support, partnerships, and business enquiries.",
  alternates: {
    canonical: "https://www.aligneye.com/contact",
  },
  openGraph: {
    title: "Contact AlignEye | AlignPod Support",
    description:
      "Contact AlignEye for AlignPod product information, demos, pricing, support, partnerships, and business enquiries.",
    url: "https://www.aligneye.com/contact",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AlignEye | AlignPod Support",
    description:
      "Contact AlignEye for AlignPod product information, demos, pricing, support, partnerships, and business enquiries.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
