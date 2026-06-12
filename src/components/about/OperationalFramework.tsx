"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "System Audit",
    description:
      "Comprehensive analysis of existing technical infrastructure, bottlenecks, and alignment with current business objectives.",
  },
  {
    num: "02",
    title: "Strategic Blueprinting",
    description:
      "Developing a rigorous, phased architectural roadmap designed to mitigate risk and maximize impact during implementation.",
  },
  {
    num: "03",
    title: "Precision Execution",
    description:
      "Agile yet disciplined deployment of solutions, maintaining strict adherence to quality standards and operational continuity.",
  },
];

export default function OperationalFramework() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="framework"
      className="py-section-v-mobile md:py-section-v px-gutter max-w-container-preferred mx-auto border-b border-border-subtle"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-headline-lg text-headline-lg text-on-surface mb-stack-lg"
      >
        The Operational Framework
      </motion.h2>

      <div className="space-y-stack-md">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            className="flex gap-stack-md border-t border-border-subtle pt-6"
          >
            <div className="font-display-lg text-display-lg text-surface-bright opacity-50 w-24 select-none leading-none">
              {step.num}
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{step.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
