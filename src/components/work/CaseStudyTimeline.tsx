"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: "hippo",
    num: "01",
    industry: "Hospitality & Tourism",
    title: "Hippo Transfers",
    details: [
      {
        label: "Discovery",
        text: "A legacy booking system failing to capture the luxury essence of African safaris, resulting in high drop-off rates.",
      },
      {
        label: "Design",
        text: "An immersive, visually driven interface prioritizing effortless booking flows and high-end imagery.",
      },
      {
        label: "Outcome",
        text: "Elevated online booking experience and redefined digital brand presence across key markets.",
        highlight: true,
      },
    ],
    image: "/assets/hippo-transfers.png",
    imageAlt: "Hippo Transfers website mockup on a laptop screen",
    href: "/work/hippo-transfers",
  },
  {
    id: "bs1",
    num: "02",
    industry: "Enterprise Resource Planning",
    title: "BS1 Core",
    details: [
      {
        label: "Discovery",
        text: "Complex data silos creating operational bottlenecks across enterprise departments.",
      },
      {
        label: "Design",
        text: "A structured, dark-mode focused dashboard emphasizing operational efficiency and cognitive ease.",
      },
      {
        label: "Outcome",
        text: "Streamlined data visualization enabling faster operational insights for the team.",
        highlight: true,
      },
    ],
    image: "/assets/bs1-system.png",
    imageAlt: "BS1 Core ERP dashboard mockup on a desktop screen",
    href: "/work/bs1",
  },
];

function TimelineNode({ num }: { num: string }) {
  return (
    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background-base border-2 border-primary-container items-center justify-center z-10">
      <span className="font-label-caps text-label-caps text-primary-container">{num}</span>
    </div>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center mb-section-v relative">
      <TimelineNode num={study.num} />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={`order-2 lg:order-1 ${isLeft ? "pr-0 lg:pr-16 text-left lg:text-right" : "pl-0 lg:pl-16 text-left"}`}
      >
        <p className="font-label-caps text-label-caps text-text-muted mb-4">{study.industry}</p>
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">{study.title}</h3>
        <div className="space-y-6">
          {study.details.map((detail) => (
            <div key={detail.label}>
              <h4
                className={`font-headline-md text-headline-md mb-2 ${
                  detail.highlight ? "text-primary-container" : "text-on-surface-variant"
                }`}
              >
                {detail.label}
              </h4>
              <p className="font-body-md text-body-md text-text-muted">{detail.text}</p>
            </div>
          ))}
        </div>
        <Link
          href={study.href}
          className="font-button text-button text-on-surface hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 mt-6 min-h-[44px]"
        >
          View Case Study
          <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 30 : -30 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className={`order-1 lg:order-2 ${isLeft ? "pl-0 lg:pl-16" : "pr-0 lg:pr-16"} mb-8 lg:mb-0`}
      >
        <div className="rounded-xl overflow-hidden border border-border-subtle bg-surface-elevated p-4 smooth-hover">
          <Image
            alt={study.imageAlt}
            className="w-full h-auto rounded-lg"
            src={study.image}
            width={800}
            height={500}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function CaseStudyTimeline() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter relative" id="work">
      <div className="max-w-container-preferred mx-auto relative">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-stack-lg md:mb-section-v"
        >
          <p className="font-label-caps text-label-caps text-primary-container mb-2">The Portfolio</p>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Narratives of Transformation</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2" />
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
