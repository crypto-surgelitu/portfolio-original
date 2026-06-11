"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function SolutionOutcome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="max-w-container-preferred mx-auto px-gutter py-section-v-mobile md:py-section-v border-t border-border-subtle"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-headline-xl text-headline-xl text-on-surface mb-stack-lg text-center"
      >
        The Solution &amp; Outcome
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-8 bg-surface rounded-xl border border-border-subtle overflow-hidden flex flex-col smooth-hover"
        >
          <div className="h-64 sm:h-80 w-full relative">
            <Image
              alt="High-fidelity mobile context mockup showing the optimized booking platform with intuitive navigation and clean interface."
              src="/assets/solution-ui.png"
              width={800}
              height={400}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
          </div>
          <div className="p-stack-lg relative z-10 flex-grow flex flex-col justify-end">
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              Mobile-First High Performance
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A mobile-first, high-performance platform that delivers a fast, intuitive booking experience. We focused on visual storytelling and frictionless technical architecture to create a premium digital presence.
            </p>
          </div>
        </motion.div>

        <div className="md:col-span-4 flex flex-col gap-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-surface rounded-xl border border-border-subtle p-stack-md flex-grow flex flex-col justify-center items-center text-center smooth-hover relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              trending_up
            </span>
            <h4 className="font-headline-md text-headline-md text-on-surface">
              Increased Direct Bookings
            </h4>
            <p className="font-body-md text-body-md text-text-muted mt-2">
              Significant growth in direct booking conversions through an optimized user flow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-surface rounded-xl border border-border-subtle p-stack-md flex-grow flex flex-col justify-center smooth-hover"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-4">
              diamond
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A redefined digital brand presence that matches the luxury of their physical safari service.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
