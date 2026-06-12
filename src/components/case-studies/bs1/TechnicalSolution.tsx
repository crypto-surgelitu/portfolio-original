"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function TechnicalSolution() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#111111] py-section-v-mobile md:py-section-v border-y border-border-subtle"
    >
      <div className="max-w-container-preferred mx-auto px-gutter">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col gap-stack-lg"
          >
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              The Technical Solution
            </h2>
            <p className="font-body-lg text-body-lg text-text-muted">
              We developed a responsive web application using modern frameworks to handle concurrent booking requests. The system features a robust backend for managing user roles, room configurations, and automated email confirmations, ensuring a seamless experience for both admins and users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <Image
              alt="High-fidelity 3D mockup of the enterprise resource planning system interface showing analytics dashboards and booking management."
              src="/assets/bs1-solution.webp"
              width={700}
              height={391}
              className="w-full rounded border border-border-subtle shadow-2xl object-cover aspect-[1.79]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
