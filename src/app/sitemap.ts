import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://labswill.com",
      lastModified: new Date("2026-05-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}