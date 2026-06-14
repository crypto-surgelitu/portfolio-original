"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useMotionValueEvent } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Review",
    description:
      "I review your inquiry within 24 hours to ensure alignment with our expertise.",
  },
  {
    number: "02",
    title: "Discovery Call / Physical Meeting",
    description:
      "A focused 30-minute consultation to map technical requirements and business outcomes. Physical meeting available if required or in the local area.",
  },
  {
    number: "03",
    title: "Formal Proposal",
    description:
      "Delivery of a comprehensive strategy document, timeline, and payment plan structure.",
  },
];

export default function EngagementTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeGlowIndex, setActiveGlowIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) setActiveGlowIndex(0);
    else if (latest < 0.66) setActiveGlowIndex(1);
    else setActiveGlowIndex(2);
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="lg:pl-8 border-t lg:border-t-0 lg:border-l border-border-subtle pt-8 lg:pt-0"
    >
      <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-lg">
        Engagement Process
      </h3>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border-subtle">
        {steps.map((step, index) => {
          const isHovered = hoveredIndex === index;
          const isCyclicGlow = index === activeGlowIndex && hoveredIndex === null;

          return (
            <div
              key={step.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group cursor-default transition-all duration-300 ${
                isHovered ? "opacity-100" : ""
              } ${index === 0 ? "is-active" : ""}`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#0B0B0B] transition-all duration-300 ${
                  isHovered || isCyclicGlow
                    ? "border-primary text-primary shadow-[0_0_20px_-3px_rgba(212,175,55,0.5)] bg-[#181818]"
                    : index === 0
                      ? "border-primary-container bg-[#181818] text-primary-container"
                      : "border-border-subtle bg-[#181818] text-text-muted"
                } ${isCyclicGlow ? "animate-pulse" : ""}`}
              >
                <span className="font-label-caps text-label-caps">
                  {step.number}
                </span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-4 md:ml-0 md:group-odd:text-right">
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {step.title}
                </h4>
                <p className="font-body-md text-body-md text-text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
