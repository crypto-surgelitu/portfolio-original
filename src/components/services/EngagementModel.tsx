"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Strategic Discovery",
    description:
      "Deep-dive into business objectives, target audience, and competitive landscape.",
    active: true,
  },
  {
    number: "2",
    title: "Architecture & Prototyping",
    description:
      "Translating strategy into wireframes and interactive high-fidelity concepts.",
    active: false,
  },
  {
    number: "3",
    title: "Refinement & Handoff",
    description:
      "Iterative polish and meticulous preparation of design systems for development.",
    active: false,
  },
  {
    number: "4",
    title: "Ongoing Advisory",
    description:
      "Post-launch support to measure impact and guide future iterations.",
    active: false,
  },
];

function ProcessStep({
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="relative bg-surface-elevated border border-border-subtle rounded-xl p-6"
    >
      <div
        className={`h-12 w-12 rounded-full bg-background-base flex items-center justify-center font-headline-md text-headline-md mb-stack-md mx-auto md:mx-0 ${
          step.active
            ? "border border-primary text-primary"
            : "border border-border-subtle text-on-surface"
        }`}
      >
        {step.number}
      </div>
      <h4 className="font-headline-md text-headline-md text-on-surface mb-2 text-center md:text-left">
        {step.title}
      </h4>
      <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function EngagementModel() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="py-section-v-mobile md:py-section-v bg-surface border-y border-border-subtle px-gutter"
    >
      <div className="max-w-container-preferred mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-stack-lg"
        >
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-stack-sm">
            The Engagement Model
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A disciplined, low-friction approach engineered for executive stakeholders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-md relative">
          <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-border-subtle -z-10" />
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
