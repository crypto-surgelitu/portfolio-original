import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import AssetsShowcase from "@/components/services/AssetsShowcase";
import GuidedJourney from "@/components/services/GuidedJourney";
import EngagementModel from "@/components/services/EngagementModel";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services | Anthony Muhati — Strategic Digital Partner",
  description:
    "From business websites and booking platforms to ERP systems and custom software — Anthony Muhati architects digital ecosystems that drive measurable outcomes for modern businesses.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Anthony Muhati — Strategic Digital Partner",
    description:
      "From business websites and booking platforms to ERP systems and custom software — Anthony Muhati architects digital ecosystems that drive measurable outcomes for modern businesses.",
    url: "/services",
    siteName: "Anthony Muhati",
    images: [
      {
        url: "/assets/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Anthony Muhati — Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Anthony Muhati — Strategic Digital Partner",
    description:
      "From business websites and booking platforms to ERP systems and custom software — Anthony Muhati architects digital ecosystems that drive measurable outcomes for modern businesses.",
    images: ["/assets/services-hero.png"],
  },
};

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
