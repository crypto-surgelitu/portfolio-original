import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import HeroSection from "@/components/case-studies/hippo-transfers/HeroSection";
import ChallengeSection from "@/components/case-studies/hippo-transfers/ChallengeSection";
import StrategicApproach from "@/components/case-studies/hippo-transfers/StrategicApproach";
import SolutionOutcome from "@/components/case-studies/hippo-transfers/SolutionOutcome";
import CaseStudyCTA from "@/components/case-studies/hippo-transfers/CaseStudyCTA";

export const metadata: Metadata = createMetadata({
  title: "Hippo Transfers & Adventures — Tourism Website Redesign",
  description:
    "Case study: How we redesigned and rebuilt the booking platform for Hippo Transfers & Adventures — a mobile-first, high-performance tourism and safari booking website optimized for conversion and user experience.",
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
