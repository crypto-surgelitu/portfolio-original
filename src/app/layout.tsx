import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      "name": siteConfig.name,
      "url": siteConfig.url,
      "sameAs": [
        contactConfig.linkedin,
        contactConfig.github
      ],
      "jobTitle": "Designer & Developer",
      "description": "Professional digital products built through a structured design-first process."
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": `${siteConfig.name} Portfolio`,
      "publisher": {
        "@id": `${siteConfig.url}/#person`
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      "name": `${siteConfig.name} Digital Solutions`,
      "image": `${siteConfig.url}${siteConfig.ogImage}`,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mombasa",
        "addressCountry": "KE"
      },
      "url": siteConfig.url
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body-md antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-black">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
