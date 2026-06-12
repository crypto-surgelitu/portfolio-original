"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "User Journey Mapping",
    description: "Identifying friction points in the booking flow through detailed analysis of user behavior and pain points.",
  },
  {
    number: "02",
    title: "Minimalist Interface Design",
    description: "Prioritizing high-end savanna imagery and clean typography to create a premium brand experience.",
  },
  {
    number: "03",
    title: "Seamless API Integration",
    description: "Connecting real-time availability with a bespoke checkout experience for smooth end-to-end booking.",
  },
];

function TimelineStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
      className="relative"
    >
      <span className="font-display-lg text-display-lg text-surface-variant opacity-30 absolute -top-2 -left-4 -z-10 select-none">
        {step.number}
      </span>
      <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-background border border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">{step.title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function StrategicApproach() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="max-w-container-preferred mx-auto px-gutter py-section-v-mobile md:py-section-v border-t border-border-subtle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-stack-lg order-2 lg:order-1"
        >
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            Strategic Approach
          </h2>
          <div className="flex flex-col gap-stack-md relative pl-10 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border-subtle">
            {steps.map((step, i) => (
              <TimelineStep
                key={step.number}
                step={step}
                index={i}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 order-1 lg:order-2"
        >
          <div className="rounded-xl overflow-hidden border border-border-subtle bg-surface-elevated smooth-hover">
            <Image
              alt="Screenshot of the refined booking platform interface showing streamlined navigation and safari package listings."
              src="/assets/approach-platform.webp"
              width={700}
              height={500}
              className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
