"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Review",
    description:
      "I personally review your inquiry within 24 hours to assess technical feasibility and strategic alignment.",
  },
  {
    number: "02",
    title: "Discovery Call",
    description:
      "A focused 30-minute consultation to deeply understand your business context and defining success.",
  },
  {
    number: "03",
    title: "Strategic Proposal",
    description:
      "You receive a detailed roadmap outlining architecture, timelines, payment plan, and expected ROI.",
  },
  {
    number: "04",
    title: "Agreement",
    description:
      "Refining the scope and executing necessary contracts and payment plans to secure partnership and ensure clarity.",
  },
  {
    number: "05",
    title: "Onboarding",
    description:
      "Establishing communication channels, access protocols, and initiating the first phase of work.",
  },
];

export default function SpiralJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section-v bg-background-base border-t border-border-subtle relative overflow-hidden">
      <div className="max-w-container-preferred mx-auto px-gutter relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-stack-lg"
        >
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-stack-md text-on-surface">
            What Happens After You Reach Out?
          </h2>
          <p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto">
            A transparent, structured process designed to respect your time and
            ensure mutual fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary-container bg-surface text-primary-container font-label-caps text-label-caps shadow-[0_0_0_4px_#0B0B0B]">
                {step.number}
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
