"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PhilosophyBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-section-v px-gutter bg-surface-elevated text-center border-b border-border-subtle"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-headline-xl text-headline-xl text-on-surface max-w-4xl mx-auto leading-tight"
      >
        Technology Should Create{" "}
        <span className="text-primary">Business Value.</span>
      </motion.h2>
    </section>
  );
}
