/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhyAlignPod from "./pages/WhyAlignPod";
import Product from "./pages/Product";
import Science from "./pages/Science";
import Contact from "./pages/Contact";
import {PostureCheck } from "./pages/PostureCheck";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import {TermsOfUse} from "./pages/TermsOfUse";
import { BuyNow } from "./pages/BuyNow";
import { LeadPopup } from "./components/LeadPopup";
import { SEO } from "./components/SEO";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { MicrosoftClarity } from "./components/MicrosoftClarity";

export default function App() {
  return (
    <>
    <LeadPopup />
    <Router>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <Routes>
        <Route
  path="/"
  element={
    <>
      <SEO
        title="AlignPod | AI Smart Posture Corrector by AlignEye"
        description="AlignPod by AlignEye is a smart posture corrector that helps improve sitting habits with AI posture analysis, real-time tracking, and gentle reminders."
        canonical="https://www.aligneye.com/"
      />
      <Home />
    </>
  }
/>

<Route
  path="/why-alignpod"
  element={
    <>
      <SEO
        title="Why AlignPod | Build Better Sitting Habits"
        description="Discover how AlignPod helps improve posture awareness, reduce poor sitting habits, and support healthier daily routines through smart posture training."
        canonical="https://www.aligneye.com/why-alignpod"
      />
      <WhyAlignPod />
    </>
  }
/>

<Route
  path="/product"
  element={
    <>
      <SEO
        title="AlignPod Features | Smart Wearable Posture Trainer"
        description="Explore AlignPod features including posture tracking, vibration reminders, training modes, therapy support, and wearable comfort."
        canonical="https://www.aligneye.com/product"
      />
      <Product />
    </>
  }
 />

<Route
  path="/science"
  element={
    <>
      <SEO
        title="Posture Science | The Science Behind AlignPod"
        description="Learn the science behind posture awareness, sitting habits, ergonomic behavior, and how AlignPod supports posture improvement."
        canonical="https://www.aligneye.com/science"
      />
      <Science />
    </>
  }
/>

<Route
  path="/contact"
  element={
    <>
      <SEO
        title="Contact AlignEye | AlignPod Support"
        description="Contact AlignEye for AlignPod product information, demos, pricing, support, partnerships, and business enquiries."
        canonical="https://www.aligneye.com/contact"
      />
      <Contact />
    </>
  }
/>

<Route
  path="/posture-check"
  element={
    <>
      <SEO
        title="Free AI Posture Checker | Analyze Your Posture Online"
        description="Use AlignPod's free AI posture checker to analyze your posture from a photo and receive awareness-based posture feedback online."
        canonical="https://www.aligneye.com/posture-check"
      />
      <PostureCheck />
    </>
  }
/>

<Route
  path="/privacy-policy"
  element={
    <>
      <SEO
        title="Privacy Policy | AlignEye"
        description="Read the Privacy Policy for AlignEye and AlignPod, including how user data and website information are handled."
        canonical="https://www.aligneye.com/privacy-policy"
      />
      <PrivacyPolicy />
    </>
  }
/>

<Route
  path="/terms"
  element={
    <>
      <SEO
        title="Terms of Use | AlignEye"
        description="Read the Terms of Use for AlignEye and AlignPod website, services, and product-related information."
        canonical="https://www.aligneye.com/terms"
      />
      <TermsOfUse />
    </>
  }
/>

<Route
  path="/buy-now"
  element={
    <>
      <SEO
        title="Buy AlignPod | Smart AI Posture Corrector"
        description="Buy AlignPod, a smart wearable posture corrector designed to improve sitting habits with posture tracking and gentle reminders."
        canonical="https://www.aligneye.com/buy-now"
      />
      <BuyNow />
    </>
  }
/>
      </Routes>
    </Router>
    </>
  );
}
