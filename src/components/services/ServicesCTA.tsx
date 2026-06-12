"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function ServicesCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-section-v-mobile md:py-section-v px-gutter max-w-container-preferred mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md"
      >
        Ready to Elevate?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg"
      >
        Let&rsquo;s discuss how strategic design can accelerate your business objectives.
        Schedule a confidential consultation to explore potential alignment.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Link
          href="/contact"
          className="bg-primary-container text-on-primary font-button text-button py-4 px-10 rounded hover:bg-primary transition-colors duration-300 inline-block min-h-[44px]"
        >
          Start Your Project
        </Link>
      </motion.div>
    </section>
  );
}
