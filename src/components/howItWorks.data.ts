import apfinal from "../assets/apfinal2.png";
import calibrate from "../assets/calibrate.png";
import realTime from "../assets/realtime-guide.png";
import track from "../assets/track-progress.png";

export interface Step {
  num: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export const howItWorksSteps: Step[] = [
  {
    num: "01",
    title: "Wear AlignPod",
    desc: "Simply attach AlignPod to your upper back before starting work, studying, or daily activities.",
    img: apfinal,          // ← Step 01's own image
    alt: "AlignPod product visual",
  },
  {
    num: "02",
    title: "Calibrate",
    desc: "In just a few seconds, AlignPod learns your natural upright posture for personalized tracking.",
    img: calibrate,         // ← Step 02's own image
    alt: "Abstract representation of smart calibration",
  },
  {
    num: "03",
    title: "Real-Time Guidance",
    desc: "The device continuously tracks posture and provides gentle vibration reminders whenever slouching is detected.",
    img: realTime,          // ← Step 03's own image
    alt: "Person sitting at a desk with good posture",
  },
  {
    num: "04",
    title: "Track Progress",
    desc: "View your posture trends, improvements, and daily habits inside the companion mobile application.",
    img: track,             // ← Step 04's own image
    alt: "Smartphone showing health analytics UI",
  },
];