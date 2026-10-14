import wearDevice from "../assets/wear-device.jpeg";
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

const toSrc = (val: unknown) => (typeof val === "string" ? val : (val as { src: string }).src);

export const howItWorksSteps: Step[] = [
  {
    num: "01",
    title: "Wear AlignPod",
    desc: "Simply attach AlignPod to your upper back before starting work, studying, or daily activities.",
    img: toSrc(wearDevice),
    alt: "AlignPod product visual",
  },
  {
    num: "02",
    title: "Calibrate",
    desc: "In just a few seconds, AlignPod learns your natural upright posture for personalized tracking.",
    img: toSrc(calibrate),
    alt: "Abstract representation of smart calibration",
  },
  {
    num: "03",
    title: "Real-Time Guidance",
    desc: "The device continuously tracks posture and provides gentle vibration reminders whenever slouching is detected.",
    img: toSrc(realTime),
    alt: "Person sitting at a desk with good posture",
  },
  {
    num: "04",
    title: "Track Progress",
    desc: "View your posture trends, improvements, and daily habits inside the companion mobile application.",
    img: toSrc(track),
    alt: "Smartphone showing health analytics UI",
  },
];