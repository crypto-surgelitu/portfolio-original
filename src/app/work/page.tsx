import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import WorkHero from "@/components/work/WorkHero";
import CaseStudyTimeline from "@/components/work/CaseStudyTimeline";
import DeliveryStandard from "@/components/work/DeliveryStandard";
import WorkCTA from "@/components/work/WorkCTA";

export const metadata: Metadata = createMetadata({
  title: "Portfolio & Case Studies",
  description:
    "See real projects: Hippo Transfers tourism booking platform and BS1 Core ERP system. Design-first development for businesses in Mombasa, Kenya.",
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
