"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function OutcomeCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="max-w-container-preferred mx-auto px-gutter py-section-v-mobile md:py-section-v text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-headline-xl text-headline-xl text-on-surface mb-stack-lg"
      >
        Outcome
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="bg-surface-elevated p-6 md:p-12 border border-border-subtle rounded max-w-4xl mx-auto mb-16 flex flex-col md:flex-row justify-center md:justify-around items-center gap-stack-lg flex-wrap"
      >
        <div className="text-center">
          <span className="block font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary-container mb-2">
            Reduced
          </span>
          <span className="font-body-md text-body-md text-text-muted">
            Administrative Workload
          </span>
        </div>
        <div className="hidden md:block w-px h-24 bg-border-subtle" />
        <div className="text-center">
          <span className="block font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary-container mb-2">
            Eliminated
          </span>
          <span className="font-body-md text-body-md text-text-muted">
            Double Booking Conflicts
          </span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="font-headline-md text-headline-md text-on-surface mb-16"
      >
        Smarter spaces for collaboration and innovation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <Link
          href="/contact"
          className="bg-primary-container text-background-base py-4 px-10 font-button text-button hover:bg-primary transition-colors duration-300 rounded inline-flex items-center gap-2 min-h-[44px]"
        >
          Schedule a Strategic Consultation
          <span
            className="material-symbols-outlined select-none"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            arrow_forward
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
