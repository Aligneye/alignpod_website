import type { Metadata } from "next";
import WhyAlignPodContent from "./WhyAlignPodContent";

export const metadata: Metadata = {
  title: "Why AlignPod | Build Better Sitting Habits",
  description:
    "Discover how AlignPod helps improve posture awareness, reduce poor sitting habits, and support healthier daily routines through smart posture training.",
  alternates: {
    canonical: "https://www.aligneye.com/why-alignpod",
  },
  openGraph: {
    title: "Why AlignPod | Build Better Sitting Habits",
    description:
      "Discover how AlignPod helps improve posture awareness, reduce poor sitting habits, and support healthier daily routines through smart posture training.",
    url: "https://www.aligneye.com/why-alignpod",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why AlignPod | Build Better Sitting Habits",
    description:
      "Discover how AlignPod helps improve posture awareness, reduce poor sitting habits, and support healthier daily routines through smart posture training.",
  },
};

export default function WhyAlignPodPage() {
  return <WhyAlignPodContent />;
}
