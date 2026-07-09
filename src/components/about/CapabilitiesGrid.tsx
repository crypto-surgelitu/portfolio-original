"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const capabilities = [
  {
    icon: "database",
    title: "ERP Systems",
    description: "End-to-end integration of operational processes.",
    outcome: "Unified Data Ecosystem",
    image: "/assets/about-erp.webp",
    imageAlt: "ERP Systems dashboard mockup",
  },
  {
    icon: "web",
    title: "Web Applications",
    description: "Scalable, high-performance digital platforms.",
    outcome: "Performance Optimized for Scale",
    image: "/assets/about-web.webp",
    imageAlt: "Web application mockup on a laptop screen",
  },
  {
    icon: "smartphone",
    title: "Mobile Native",
    description: "iOS and Android ecosystem development.",
    outcome: "Seamless User Experience",
    image: "/assets/about-mobile.webp",
    imageAlt: "Mobile application interface on a smartphone",
  },
  {
    icon: "cloud",
    title: "Cloud Infrastructure",
    description: "Architectural design and deployment.",
    outcome: "High Availability and Security",
    image: "/assets/about-cloud.webp",
    imageAlt: "Cloud infrastructure network visualization",
  },
];

export default function CapabilitiesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-section-v-mobile md:py-section-v px-gutter max-w-container-max mx-auto border-b border-border-subtle"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-stack-lg"
      >
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Technical Capabilities</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">A comprehensive suite of operational expertise.</p>
      </motion.div>

      <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="flex-none w-[85vw] md:w-[450px] snap-start group relative bg-surface border border-border-subtle hover:border-primary-container transition-all duration-500 overflow-hidden"
          >
            <div className="h-64 relative overflow-hidden">
              <Image
                alt={cap.imageAlt}
                className="w-full h-full object-cover hover-grayscale transition-all duration-700 scale-110 group-hover:scale-100"
                src={cap.image}
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
            </div>
            <div className="p-8 relative z-10">
              <span className="material-symbols-outlined text-primary mb-4 text-4xl select-none">
                {cap.icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{cap.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{cap.description}</p>
              <div className="pt-4 border-t border-border-subtle">
                <span className="text-primary font-label-caps text-sm tracking-widest uppercase">Strategic Outcome</span>
                <p className="text-on-surface text-sm mt-1">{cap.outcome}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
