import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import HeroSection from "@/components/case-studies/hippo-transfers/HeroSection";
import ChallengeSection from "@/components/case-studies/hippo-transfers/ChallengeSection";
import StrategicApproach from "@/components/case-studies/hippo-transfers/StrategicApproach";
import SolutionOutcome from "@/components/case-studies/hippo-transfers/SolutionOutcome";
import CaseStudyCTA from "@/components/case-studies/hippo-transfers/CaseStudyCTA";

export const metadata: Metadata = createMetadata({
  title: "Hippo Transfers Case Study | Anthony Muhati",
  description:
    "How we redesigned and rebuilt the booking platform for Hippo Transfers & Adventures — a mobile-first, high-performance safari booking experience.",
  path: "/work/hippo-transfers",
  ogImage: "/assets/hippo-transfers.webp",
  ogType: "article",
});

export default function HippoTransfersPage() {
  return (
    <>
      <HeroSection />
      <ChallengeSection />
      <StrategicApproach />
      <SolutionOutcome />
      <CaseStudyCTA />
    </>
  );
}
