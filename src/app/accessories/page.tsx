import type { Metadata } from "next";
import AccessoriesContent from "./AccessoriesContent";

export const metadata: Metadata = {
  title: "Accessories | Official AlignPod Store",
  description:
    "Shop official accessories, mounts, and essentials designed for your AlignPod smart posture tracker.",
  alternates: {
    canonical: "https://www.aligneye.com/accessories",
  },
  openGraph: {
    title: "Accessories | Official AlignPod Store",
    description:
      "Shop official accessories, mounts, and essentials designed for your AlignPod smart posture tracker.",
    url: "https://www.aligneye.com/accessories",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessories | Official AlignPod Store",
    description:
      "Shop official accessories, mounts, and essentials designed for your AlignPod smart posture tracker.",
  },
};

export default function AccessoriesPage() {
  return <AccessoriesContent />;
}
