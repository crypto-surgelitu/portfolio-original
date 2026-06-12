"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Review",
    description:
      "I review your inquiry within 24 hours to ensure alignment with our expertise.",
  },
  {
    number: "02",
    title: "Discovery Call / Physical Meeting",
    description:
      "A focused 30-minute consultation to map technical requirements and business outcomes. Physical meeting available if required or in the local area.",
  },
  {
    number: "03",
    title: "Formal Proposal",
    description:
      "Delivery of a comprehensive strategy document, timeline, and payment plan structure.",
  },
];

export default function EngagementTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="bg-surface-elevated border border-border-subtle rounded-xl p-6 md:p-8 h-full"
    >
      <h2 className="font-['Hanken_Grotesk'] text-[32px] md:text-[40px] font-semibold text-[#e2e2e2] mb-12">
        Engagement Process
      </h2>

      <div className="space-y-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-3">
            <span className="font-['Hanken_Grotesk'] text-[64px] font-bold text-[#f2ca50] leading-none">
              {step.number}
            </span>
            <h3 className="font-['Hanken_Grotesk'] text-[22px] font-semibold text-[#f2ca50]">
              {step.title}
            </h3>
            <p className="text-[16px] leading-[26px] text-[#A0A0A0]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
