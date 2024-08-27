// sitemap.ts
import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blog/blog";

// Main function to generate a sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  // Make sure the environment variable is defined
  const baseUrl = 'https://www.4srent.es' || "https://your-default-domain.com";

  // Generate the sitemap entries
  return blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.date,
  }));
}
