"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter max-w-container-max mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-stack-lg z-10"
        >
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
            Websites, Apps & <span className="text-primary-container">Business Systems</span> Built For Modern Businesses
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted max-w-2xl">
            I specialize in design-first development. Before writing a single line of code, we design, review, and perfect your digital solution. No surprises, just premium results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              className="font-button text-button bg-primary-container text-black px-8 py-4 rounded text-center hover:bg-[#b0912d] transition-colors duration-300 min-h-[48px] flex items-center justify-center font-semibold" 
              href="/contact"
            >
              Start A Project
            </Link>
            <Link 
              className="font-button text-button border border-border-subtle text-on-surface px-8 py-4 rounded text-center hover:bg-white/5 transition-colors duration-300 min-h-[48px] flex items-center justify-center font-semibold" 
              href="/work"
            >
              View My Work
            </Link>
          </div>
        </motion.div>

        {/* Mockup Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]"></div>
          <Image 
            alt="Premium multi-device mockup showing a modern, dark-themed dashboard on a laptop, tablet, and smartphone. The devices are floating slightly above a sleek black surface, softly illuminated by warm, high-end studio lighting, conveying a sense of luxury and technological sophistication." 
            className="w-full h-full object-contain relative z-10" 
            src="/assets/hero-mockup.png"
            width={700}
            height={600}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
