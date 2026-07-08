import type { Metadata } from "next";
import { createMetadata } from "@/config/seo";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/shared/TrustBar";
import WhatIBuild from "@/components/services/WhatIBuild";
import FeaturedWork from "@/components/work/FeaturedWork";
import Roadmap from "@/components/work/Roadmap";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = createMetadata({
  title: "Designer & Developer — Mombasa, Kenya",
  description:
    "Anthony Muhati \u2014 web developer in Mombasa, Kenya. Building websites, web apps, mobile apps, and ERP systems with design-first development for conversion and performance.",
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
