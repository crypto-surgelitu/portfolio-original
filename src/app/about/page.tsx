import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import AboutHero from "@/components/about/AboutHero";
import BackgroundVision from "@/components/about/BackgroundVision";
import PhilosophyBanner from "@/components/about/PhilosophyBanner";
import CapabilitiesGrid from "@/components/about/CapabilitiesGrid";
import OperationalFramework from "@/components/about/OperationalFramework";
import FounderNote from "@/components/about/FounderNote";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Designer & Developer building websites, apps, and business systems. Diploma in Business Information Technology with a focus on software development and design-first workflows.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BackgroundVision />
      <PhilosophyBanner />
      <CapabilitiesGrid />
      <OperationalFramework />
      <FounderNote />
    </>
  );
}
