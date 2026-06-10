import Link from "next/link";
import Image from "next/image";

export default function FeaturedWork() {
  return (
    <section className="py-section-v-mobile md:py-section-v px-gutter bg-[#111111] border-y border-border-subtle">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-primary-container"></div>
        </div>

        <div className="space-y-section-v-mobile md:space-y-section-v">
          {/* Project 1: Hippo Transfers & Adventures */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <span className="font-label-caps text-label-caps text-primary-container block">
                Business Website
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Hippo Transfers & Adventures
              </h3>
              <p className="font-body-md text-body-md text-text-muted">
                A premium booking platform and digital presence for a luxury safari and transfer company. Designed to capture the essence of the African landscape while providing a frictionless booking experience for high-end clientele.
              </p>
              <Link 
                className="inline-flex items-center gap-2 font-button text-button text-on-surface hover:text-primary-container transition-colors duration-300 mt-4 min-h-[44px]" 
                href="/work/hippo-transfers"
              >
                View Case Study 
                <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
              </Link>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-surface-elevated rounded-xl p-4 border border-border-subtle">
                <Image 
                  alt="Screenshot of the Hippo Transfers & Adventures website header showing the logo, navigation menu, and a hero section with an elephant in the savanna." 
                  className="w-full h-auto rounded shadow-2xl" 
                  src="/assets/hippo-transfers.png"
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Project 2: BS1 Booking System */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="bg-surface-elevated rounded-xl p-4 border border-border-subtle">
                <Image 
                  alt="Screenshot of the BS1 Booking System dashboard interface displaying administrative controls, scheduling logs, resource calendar, and analytics." 
                  className="w-full h-auto rounded shadow-2xl" 
                  src="/assets/bs1-system.png"
                  width={800}
                  height={500}
                />
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-label-caps text-label-caps text-primary-container block">
                Business Dashboard
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                BS1 Booking System
              </h3>
              <p className="font-body-md text-body-md text-text-muted">
                BS1 Booking System— A comprehensive booking platform developed for Swahilipot Hub (NGO) to streamline the internal scheduling and management of creative spaces and resources.
              </p>
              <Link 
                className="inline-flex items-center gap-2 font-button text-button text-on-surface hover:text-primary-container transition-colors duration-300 mt-4 min-h-[44px]" 
                href="/work/bs1"
              >
                View Case Study 
                <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
