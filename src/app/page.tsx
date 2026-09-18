import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "AlignPod | AI Smart Posture Corrector by AlignEye",
  description:
    "AlignPod by AlignEye is a smart posture corrector that helps improve sitting habits with AI posture analysis, real-time tracking, and gentle reminders.",
  alternates: {
    canonical: "https://www.aligneye.com/",
  },
  openGraph: {
    title: "AlignPod | AI Smart Posture Corrector by AlignEye",
    description:
      "AlignPod by AlignEye is a smart posture corrector that helps improve sitting habits with AI posture analysis, real-time tracking, and gentle reminders.",
    url: "https://www.aligneye.com/",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlignPod | AI Smart Posture Corrector by AlignEye",
    description:
      "AlignPod by AlignEye is a smart posture corrector that helps improve sitting habits with AI posture analysis, real-time tracking, and gentle reminders.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
