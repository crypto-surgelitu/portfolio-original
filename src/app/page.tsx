import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/shared/TrustBar";
import WhatIBuild from "@/components/services/WhatIBuild";
import FeaturedWork from "@/components/work/FeaturedWork";
import Roadmap from "@/components/work/Roadmap";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = createMetadata({
  title: "Anthony Muhati — Designer & Developer",
  description:
    "Professional digital products built through a structured design-first process. Websites, apps, and business systems for modern businesses.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatIBuild />
      <FeaturedWork />
      <Roadmap />
      <ContactCTA />
    </>
  );
}
