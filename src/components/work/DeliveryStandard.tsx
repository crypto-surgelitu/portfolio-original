"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "architecture",
    title: "Blueprint Strategy",
    description: "Defining the foundational architecture, aligning business objectives with user psychology.",
  },
  {
    num: "02",
    icon: "design_services",
    title: "Precision Design",
    description: "Crafting minimalist, high-fidelity interfaces that prioritize clarity and premium aesthetic.",
  },
  {
    num: "03",
    icon: "code_blocks",
    title: "Robust Engineering",
    description: "Developing scalable, secure, and performant ecosystems built for longevity.",
  },
  {
    num: "04",
    icon: "monitoring",
    title: "Continuous Optimization",
    description: "Post-launch analysis and refinement to ensure sustained metric growth.",
  },
];

export default function DeliveryStandard() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter bg-surface-dim border-y border-border-subtle" id="process">
      <div className="max-w-container-preferred mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-4 flex flex-col justify-center"
          >
            <p className="font-label-caps text-label-caps text-primary-container mb-4">Methodology</p>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Standard of Delivery.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A rigorous, architectural approach to digital creation. We do not just design screens; we build scalable business assets.
            </p>
          </motion.div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="bg-surface-elevated border border-border-subtle p-10 rounded-xl smooth-hover flex flex-col gap-4 relative overflow-hidden"
              >
                <span className="font-display-lg text-display-lg text-text-muted/20 absolute right-6 top-6 leading-none select-none pointer-events-none">
                  {step.num}
                </span>
                <span className="material-symbols-outlined text-primary-container text-4xl select-none">
                  {step.icon}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-4">{step.title}</h3>
                <p className="font-body-md text-body-md text-text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
