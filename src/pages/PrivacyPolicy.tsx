import { Navbar} from "../components/Navbar";
import { Footer } from "../components/Footer";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "This Privacy Policy explains how AlignEye Vision Private Limited collects, uses, stores, and protects your information when you use the AlignPod website, mobile application, wearable device, AI posture analysis tools, and related services.",
      "By using AlignPod, you agree to the practices described in this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We may collect information such as your name, email address, phone number, device information, app usage data, support messages, purchase details, and information you voluntarily provide through forms.",
      "When you use AlignPod features, we may also collect posture-related data such as calibration profiles, training sessions, therapy sessions, posture angle readings, device preferences, and app interaction data.",
    ],
  },
  {
    title: "3. Posture and Wellness Data",
    body: [
      "AlignPod is designed to support posture awareness and wellness habits. Posture data may be used to provide personalized insights, improve tracking accuracy, and enhance your experience across the device and companion app.",
      "This information is used for wellness support only and should not be considered medical information or medical advice.",
    ],
  },
  {
    title: "4. AI Posture Analysis",
    body: [
      "If you choose to upload or capture an image for AI posture analysis, the image may be processed to generate posture awareness feedback.",
      "Uploaded images are used only to provide the requested analysis and are not used for advertising. We recommend avoiding images that contain sensitive personal details unless required for posture analysis.",
    ],
  },
  {
    title: "5. Device and Bluetooth Information",
    body: [
      "When connecting the AlignPod device to the companion app, we may process Bluetooth connection details, device status, battery level, firmware version, calibration status, mode settings, and diagnostic information.",
      "This helps ensure device functionality, improve reliability, and support troubleshooting.",
    ],
  },
  {
    title: "6. How We Use Information",
    body: [
      "We use collected information to provide our services, personalize posture insights, improve device performance, process support requests, maintain security, analyze product usage, improve our website and app, and comply with applicable legal obligations.",
      "We may also use limited information to send important product updates, service notices, and support communication.",
    ],
  },
  {
    title: "7. Cookies and Analytics",
    body: [
      "Our website may use cookies and similar technologies to improve performance, remember preferences, analyze traffic, and understand how visitors interact with our website.",
      "You can manage or disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.",
    ],
  },
  {
    title: "8. Sharing of Information",
    body: [
      "We do not sell your personal information.",
      "We may share limited information with trusted service providers such as hosting providers, analytics tools, payment processors, shipping partners, customer support tools, and technology vendors who help us operate our services.",
      "These providers are expected to protect your information and use it only for authorized purposes.",
    ],
  },
  {
    title: "9. Data Security",
    body: [
      "We use reasonable technical, administrative, and organizational measures to protect your information from unauthorized access, misuse, loss, alteration, or disclosure.",
      "However, no digital service can guarantee complete security. Users should also take care to protect account credentials and device access.",
    ],
  },
  {
    title: "10. Data Retention",
    body: [
      "We retain information only for as long as necessary to provide services, improve our products, resolve disputes, comply with legal obligations, and maintain business records.",
      "You may request deletion of your personal information where applicable, subject to legal, security, or operational requirements.",
    ],
  },
  {
    title: "11. Your Rights",
    body: [
      "Depending on applicable law, you may have the right to access, correct, update, delete, or request a copy of your personal information.",
      "You may also request that we stop using certain information where consent is required. To exercise these rights, contact us using the details provided below.",
    ],
  },
  {
    title: "12. Children’s Privacy",
    body: [
      "AlignPod is not intended for unsupervised use by children under the applicable legal age. We do not knowingly collect personal information from children without appropriate parental or guardian consent.",
      "If you believe a child has provided personal information to us, please contact us so we can take appropriate action.",
    ],
  },
  {
    title: "13. Third-Party Services",
    body: [
      "Our website, app, or services may include links to third-party websites, tools, payment providers, analytics services, or external platforms.",
      "We are not responsible for the privacy practices, security, or content of third-party services. Please review their privacy policies separately.",
    ],
  },
  {
    title: "14. Medical and Wellness Disclaimer",
    body: [
      "AlignPod is designed for posture awareness, habit building, wellness support, and comfort-focused vibration sessions.",
      "AlignPod is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or medical condition.",
      "AI posture analysis and therapy-related feedback are informational only and should not replace professional medical advice. If you have pain, injury, or a medical condition, consult a qualified healthcare professional.",
    ],
  },
  {
    title: "15. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.",
      "We encourage users to review this page periodically to stay informed about how we protect information.",
    ],
  },
  {
    title: "16. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how your information is handled, you may contact us at:",
      "AlignEye Vision Private Limited",
      "Email: harshit@aligneye.com",
      "Website: https://www.aligneye.com",
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-[#F8F8F6] pt-28 px-6">
      <section className="max-w-5xl mx-auto py-16 lg:py-24">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.25em] uppercase text-gray-500 mb-4">
            Legal
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold text-[#111111] mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We value your privacy and believe your posture and wellness data should be handled with care, transparency, and responsibility.
          </p>

          <p className="text-sm text-gray-500 mt-6">
            Last Updated: July 2026
          </p>
        </div>

        <div className="bg-white rounded-[36px] border border-gray-200 shadow-sm p-6 md:p-12 lg:p-14">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111111] mb-4">
                  {section.title}
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                  {section.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-[28px] bg-[#F8F8F6] border border-gray-200 p-6 md:p-8">
            <p className="text-sm text-gray-500 leading-relaxed">
              Note: This Privacy Policy is intended to provide general transparency for AlignPod users. It should be reviewed by a qualified legal professional before commercial launch, app store submission, or large-scale data collection.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
    