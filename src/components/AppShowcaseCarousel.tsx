import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Wifi, SignalHigh, BatteryFull } from 'lucide-react';
import training from '../assets/training.jpeg';
import breathe from '../assets/breathe.jpeg';
import therapy from '../assets/therapy.jpeg';
import calibapp from '../assets/calibapp.jpeg';
import ble from '../assets/ble.jpeg';
import analytics from '../assets/analytics.jpeg';

type StatusBarTheme = 'dark' | 'light';

interface Screen {
  id: string;
  img: string;
  alt: string;
  bg: string;
  statusBar: StatusBarTheme;
}

const screens: Screen[] = [
  { id: 'training', img: training, alt: 'AlignPod app Training Mode screen with sensitivity and correction timing controls', bg: '#F7F6FB', statusBar: 'dark' },
  { id: 'breathing', img: breathe, alt: 'AlignPod app Breathing Mode screen with guided 4-2-6 breathing pattern', bg: '#F3F5FA', statusBar: 'dark' },
  { id: 'therapy', img: therapy, alt: 'AlignPod app Therapy Mode screen with acupressure vibration targeting', bg: '#FCEAF0', statusBar: 'dark' },
  { id: 'calibration', img: calibapp, alt: 'AlignPod app device calibration screen guiding the user to hold still', bg: '#0B0F14', statusBar: 'light' },
  { id: 'pod-connect', img: ble, alt: 'AlignPod app Bluetooth pod connection screen scanning for nearby pods', bg: '#F4F5FB', statusBar: 'dark' },
  { id: 'analytics', img: analytics, alt: 'AlignPod app Analytics and Insights screen with posture score trends', bg: '#F5F6F8', statusBar: 'dark' },
];

const AUTO_ROTATE_MS = 3500;
const RESUME_DELAY_MS = 5000;

function getSpacing() {
  if (typeof window === 'undefined') return 300;
  const w = window.innerWidth;
  if (w < 640) return 128;
  if (w < 1024) return 210;
  return 300;
}

function getCircularOffset(index: number, activeIndex: number, length: number) {
  let diff = index - activeIndex;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

function StatusBar({ theme }: { theme: StatusBarTheme }) {
  const color = theme === 'light' ? '#FFFFFF' : '#111111';
  return (
    <div
      className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-7 pt-3 h-11 pointer-events-none select-none"
      style={{ color }}
    >
      <span className="text-[13px] font-semibold tracking-tight">9:41</span>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl" />
      <div className="flex items-center gap-1">
        <SignalHigh className="w-3.5 h-3.5" strokeWidth={2.4} />
        <Wifi className="w-3.5 h-3.5" strokeWidth={2.4} />
        <BatteryFull className="w-4 h-4" strokeWidth={2} />
      </div>
    </div>
  );
}

function HomeIndicator({ theme }: { theme: StatusBarTheme }) {
  return (
    <div
      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 w-[100px] h-[4px] rounded-full pointer-events-none"
      style={{ backgroundColor: theme === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(17,17,17,0.85)' }}
    />
  );
}

export function AppShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [spacing, setSpacing] = useState(getSpacing);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const dragStartX = useRef<number | null>(null);
  const length = screens.length;

  useEffect(() => {
    const onResize = () => setSpacing(getSpacing());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [isPaused, length]);

  const pauseThenResume = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const goTo = useCallback(
    (nextIndex: number) => {
      setActiveIndex(((nextIndex % length) + length) % length);
      pauseThenResume();
    },
    [length, pauseThenResume]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragStartX.current = null;
    const threshold = 40;
    if (delta > threshold) {
      goPrev();
    } else if (delta < -threshold) {
      goNext();
    }
  };

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="relative h-[460px] sm:h-[560px] md:h-[620px] lg:h-[680px] w-full flex items-center justify-center touch-pan-y"
        style={{ perspective: '2000px' }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {screens.map((screen, index) => {
          const offset = getCircularOffset(index, activeIndex, length);
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;
          const visible = absOffset <= 2;

          const scale = isActive ? 1 : absOffset === 1 ? 0.78 : 0.6;
          const opacity = isActive ? 1 : absOffset === 1 ? 0.45 : 0.18;
          const rotateY = offset * -28;
          const x = offset * spacing;
          const z = isActive ? 0 : -140 * absOffset;

          return (
            <motion.div
              key={screen.id}
              className="absolute"
              style={{ transformStyle: 'preserve-3d', zIndex: length - absOffset, pointerEvents: isActive ? 'auto' : 'none' }}
              animate={{
                x,
                scale,
                opacity: visible ? opacity : 0,
                rotateY,
                z,
              }}
              initial={false}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={isActive ? { y: [-6, 6, -6] } : { y: 0 }}
                transition={isActive ? { repeat: Infinity, duration: 6, ease: 'easeInOut' } : { duration: 0.4 }}
                className="relative w-[220px] h-[460px] sm:w-[260px] sm:h-[540px] md:w-[280px] md:h-[590px] lg:w-[300px] lg:h-[640px] bg-white rounded-[40px] sm:rounded-[44px] lg:rounded-[48px] border-[6px] sm:border-[7px] lg:border-[8px] border-[#111111] overflow-hidden flex flex-col shrink-0"
                style={{
                  boxShadow: isActive
                    ? '0 50px 100px rgba(0,0,0,0.55), 0 10px 30px rgba(0,0,0,0.3)'
                    : '0 20px 40px rgba(0,0,0,0.35)',
                }}
              >
                <div className="absolute inset-0" style={{ backgroundColor: screen.bg }} />
                <StatusBar theme={screen.statusBar} />
                <img
                  src={screen.img}
                  alt={screen.alt}
                  className="relative w-full h-full object-cover object-top"
                  draggable={false}
                />
                <HomeIndicator theme={screen.statusBar} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Manual navigation */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous screen"
        className="absolute left-1 sm:left-2 lg:left-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next screen"
        className="absolute right-1 sm:right-2 lg:right-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5" strokeWidth={2} />
      </button>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            type="button"
            aria-label={`Go to ${screen.alt}`}
            onClick={() => goTo(index)}
            className="p-1.5"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/30'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
