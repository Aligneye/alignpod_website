import type { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | AlignEye",
  description:
    "Read the Privacy Policy for AlignEye and AlignPod, including how user data and website information are handled.",
  alternates: {
    canonical: "https://www.aligneye.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | AlignEye",
    description:
      "Read the Privacy Policy for AlignEye and AlignPod, including how user data and website information are handled.",
    url: "https://www.aligneye.com/privacy-policy",
    siteName: "AlignPod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AlignEye",
    description:
      "Read the Privacy Policy for AlignEye and AlignPod, including how user data and website information are handled.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
