// sitemap.ts
import { findBlogs } from "@/lib/actions/BlogPostAction";
import type { MetadataRoute } from "next";

// Main function to generate a sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Make sure the environment variable is defined
  const baseUrl = "https://isolatucasa.com";
  const blogs = await findBlogs();

  // Generate the sitemap entries
  return (blogs ?? []).map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt,
  }));
}
