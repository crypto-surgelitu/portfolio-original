"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const challenges = [
  {
    icon: "calendar_month",
    title: "Manual Scheduling",
    description: "Outdated paper-based logs leading to double bookings and administrative overhead.",
    impact: "High Administrative Overhead",
    image: "/assets/bs1-manual.webp",
    alt: "Conceptual visualization of a manual paper-based booking log being replaced by a digital system.",
  },
  {
    icon: "event_busy",
    title: "Booking Conflicts",
    description: "Lack of real-time visibility into room availability causing friction for community members.",
    impact: "Community Friction",
    image: "/assets/bs1-conflicts.webp",
    alt: "Conceptual visualization of a booking conflict error being resolved into a streamlined digital workflow.",
  },
  {
    icon: "analytics",
    title: "Resource Tracking",
    description: "Difficulty in monitoring space utilization and planning for future hub expansion.",
    impact: "Inefficient Space Utilization",
    image: "/assets/bs1-tracking.webp",
    alt: "Conceptual 3D visualization of resource tracking and space utilization analytics.",
  },
];

function ChallengeCard({
  challenge,
  index,
}: {
  challenge: (typeof challenges)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="flex-none w-[85vw] md:w-[450px] snap-start group relative bg-surface-elevated border border-border-subtle hover:border-primary-container transition-all duration-500 overflow-hidden rounded-xl"
    >
      <div className="h-64 relative overflow-hidden">
        <Image
          alt={challenge.alt}
          src={challenge.image}
          width={450}
          height={256}
          className="w-full h-full object-cover hover-grayscale transition-all duration-700 scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent opacity-60" />
      </div>
      <div className="p-8 relative z-10">
        <span className="material-symbols-outlined text-primary mb-4 text-4xl">
          {challenge.icon}
        </span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
          {challenge.title}
        </h3>
        <p className="font-body-md text-body-md text-text-muted mb-6">
          {challenge.description}
        </p>
        <div className="pt-4 border-t border-border-subtle">
          <span className="text-primary font-label-caps text-label-caps uppercase">
            Operational Impact
          </span>
          <p className="text-on-surface font-body-md text-body-md mt-1">
            {challenge.impact}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ChallengeSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-surface py-section-v-mobile md:py-section-v border-y border-border-subtle"
    >
      <div className="max-w-container-preferred mx-auto px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-stack-md">
            The Challenge
          </h2>
          <p className="font-body-lg text-body-lg text-text-muted max-w-3xl">
            Enterprise clients were struggling with data silos across multiple locations. Inconsistent reporting and manual reconciliation were costing the business significant operational leakage.
          </p>
        </motion.div>

        <div className="relative group/scroll">
          <div
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {challenges.map((c, i) => (
              <ChallengeCard key={c.title} challenge={c} index={i} />
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-surface-container-highest relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-primary w-1/3 transition-all duration-500 rounded-full" />
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Scroll left"
                className="p-2 border border-border-subtle hover:border-primary rounded-full text-on-surface-variant hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-sm select-none">arrow_back</span>
              </button>
              <button
                aria-label="Scroll right"
                className="p-2 border border-border-subtle hover:border-primary rounded-full text-on-surface-variant hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
