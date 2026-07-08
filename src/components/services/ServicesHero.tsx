"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter max-w-container-preferred mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 z-10"
        >
          <p className="font-label-caps text-label-caps text-primary uppercase mb-stack-md tracking-widest">
            Strategic Partner
          </p>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md leading-tight">
            Transforming{" "}
            <span className="bg-gradient-to-r from-[#f2ca50] to-[#d0c5af] bg-clip-text text-transparent">
              Business
            </span>{" "}
            Through Design.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
            I partner with visionary leaders to architect digital ecosystems that drive measurable outcomes. It&rsquo;s not just about aesthetics; it&rsquo;s about engineering premium experiences that solve complex business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary font-button text-button py-4 px-8 rounded hover:bg-primary transition-colors duration-300 w-full sm:w-auto text-center min-h-[44px]"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-xl blur-3xl -z-10" />
          <div className="rounded-xl overflow-hidden border border-border-subtle bg-surface-elevated">
            <Image
              alt="Anthony Muhati — Website Design, Web Apps & ERP Systems in Mombasa, Kenya"
              src="/assets/services-hero.webp"
              width={600}
              height={600}
              className="w-full h-auto object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
