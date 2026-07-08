import type { Metadata } from "next";
import { siteConfig } from "./site";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export function createMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
}: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: ogType,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
