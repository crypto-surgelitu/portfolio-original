import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import HeroSection from "@/components/case-studies/bs1/HeroSection";
import ChallengeSection from "@/components/case-studies/bs1/ChallengeSection";
import StrategicApproach from "@/components/case-studies/bs1/StrategicApproach";
import TechnicalSolution from "@/components/case-studies/bs1/TechnicalSolution";
import OutcomeCTA from "@/components/case-studies/bs1/OutcomeCTA";

export const metadata: Metadata = createMetadata({
  title: "BS1 Core — ERP Booking System for SwahiliPot Hub",
  description:
    "Case study: How we built a full-stack room booking and ERP system for SwahiliPot Hub in Mombasa — transitioning from manual paperwork to automated scheduling, real-time availability, and streamlined business operations.",
  path: "/work/bs1",
  ogImage: "/assets/bs1-system-v2.webp",
  ogType: "article",
});

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
