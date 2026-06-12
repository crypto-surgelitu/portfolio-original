"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-container-preferred mx-auto px-gutter pt-section-v-mobile md:pt-section-v pb-stack-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-6 flex flex-col gap-stack-md z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-label-caps text-label-caps text-primary uppercase tracking-widest"
          >
            Case Study
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface"
          >
            Hippo Transfers: Reimagining the Safari Booking Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            Hippo Transfers &amp; Adventures is a Kenya-based travel company specializing in safari packages, day excursions, airport transfers, and personalized adventure experiences. Combining local expertise, reliable transport, and carefully curated itineraries to help travelers discover Kenya&rsquo;s wildlife, landscapes, and culture with comfort and confidence.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-12 mt-stack-lg"
        >
          <div className="rounded-xl overflow-hidden border border-border-subtle bg-surface-elevated smooth-hover">
            <Image
              alt="High-fidelity mockup of the Hippo Transfers & Adventures travel and tourism website displayed on a laptop, showcasing the hero section with safari imagery and booking interface."
              src="/assets/hippo-transfers.webp"
              width={1200}
              height={675}
              className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
