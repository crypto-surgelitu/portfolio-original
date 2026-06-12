import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  { path: "", changeFrequency: "monthly" as const, priority: 1.0 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/work", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/work/hippo-transfers", changeFrequency: "yearly" as const, priority: 0.7 },
  { path: "/work/bs1", changeFrequency: "yearly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
