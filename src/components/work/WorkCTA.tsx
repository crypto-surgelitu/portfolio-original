"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function WorkCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-container/5 z-0" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-container-preferred mx-auto relative z-10 text-center"
      >
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6">
          Ready to Elevate?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
          Partner with us to transform your digital presence into a measurable business asset. Let&rsquo;s discuss your vision.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-button text-button px-10 py-5 smooth-hover hover:bg-primary"
        >
          Start your Project
        </Link>
      </motion.div>
    </section>
  );
}
