import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use | AlignEye",
  description:
    "Read the Terms of Use for AlignEye and AlignPod website, services, and product-related information.",
  alternates: {
    canonical: "https://www.aligneye.com/terms",
  },
  openGraph: {
    title: "Terms of Use | AlignEye",
    description:
      "Read the Terms of Use for AlignEye and AlignPod website, services, and product-related information.",
    url: "https://www.aligneye.com/terms",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | AlignEye",
    description:
      "Read the Terms of Use for AlignEye and AlignPod website, services, and product-related information.",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
