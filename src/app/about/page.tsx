import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import AboutHero from "@/components/about/AboutHero";
import BackgroundVision from "@/components/about/BackgroundVision";
import PhilosophyBanner from "@/components/about/PhilosophyBanner";
import CapabilitiesGrid from "@/components/about/CapabilitiesGrid";
import OperationalFramework from "@/components/about/OperationalFramework";
import FounderNote from "@/components/about/FounderNote";

export const metadata: Metadata = {
  title: "About — Anthony Muhati",
  description:
    "Designer & Developer building websites, apps, and business systems. Diploma in Business Information Technology with a focus on software development and design-first workflows.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About — Anthony Muhati",
    description:
      "Designer & Developer building websites, apps, and business systems. Learn about the process and philosophy behind every project.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Anthony Muhati — Designer & Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Anthony Muhati",
    description:
      "Designer & Developer building websites, apps, and business systems.",
    images: [siteConfig.ogImage],
  },
};

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
