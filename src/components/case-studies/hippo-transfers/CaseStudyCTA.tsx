"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CaseStudyCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="max-w-container-preferred mx-auto px-gutter py-section-v-mobile md:py-section-v border-t border-border-subtle text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-headline-xl text-headline-xl text-on-surface mb-stack-md"
      >
        Ready to Elevate Your Business?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
        <Link
          href="/contact"
          className="inline-flex bg-primary-container text-background-base font-button text-button px-8 py-4 rounded hover:bg-primary smooth-hover transition-all duration-300 items-center justify-center mt-stack-md min-h-[44px]"
        >
          Start Your Project
        </Link>
      </motion.div>
    </section>
  );
}
