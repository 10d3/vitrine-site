import {
  findBlogBySlug,
  findBlogBySlugWithoutView,
} from "@/lib/actions/BlogPostAction";
import { getBaseURL } from "@/lib/utils";
import { JsonLd } from "@/lib/seo/JsonLd";
import { Calendar, Eye, User } from "lucide-react";
import { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";

interface paramsProp {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: paramsProp): Promise<Metadata> {
  const { slug } = await params;
  const blog = await findBlogBySlugWithoutView(slug);
  if (!blog) return {};

  const title = blog.seoTitle || blog.title;
  const description = blog.seoDescription || blog.description || "";

  const ogImageUrl = `${getBaseURL()}/api/og?template=minimal-blog&title=${encodeURIComponent(title)}&logo=${encodeURIComponent("https://fhi5b89inu.ufs.sh/f/RPE5CBbg6eKjkfFs83icCP1fGOZSHyLix7snjqw3EzgJbN49")}&date=${blog?.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}&image=${encodeURIComponent(blog?.coverImage || "")}&bgColor=#a8d5d8`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blog/${blog.slug}`,
      siteName: "ISOLA",
      locale: "es_ES",
      type: "article",
      publishedTime: blog.createdAt?.toISOString(),
      modifiedTime: blog.updatedAt?.toISOString(),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function page({ params }: paramsProp) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "anonymous";

  const { slug } = await params;
  const blog = await findBlogBySlug(slug, ip);

  if (!blog) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.seoDescription || blog.description || undefined,
    image: blog.coverImage ? [blog.coverImage] : undefined,
    datePublished: blog.createdAt?.toISOString(),
    dateModified: blog.updatedAt?.toISOString(),
    author: { "@type": "Organization", name: "ISOLA" },
    publisher: { "@type": "Organization", name: "ISOLA" },
    mainEntityOfPage: `https://isolatucasa.com/blog/${blog.slug}`,
  };

  return (
    <article className="min-h-screen bg-background max-w-5xl mx-auto">
      <JsonLd data={articleSchema} />
      <header className="border-b border-border/50">
        <div className="max-w-4xl mx-auto px-2 md:px-6 py-6 md:py-8 lg:py-16">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ISOLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={blog.createdAt?.toISOString()}>
                  {blog?.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{blog?.views} lecturas</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {blog?.coverImage && (
        <div className="max-w-4xl mx-auto px-2 md:px-6 py-4 md:py-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
            <Image
              width={1200}
              height={675}
              src={blog.coverImage || "/placeholder.svg"}
              alt={blog.title}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-2 md:px-6 py-6 md:py-12 lg:py-16">
        <div
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none prose-p:text-justify
                     prose-headings:font-light prose-headings:text-foreground
                     prose-p:text-foreground/90 prose-p:leading-relaxed
                     prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                     prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                     prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                     prose-pre:bg-muted prose-pre:border prose-pre:border-border"
          dangerouslySetInnerHTML={{ __html: blog?.content as string }}
        />
      </main>
    </article>
  );
}
