import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LeadPopup } from "../components/LeadPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aligneye.com"),
  title: {
    default: "AlignEye Pod | AI Posture Corrector & Smart Posture Trainer",
    template: "%s | AlignEye",
  },
  description:
    "AlignEye Pod is a smart posture corrector that helps improve sitting habits with AI posture analysis, real-time tracking, gentle reminders, and posture training.",
  keywords: [
    "AlignEye Pod",
    "posture corrector",
    "smart posture corrector",
    "AI posture checker",
    "posture analysis",
    "posture trainer",
    "sitting posture",
    "neck posture",
    "back posture",
    "ergonomic posture device",
  ],
  authors: [{ name: "AlignEye Vision Private Limited" }],
  creator: "AlignEye Vision Private Limited",
  publisher: "AlignEye Vision Private Limited",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aligneye.com/",
    siteName: "AlignEye Pod",
    title: "AlignEye Pod | Smart AI Posture Corrector",
    description:
      "Improve sitting habits with AlignEye Pod — a smart wearable posture corrector with AI posture analysis, real-time monitoring, and gentle reminders.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AlignEye Pod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlignEye Pod | Smart AI Posture Corrector",
    description:
      "AI-powered posture analysis and smart posture training for healthier sitting habits.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/fevicon.png",
    apple: "/fevicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AlignEye Vision Private Limited",
    url: "https://www.aligneye.com",
    logo: "https://www.aligneye.com/fevicon.png",
    email: "support@aligneye.com",
    sameAs: [
      "https://www.linkedin.com/company/aligneye",
      "https://www.instagram.com/aligneye",
      "https://www.youtube.com/@aligneye",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AlignPod",
    url: "https://www.aligneye.com",
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased">
        <LeadPopup />
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GT9NNF5HRY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GT9NNF5HRY');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xj5ezuy0tw");
          `}
        </Script>
      </body>
    </html>
  );
}
