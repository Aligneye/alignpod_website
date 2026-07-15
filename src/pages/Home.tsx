import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WhyPostureMatters } from "../components/WhyPostureMatters";
import { MeetAlignPod } from "../components/MeetAlignPod";
import { HowItWorks } from "../components/HowItWorks";
import { CompanionApp } from "../components/CompanionApp";
import IntelligentModes from "../components/IntelligentModes";
import { EarlyUserFeedback } from "../components/EarlyUserFeedback";
import { FAQ } from "../components/FAQ";
import { BackedByVisionaries } from "../components/BackedByVisionaries";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <WhyPostureMatters />
      <MeetAlignPod />
      <HowItWorks />
      <IntelligentModes />
      <CompanionApp />
      <EarlyUserFeedback />
      <FinalCTA />
      <FAQ />
      <BackedByVisionaries />
      <Footer />
      
    </main>
  );
}
