import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aligneye.com";
  const routes = [
    "",
    "/why-alignpod",
    "/product",
    "/science",
    "/accessories",
    "/accessories/magnetic-collar",
    "/buy-now",
    "/posture-check",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.startsWith("/accessories") ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/accessories") || route === "/product" ? 0.9 : 0.8,
  }));
}
