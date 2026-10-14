import type { Metadata } from "next";
import ProductContent from "./ProductContent";

export const metadata: Metadata = {
  title: "AlignPod Features | Smart Wearable Posture Trainer",
  description:
    "Explore AlignPod features including posture tracking, vibration reminders, training modes, therapy support, and wearable comfort.",
  alternates: {
    canonical: "https://www.aligneye.com/product",
  },
  openGraph: {
    title: "AlignPod Features | Smart Wearable Posture Trainer",
    description:
      "Explore AlignPod features including posture tracking, vibration reminders, training modes, therapy support, and wearable comfort.",
    url: "https://www.aligneye.com/product",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlignPod Features | Smart Wearable Posture Trainer",
    description:
      "Explore AlignPod features including posture tracking, vibration reminders, training modes, therapy support, and wearable comfort.",
  },
};

export default function ProductPage() {
  return <ProductContent />;
}
