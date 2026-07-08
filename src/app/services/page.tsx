import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import ServicesHero from "@/components/services/ServicesHero";
import AssetsShowcase from "@/components/services/AssetsShowcase";
import GuidedJourney from "@/components/services/GuidedJourney";
import EngagementModel from "@/components/services/EngagementModel";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = createMetadata({
  title: "Services — Strategic Digital Partner",
  description:
    "Website design, booking platforms, ERP systems, and custom software — Anthony Muhati builds digital products for businesses in Mombasa, Kenya and beyond.",
  path: "/services",
  ogImage: "/assets/services-hero.webp",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <AssetsShowcase />
      <GuidedJourney />
      <EngagementModel />
      <ServicesCTA />
    </>
  );
}
