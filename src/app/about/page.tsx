import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import AboutHero from "@/components/about/AboutHero";
import BackgroundVision from "@/components/about/BackgroundVision";
import PhilosophyBanner from "@/components/about/PhilosophyBanner";
import CapabilitiesGrid from "@/components/about/CapabilitiesGrid";
import OperationalFramework from "@/components/about/OperationalFramework";
import FounderNote from "@/components/about/FounderNote";

export const metadata: Metadata = createMetadata({
  title: "About — Designer & Developer from Mombasa",
  description:
    "Learn about Anthony Muhati, a web developer & designer based in Mombasa, Kenya. Specializing in websites, web apps, mobile apps, and business systems.",
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
