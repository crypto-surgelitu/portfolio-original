import type { Metadata } from "next";
import HeroSection from "@/components/case-studies/bs1/HeroSection";
import ChallengeSection from "@/components/case-studies/bs1/ChallengeSection";
import StrategicApproach from "@/components/case-studies/bs1/StrategicApproach";
import TechnicalSolution from "@/components/case-studies/bs1/TechnicalSolution";
import OutcomeCTA from "@/components/case-studies/bs1/OutcomeCTA";

export const metadata: Metadata = {
  title: "BS1 Booking System Case Study | Anthony Muhati",
  description:
    "How we built a full-stack room booking system for SwahiliPot Hub — transitioning from manual paperwork to automated scheduling, real-time availability, and streamlined operations.",
  alternates: {
    canonical: "/work/bs1",
  },
  openGraph: {
    title: "BS1 Booking System Case Study | Anthony Muhati",
    description:
      "How we built a full-stack room booking system for SwahiliPot Hub — transitioning from manual paperwork to automated scheduling, real-time availability, and streamlined operations.",
    url: "/work/bs1",
    siteName: "Anthony Muhati",
    images: [
      {
        url: "/assets/bs1-system.webp",
        width: 1200,
        height: 630,
        alt: "BS1 Booking System case study preview",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BS1 Booking System Case Study | Anthony Muhati",
    description:
      "How we built a full-stack room booking system for SwahiliPot Hub — transitioning from manual paperwork to automated scheduling, real-time availability, and streamlined operations.",
    images: ["/assets/bs1-system.webp"],
  },
};

export default function BS1Page() {
  return (
    <>
      <HeroSection />
      <ChallengeSection />
      <StrategicApproach />
      <TechnicalSolution />
      <OutcomeCTA />
    </>
  );
}
