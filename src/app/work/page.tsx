import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import WorkHero from "@/components/work/WorkHero";
import CaseStudyTimeline from "@/components/work/CaseStudyTimeline";
import DeliveryStandard from "@/components/work/DeliveryStandard";
import WorkCTA from "@/components/work/WorkCTA";

export const metadata: Metadata = createMetadata({
  title: "Portfolio & Case Studies",
  description:
    "Explore real-world projects by Anthony Muhati: Hippo Transfers & Adventures tourism website and BS1 Core ERP booking system. See how design-first development delivers measurable results for businesses in Mombasa, Kenya.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <CaseStudyTimeline />
      <DeliveryStandard />
      <WorkCTA />
    </>
  );
}
