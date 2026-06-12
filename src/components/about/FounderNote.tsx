"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function FounderNote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-section-v px-gutter max-w-container-max mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 bg-surface p-8 border border-border-subtle"
        >
          <span className="material-symbols-outlined text-primary mb-4 text-4xl select-none">
            format_quote
          </span>
          <p className="font-body-lg text-body-lg text-on-surface italic mb-6">
            &ldquo;The most sophisticated systems are the ones you barely notice. They quietly handle the complexity, allowing the business to focus entirely on growth.&rdquo;
          </p>
          <div className="font-label-caps text-label-caps text-text-muted tracking-widest">
            &mdash; Anthony Muhati, Founder
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-8 bg-surface-elevated p-12 border border-border-subtle flex flex-col justify-center items-start relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4 relative z-10">
            Ready to engineer your scale?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg relative z-10">
            Schedule a technical consultation to assess your current infrastructure and outline a strategic path forward.
          </p>
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary-container px-8 py-4 font-button text-button hover:bg-[#b0902d] transition-colors duration-300 relative z-10 inline-flex items-center gap-2"
          >
            Start Your Project
            <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
