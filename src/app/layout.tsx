import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { validateEnv } from "@/config/env";
import { hankenGrotesk, inter, cormorantGaramond } from "@/config/fonts";

validateEnv();
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
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
      "image": `${siteConfig.url}${siteConfig.ogImage}`,
      "sameAs": [
        contactConfig.linkedin,
        contactConfig.github,
      ],
      "jobTitle": "Designer & Developer",
      "description":
        "Professional websites, web applications, mobile apps, and business systems built through a structured design-first process. Based in Mombasa, Kenya.",
      "knowsAbout": [
        "Web Development",
        "Web Application Development",
        "Mobile App Development",
        "ERP Systems",
        "Business Software",
        "UI/UX Design",
        "Custom Software Development",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mombasa",
        "addressCountry": "KE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": `${siteConfig.name} — Designer & Developer Portfolio`,
      "description": siteConfig.description,
      "publisher": {
        "@id": `${siteConfig.url}/#person`,
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      "name": `${siteConfig.name} Digital Solutions`,
      "image": `${siteConfig.url}${siteConfig.ogImage}`,
      "description":
        "Design-first development of websites, web apps, mobile apps, and business systems for modern businesses in Mombasa, Kenya.",
      "priceRange": "$$",
      "areaServed": [
        {
          "@type": "City",
          "name": "Mombasa",
        },
        {
          "@type": "Country",
          "name": "Kenya",
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mombasa",
        "addressCountry": "KE",
      },
      "url": siteConfig.url,
      "telephone": contactConfig.whatsapp,
      "email": contactConfig.emailRaw,
      "sameAs": [
        contactConfig.linkedin,
        contactConfig.github,
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ERP & Business Systems",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`dark ${hankenGrotesk.variable} ${inter.variable} ${cormorantGaramond.variable}`} lang="en">
      <head>
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
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
