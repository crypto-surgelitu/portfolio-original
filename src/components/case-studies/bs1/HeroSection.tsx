"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-container-preferred mx-auto px-gutter mb-section-v-mobile md:mb-section-v">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col gap-stack-lg"
        >
          <span className="font-label-caps text-label-caps text-primary-container uppercase">
            Case Study
          </span>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">
            SwahiliPot Hub: Smarter Room Booking
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
            The Swahili Pot Hub Room Booking System is a full-stack digital platform designed to streamline the reservation and management of creative spaces, meeting rooms, and training hubs. By transitioning from manual paperwork to an automated workflow, the system enhances operational efficiency for the hub.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <Image
            alt="High-fidelity mockup of the BS1 Core ERP dashboard displaying administrative controls, scheduling interface, and resource management panels."
            src="/assets/bs1-system-v2.webp"
            width={700}
            height={391}
            className="w-full rounded border border-border-subtle shadow-2xl object-cover aspect-[1.79]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
