import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://artgospelstudio.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://artgospelstudio.com/projects",
      lastModified: new Date(),
    },
  ];
}