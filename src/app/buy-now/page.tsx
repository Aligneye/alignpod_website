import type { Metadata } from "next";
import BuyNowContent from "./BuyNowContent";

export const metadata: Metadata = {
  title: "Buy AlignPod | Smart AI Posture Corrector",
  description:
    "Buy AlignPod, a smart wearable posture corrector designed to improve sitting habits with posture tracking and gentle reminders.",
  alternates: {
    canonical: "https://www.aligneye.com/buy-now",
  },
  openGraph: {
    title: "Buy AlignPod | Smart AI Posture Corrector",
    description:
      "Buy AlignPod, a smart wearable posture corrector designed to improve sitting habits with posture tracking and gentle reminders.",
    url: "https://www.aligneye.com/buy-now",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy AlignPod | Smart AI Posture Corrector",
    description:
      "Buy AlignPod, a smart wearable posture corrector designed to improve sitting habits with posture tracking and gentle reminders.",
  },
};

export default function BuyNowPage() {
  return <BuyNowContent />;
}
