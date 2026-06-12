"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WorkHero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-section-v-mobile md:py-section-v px-gutter">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background-base z-10" />
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <div className="max-w-container-preferred mx-auto w-full relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-stack-lg"
        >
          <div>
            <p className="font-label-caps text-label-caps text-primary-container mb-4 uppercase tracking-widest">
              Digital Solutions
            </p>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6">
              Built To Elevate.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Transforming complex business challenges into elegant, high-performance digital ecosystems. We engineer trust, authority, and measurable outcomes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#work"
              className="inline-flex bg-primary-container text-on-primary-container font-button text-button px-8 py-4 smooth-hover"
            >
              Explore the Journey
            </Link>
            <Link
              href="/contact"
              className="inline-flex bg-transparent border border-border-subtle text-on-surface font-button text-button px-8 py-4 smooth-hover hover:bg-white/5"
            >
              Discuss a Project
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[50vh] hidden lg:block perspective-container"
        >
          <div className="absolute inset-0 rounded-xl overflow-hidden border border-border-subtle hero-3d-element bg-surface-elevated animate-spiral-float">
            <div className="absolute inset-0 flex items-center justify-center text-text-muted">
              <Image
                alt="Digital Solutions Built To Elevate"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                src="/assets/hero-mockup.webp"
                width={800}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background-base via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
