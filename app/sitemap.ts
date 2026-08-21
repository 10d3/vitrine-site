import { findBlogs } from "@/lib/actions/BlogPostAction";
import type { MetadataRoute } from "next";

const BASE = "https://isolatucasa.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/servicios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/gestion-alquiler`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/gestion-turistica`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/preguntas-frecuentes`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/sobre-nosotros`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/testimonios`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/politica-de-privacidad`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/politica-de-cookies`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terminos-de-uso`, changeFrequency: "yearly", priority: 0.2 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogs = await findBlogs();
    blogPages = (blogs ?? [])
      .filter((b) => b.published)
      .map((b) => ({
        url: `${BASE}/blog/${b.slug}`,
        lastModified: b.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch (e) {
    // Si la DB no está disponible en build, el sitemap se genera solo con las páginas estáticas
    console.error("sitemap: unable to load blogs", e);
  }

  return [...staticPages, ...blogPages];
}
