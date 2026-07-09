"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const challenges = [
  {
    icon: "trending_down",
    iconClass: "text-error",
    title: "High Drop-off Rate",
    description: "Significant friction at critical points in the booking flow caused users to abandon the process before completing a reservation.",
    image: "/assets/challenge-dropoff.webp",
    alt: "Conceptual 3D visualization representing a high drop-off rate with descending arrows and fragmented user flow data.",
  },
  {
    icon: "route",
    iconClass: "text-primary",
    title: "Fragmented Journey",
    description: "Inconsistent user flow across pages created a disjointed experience, making it difficult for visitors to navigate from discovery to booking.",
    image: "/assets/challenge-fragmented.webp",
    alt: "Conceptual 3D visualization representing a fragmented user journey with disconnected nodes and pathways.",
  },
  {
    icon: "smartphone",
    iconClass: "text-on-surface-variant",
    title: "Zero Mobile Optimization",
    description: "The legacy platform was not designed for mobile users, resulting in poor responsive design and a frustrating experience on smartphones and tablets.",
    image: "/assets/challenge-mobile.webp",
    alt: "Conceptual 3D visualization representing poor mobile optimization with a sleek smartphone display showing interface issues.",
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
      className="flex-none w-[85vw] md:w-[450px] snap-start group relative bg-surface-elevated border border-border-subtle hover:border-primary transition-all duration-500 overflow-hidden rounded-xl smooth-hover"
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
        <span className={`material-symbols-outlined ${challenge.iconClass} mb-4 text-4xl`}>
          {challenge.icon}
        </span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
          {challenge.title}
        </h3>
        <p className="font-body-md text-body-md text-text-muted mb-6">
          {challenge.description}
        </p>
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
            The client faced a high drop-off rate on their legacy booking platform. The interface was cluttered, mobile-unfriendly, and failed to communicate the premium nature of their safari experiences.
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
