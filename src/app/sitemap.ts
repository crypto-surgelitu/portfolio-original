import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import fs from "fs";
import path from "path";

const EXCLUDE_DIRS = new Set(["api"]);
const EXCLUDE_FILES = new Set([
  "layout.tsx",
  "page.tsx.bak",
  "not-found.tsx",
  "globals.css",
  "robots.ts",
  "sitemap.ts",
]);

const PRIORITY_MAP: Record<string, number> = {
  "": 1.0,
  "/about": 0.8,
  "/services": 0.9,
  "/work": 0.9,
  "/work/hippo-transfers": 0.7,
  "/work/bs1": 0.7,
  "/contact": 0.8,
};

const FREQ_MAP: Record<string, "monthly" | "yearly"> = {
  "": "monthly",
  "/about": "monthly",
  "/services": "monthly",
  "/work": "monthly",
  "/work/hippo-transfers": "yearly",
  "/work/bs1": "yearly",
  "/contact": "yearly",
};

function discoverRoutes(dir: string, basePath = ""): string[] {
  const routes: string[] = [];
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return routes;
  }

  for (const entry of entries) {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    if (EXCLUDE_FILES.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const nextBase = basePath ? `${basePath}/${entry.name}` : entry.name;
      if (fs.existsSync(path.join(fullPath, "page.tsx"))) {
        routes.push(`/${nextBase}`);
      }
      routes.push(...discoverRoutes(fullPath, nextBase));
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "src", "app");
  const discovered = discoverRoutes(appDir);

  const routeSet = new Set(["/", ...discovered]);
  const sorted = Array.from(routeSet).sort();

  return sorted.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: FREQ_MAP[route] ?? "monthly",
    priority: PRIORITY_MAP[route] ?? 0.5,
  }));
}
