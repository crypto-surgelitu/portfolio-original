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
    "Anthony Muhati builds professional websites, web applications, mobile apps, and business systems for modern businesses in Mombasa, Kenya and beyond. Design-first development with a focus on conversion, performance, and mobile-first experiences.",
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
