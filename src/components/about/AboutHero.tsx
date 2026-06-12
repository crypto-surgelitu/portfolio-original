"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row border-b border-border-subtle">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex items-center p-gutter lg:p-[120px] bg-background-base"
      >
        <div className="max-w-xl">
          <span className="font-label-caps text-label-caps text-text-muted uppercase mb-stack-sm block tracking-widest">
            About The Founder
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md">
            The Operational{" "}
            <span className="text-primary">Visionary.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            I build robust technological infrastructures that drive systemic business growth. Rejecting superficial trends, my focus is on precision engineering, scalable systems, and measurable operational efficiency.
          </p>
          <div className="flex gap-4">
            <Link
              href="#framework"
              className="bg-primary-container text-on-primary-container px-8 py-4 font-button text-button hover:bg-[#b0902d] transition-colors duration-300 inline-flex"
            >
              View Methodology
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 relative min-h-[50vh] lg:min-h-full"
      >
        <Image
          alt="Anthony Muhati — Designer & Developer"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity hover:grayscale-0 transition-all duration-700"
          src="/assets/about-portrait.webp"
          width={800}
          height={1000}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-background-base via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}
