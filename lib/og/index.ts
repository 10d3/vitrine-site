import type { OGTemplate } from "./types";
import { ModernDarkTemplate } from "@/components/og-template/modern-dark";
import { ElegantSerifTemplate } from "@/components/og-template/elegant-serif";
import { MinimalBlogTemplate } from "@/components/og-template/minimal-blog";
import { AnimeStyleTemplate } from "@/components/og-template/anime-style";
import { CyberpunkTemplate } from "@/components/og-template/cyberpunk";
import { EcommerceProductTemplate } from "@/components/og-template/ecommerce-product";
import { LandingHeroTemplate } from "@/components/og-template/landing-hero";
import { MangaComicTemplate } from "@/components/og-template/manga-comic";
import { PortfolioTemplate } from "@/components/og-template/portfolio";
import { ProductShowcaseTemplate } from "@/components/og-template/product-showcase";
import { PunkBlogTemplate } from "@/components/og-template/punk-blog";
import { TechArticleTemplate } from "@/components/og-template/tech-article";

export const templates: Record<string, OGTemplate> = {
  "minimal-blog": MinimalBlogTemplate,
  "modern-dark": ModernDarkTemplate,
  "elegant-serif": ElegantSerifTemplate,
  "anime-style": AnimeStyleTemplate,
  cyberpunk: CyberpunkTemplate,
  "ecommerce-product": EcommerceProductTemplate,
  "landing-hero": LandingHeroTemplate,
  "manga-comic": MangaComicTemplate,
  portfolio: PortfolioTemplate,
  "product-showcase": ProductShowcaseTemplate,
  "punk-blog": PunkBlogTemplate,
  "tech-article": TechArticleTemplate,
};

export { MinimalBlogTemplate, ModernDarkTemplate, ElegantSerifTemplate };
export * from "./types";
