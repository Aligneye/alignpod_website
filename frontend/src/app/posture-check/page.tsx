import type { Metadata } from "next";
import PostureCheckContent from "./PostureCheckContent";

export const metadata: Metadata = {
  title: "Free AI Posture Checker | Analyze Your Posture Online",
  description:
    "Use AlignPod's free AI posture checker to analyze your posture from a photo and receive awareness-based posture feedback online.",
  alternates: {
    canonical: "https://www.aligneye.com/posture-check",
  },
  openGraph: {
    title: "Free AI Posture Checker | Analyze Your Posture Online",
    description:
      "Use AlignPod's free AI posture checker to analyze your posture from a photo and receive awareness-based posture feedback online.",
    url: "https://www.aligneye.com/posture-check",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Posture Checker | Analyze Your Posture Online",
    description:
      "Use AlignPod's free AI posture checker to analyze your posture from a photo and receive awareness-based posture feedback online.",
  },
};

export default function PostureCheckPage() {
  return <PostureCheckContent />;
}
