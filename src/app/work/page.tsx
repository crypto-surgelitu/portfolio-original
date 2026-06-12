import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import WorkHero from "@/components/work/WorkHero";
import CaseStudyTimeline from "@/components/work/CaseStudyTimeline";
import DeliveryStandard from "@/components/work/DeliveryStandard";
import WorkCTA from "@/components/work/WorkCTA";

export const metadata: Metadata = {
  title: "Work — Anthony Muhati Portfolio",
  description:
    "Real projects built for real businesses. View case studies for Hippo Transfers & Adventures and BS1 Core — professional websites, apps, and business systems.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: "Work — Anthony Muhati Portfolio",
    description:
      "Real projects built for real businesses. View case studies for Hippo Transfers & Adventures and BS1 Core.",
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Anthony Muhati Portfolio Work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Anthony Muhati Portfolio",
    description:
      "Real projects built for real businesses. View case studies for Hippo Transfers & Adventures and BS1 Core.",
    images: [siteConfig.ogImage],
  },
};

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
