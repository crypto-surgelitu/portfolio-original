import type { Metadata } from "next";
import HeroSection from "@/components/case-studies/hippo-transfers/HeroSection";
import ChallengeSection from "@/components/case-studies/hippo-transfers/ChallengeSection";
import StrategicApproach from "@/components/case-studies/hippo-transfers/StrategicApproach";
import SolutionOutcome from "@/components/case-studies/hippo-transfers/SolutionOutcome";
import CaseStudyCTA from "@/components/case-studies/hippo-transfers/CaseStudyCTA";

export const metadata: Metadata = {
  title: "Hippo Transfers Case Study | Anthony Muhati",
  description:
    "How we redesigned and rebuilt the booking platform for Hippo Transfers & Adventures — a mobile-first, high-performance safari booking experience.",
  alternates: {
    canonical: "/work/hippo-transfers",
  },
  openGraph: {
    title: "Hippo Transfers Case Study | Anthony Muhati",
    description:
      "How we redesigned and rebuilt the booking platform for Hippo Transfers & Adventures — a mobile-first, high-performance safari booking experience.",
    url: "/work/hippo-transfers",
    siteName: "Anthony Muhati",
    images: [
      {
        url: "/assets/hippo-transfers.webp",
        width: 1200,
        height: 630,
        alt: "Hippo Transfers & Adventures case study preview",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hippo Transfers Case Study | Anthony Muhati",
    description:
      "How we redesigned and rebuilt the booking platform for Hippo Transfers & Adventures — a mobile-first, high-performance safari booking experience.",
    images: ["/assets/hippo-transfers.webp"],
  },
};

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
