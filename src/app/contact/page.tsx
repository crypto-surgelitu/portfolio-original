import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import EngagementTimeline from "@/components/contact/EngagementTimeline";

export const metadata: Metadata = {
  title: "Contact — Anthony Muhati",
  description:
    "Initiate contact with Anthony Muhati. Discuss your website, app, or business system project through a structured engagement process.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact — Anthony Muhati",
    description:
      "Start your project with Anthony Muhati. Submit a detailed proposal request and get a response within 24 hours.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Anthony Muhati",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Anthony Muhati",
    description:
      "Start your project with Anthony Muhati. Submit a detailed proposal request and get a response within 24 hours.",
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="pb-section-v-mobile md:pb-section-v px-gutter max-w-container-preferred mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md">
          <ContactForm />
          <EngagementTimeline />
        </div>
      </section>
    </>
  );
}
