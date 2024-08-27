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
    sitemap: ["https://4srent.es/sitemap.xml", 'https://4srent.es/blog/sitemap.xml'],
  };
}
