import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/shared/TrustBar";
import WhatIBuild from "@/components/services/WhatIBuild";
import FeaturedWork from "@/components/work/FeaturedWork";
import Roadmap from "@/components/work/Roadmap";
import ContactCTA from "@/components/contact/ContactCTA";

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
