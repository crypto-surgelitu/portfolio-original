"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const journeys = [
  {
    icon: "rocket_launch",
    title: "Launching a Vision",
    description:
      "You need a brand identity and MVP platform to secure funding and establish market presence.",
    linkLabel: "Explore Foundation Services",
    linkHref: "/contact",
    badge: null,
  },
  {
    icon: "trending_up",
    title: "Scaling Operations",
    description:
      "Your current systems are bottlenecking growth. You need a design overhaul to handle enterprise scale.",
    linkLabel: "Explore Enterprise Solutions",
    linkHref: "/contact",
    badge: "MOST COMMON",
  },
  {
    icon: "diamond",
    title: "Refining the Experience",
    description:
      "You have traction, but conversion is low. You need targeted UX optimization and luxury brand positioning.",
    linkLabel: "Explore Optimization",
    linkHref: "/contact",
    badge: null,
  },
];

function JourneyCard({
  journey,
  index,
}: {
  journey: (typeof journeys)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -6 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-surface-elevated border border-border-subtle rounded-xl p-8 flex flex-col h-full relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.35)] hover:ring-2 hover:ring-primary/40 ${
        journey.badge ? "ring-1 ring-primary/30" : ""
      }`}
    >
      {journey.badge && (
        <div className="absolute top-0 right-0 bg-primary text-on-primary font-label-caps text-[10px] px-3 py-1 rounded-bl-lg font-bold">
          {journey.badge}
        </div>
      )}
      <div className="h-12 w-12 rounded-full bg-surface-bright flex items-center justify-center mb-stack-md">
        <span className="material-symbols-outlined text-primary select-none">
          {journey.icon}
        </span>
      </div>
      <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
        {journey.title}
      </h4>
      <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
        {journey.description}
      </p>
      <Link
        href={journey.linkHref}
        className="text-primary font-button text-button flex items-center hover:text-primary-container transition-colors min-h-[44px]"
      >
        {journey.linkLabel}
        <span className="material-symbols-outlined ml-2 text-sm select-none">arrow_forward</span>
      </Link>
    </motion.div>
  );
}

export default function GuidedJourney() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="py-section-v-mobile md:py-section-v px-gutter max-w-container-preferred mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-stack-lg"
      >
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-stack-sm">
          Where Are You Now?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Identify your current challenge to find the strategic alignment you need.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
        {journeys.map((journey, i) => (
          <JourneyCard key={journey.title} journey={journey} index={i} />
        ))}
      </div>
    </section>
  );
}
