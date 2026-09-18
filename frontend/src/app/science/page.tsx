import type { Metadata } from "next";
import ScienceContent from "./ScienceContent";

export const metadata: Metadata = {
  title: "Posture Science | The Science Behind AlignPod",
  description:
    "Learn the science behind posture awareness, sitting habits, ergonomic behavior, and how AlignPod supports posture improvement.",
  alternates: {
    canonical: "https://www.aligneye.com/science",
  },
  openGraph: {
    title: "Posture Science | The Science Behind AlignPod",
    description:
      "Learn the science behind posture awareness, sitting habits, ergonomic behavior, and how AlignPod supports posture improvement.",
    url: "https://www.aligneye.com/science",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posture Science | The Science Behind AlignPod",
    description:
      "Learn the science behind posture awareness, sitting habits, ergonomic behavior, and how AlignPod supports posture improvement.",
  },
};

export default function SciencePage() {
  return <ScienceContent />;
}
