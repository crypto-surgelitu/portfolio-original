"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "User-Centric Design",
    description: "Simplifying the booking journey for diverse community members.",
  },
  {
    number: "02",
    title: "Automated Approval",
    description: "Streamlining admin workflows with instant notifications and status updates.",
  },
  {
    number: "03",
    title: "Real-time Availability",
    description: "A live calendar view ensuring transparency across all creative spaces.",
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
      className="flex gap-stack-md items-start"
    >
      <span className="font-display-lg text-display-lg text-text-muted/20 leading-none select-none">
        {step.number}
      </span>
      <div>
        <h3 className="font-headline-md text-headline-md text-on-surface">{step.title}</h3>
        <p className="font-body-md text-body-md text-text-muted">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function StrategicApproach() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="max-w-container-preferred mx-auto px-gutter py-section-v-mobile md:py-section-v"
    >
      <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col gap-stack-lg"
        >
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            Strategic Approach
          </h2>
          <div className="flex flex-col gap-stack-md">
            {steps.map((step, i) => (
              <TimelineStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <Image
            alt="High-fidelity mockup of the BS1 ERP dashboard showing interconnected data nodes, scheduling calendar, and resource management interface."
            src="/assets/bs1-approach.webp"
            width={700}
            height={391}
            className="w-full rounded border border-border-subtle shadow-2xl object-cover aspect-[1.79]"
          />
        </motion.div>
      </div>
    </section>
  );
}
