"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BackgroundVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-section-v-mobile md:py-section-v px-gutter max-w-container-preferred mx-auto border-b border-border-subtle"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg md:gap-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md border-b border-border-subtle pb-4">
            The Background
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            With a Diploma in Business Information Technology focused on software development, I build solutions that bridge the gap between technical complexity and business value. From crafting booking platforms for tourism to engineering internal business systems, my experience spans real-world applications designed to solve operational challenges. Every project follows a design-first workflow — structure before code, strategy before execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md border-b border-border-subtle pb-4">
            The Vision
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Technology should never be a bottleneck — it should be the primary accelerator of business value. My vision is to provide clear, actionable roadmaps that transform technical challenges into strategic assets. Every solution is designed with longevity in mind, ensuring that your digital infrastructure grows as your business grows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
