"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { contactConfig } from "@/config/contact";

export default function ContactHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-section-v-mobile md:py-section-v px-gutter max-w-container-preferred mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <p className="font-label-caps text-label-caps text-primary uppercase mb-stack-sm tracking-widest">
          Initiate Contact
        </p>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md leading-tight">
          Let&rsquo;s Discuss
          <br className="block md:hidden" />{" "}
          <span className="text-primary">Your Project</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-sm">
          Partner to transform your business infrastructure. I engage with
          clients to deliver uncompromising technical excellence and strategic
          advantage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="font-body-md text-body-md text-text-muted">
            Direct Inquiry:
          </span>
          <Link
            href={`mailto:${contactConfig.emailRaw}`}
            className="font-body-md text-body-md text-primary hover:text-primary-fixed transition-colors underline underline-offset-2 min-h-[44px] flex items-center"
          >
            {contactConfig.emailRaw}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
