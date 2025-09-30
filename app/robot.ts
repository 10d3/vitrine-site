import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin/",
      },
    ],
    sitemap: ["https://isolatucasa.com/sitemap.xml", 'https://isolatucasa.com/blog/sitemap.xml'],
  };
}
