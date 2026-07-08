import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import EngagementTimeline from "@/components/contact/EngagementTimeline";
import SpiralJourney from "@/components/contact/SpiralJourney";

export const metadata: Metadata = createMetadata({
  title: "Start a Project — Get in Touch",
  description:
    "Start your project with a web developer in Mombasa, Kenya. Websites, web apps, mobile apps, and business systems \u2014 built through a design-first process.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-[#111111] py-section-v border-t border-border-subtle">
        <div className="max-w-container-preferred mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <EngagementTimeline />
            </div>
          </div>
        </div>
      </section>
      <SpiralJourney />
    </>
  );
}
