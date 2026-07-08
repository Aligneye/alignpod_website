import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { SectionHeading, BodyText } from "./ui/Typography";

import GLA from "../assets/GLA.jpeg";
import IITM from "../assets/IITM.jpeg";
import meit from "../assets/meitY.jpeg";
import pu from "../assets/PU.jpeg";
import PUIC from "../assets/PUIC.jpeg";
import bihar from "../assets/startbihar.jpeg";
import stpi from "../assets/STPI.jpeg";

const organizations = [
  {
    name: "MeitY Startup Hub",
    logo: meit,
    category: "Innovation Hub",
    url: "https://msh.meity.gov.in/",
    alt: "MeitY startup image",
  },
  {
    name: "IIT Mandi Catalyst",
    logo: IITM,
    category: "Technology Business Incubator",
    url: "https://iitmandicatalyst.in/",
    alt: "IIT Mandi image",
  },
  {
    name: "SPARKL – GLA Technology Business Incubator",
    logo: GLA,
    category: "Technology Business Incubator",
    url: "https://www.sparklgla.com/",
    alt: "SPARKL GLA image",
  },
  {
    name: "Panjab University",
    logo: pu,
    category: "University",
    url: "https://puchd.ac.in/",
    alt: "PU image",
  },
  {
    name: "Panjab University Incubation Centre",
    logo: PUIC,
    category: "Incubation Centre",
    url: "https://eei.puchd-ac.in/",
    alt: "PUIC image",
  },
  {
    name: "Startup Bihar",
    logo: bihar,
    category: "Startup Mission",
    url: "https://startup.bihar.gov.in/",
    alt: "startup Bihar image",
  },
  {
    name: "STPI MedTech Centre of Excellence Lucknow",
    logo: stpi,
    category: "Centre of Excellence",
    url: "https://medtech.stpi.in/",
    alt: "STPI image",
  },
];

const extendedOrganizations = [
  ...organizations,
  ...organizations,
  ...organizations,
];

function useMeasure() {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    observer.observe(ref.current);
    setWidth(ref.current.getBoundingClientRect().width);

    return () => observer.disconnect();
  }, []);

  return [ref, width] as const;
}

export function BackedByVisionaries() {
  const [containerRef, width] = useMeasure();
  const [currentIndex, setCurrentIndex] = useState(organizations.length);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || width === 0) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, width]);

  const handleAnimationComplete = () => {
    if (currentIndex >= organizations.length * 2) {
      setIsAnimating(false);
      setCurrentIndex(currentIndex - organizations.length);
    } else if (currentIndex < organizations.length) {
      setIsAnimating(false);
      setCurrentIndex(currentIndex + organizations.length);
    }
  };

  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setCurrentIndex(organizations.length + index);
  };

  const handleDragEnd = (_e: unknown, { offset }: { offset: { x: number } }) => {
    const swipe = offset.x;

    if (swipe < -50) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    } else if (swipe > 50) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  let cardsToShow = 1;
  let gap = 16;

  if (width >= 1024) {
    cardsToShow = 3;
    gap = 32;
  } else if (width >= 768) {
    cardsToShow = 2;
    gap = 24;
  }

  const itemWidth =
    width > 0 ? Math.max(0, (width - (cardsToShow - 1) * gap) / cardsToShow) : 0;

  const scrollDistance = itemWidth + gap;
  const xOffset = -(currentIndex * scrollDistance);

  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase mb-4"
          >
            OUR ECOSYSTEM
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <SectionHeading className="text-[#111111] mb-6">
              Backed by Visionaries.
            </SectionHeading>

            <BodyText className="text-[#6B7280]">
              Align is proud to be supported by leading incubators, startup
              missions, innovation hubs, and academic institutions that
              encourage innovation, entrepreneurship, and healthcare technology.
            </BodyText>
          </motion.div>
        </div>

        <div
          className="w-full relative"
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {width > 0 && (
            <motion.div
              className="flex"
              style={{ gap: `${gap}px` }}
              animate={{ x: xOffset }}
              transition={
                isAnimating
                  ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 0 }
              }
              onAnimationComplete={handleAnimationComplete}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {extendedOrganizations.map((org, index) => (
                <motion.a
                  key={`${org.name}-${index}`}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-500 ease-out flex flex-col items-center justify-between p-8 sm:p-10 text-center h-[300px] shrink-0 cursor-pointer"
                  style={{ width: itemWidth }}
                >
                  <div className="h-24 w-full flex items-center justify-center mb-6">
                    <img
                    src={org.logo}
                    alt={org.name}
                    className="max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:scale-105"
                    draggable="false"
/>
                  </div>

                  <div className="flex flex-col items-center gap-2 mt-auto">
                    <h4 className="text-[1.1rem] sm:text-lg font-semibold text-[#111111] leading-tight">
                      {org.name}
                    </h4>

                    <p className="text-xs sm:text-sm font-medium text-[#9CA3AF] uppercase tracking-wider">
                      {org.category}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {organizations.map((_, idx) => {
              const isActive = idx === currentIndex % organizations.length;

              return (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-8 bg-[#111111]"
                      : "w-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>

          <p className="text-sm font-medium text-[#6B7280]">
            Trusted innovation partners supporting Align.
          </p>
        </div>
      </div>
    </section>
  );
}