import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { findBlogBySlug } from "@/lib/actions/BlogPostAction";
import { blogs } from "@/lib/blog/blog";
import { Calendar, Eye, User } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

interface paramsProp {
  params: {
    slug: string;
  };
}
export async function generateMetadata({ params }: paramsProp) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "anonymous";
  const blog = await findBlogBySlug(params.slug, ip);
  // const blog = blogs.find(blog => blog.slug === params.slug)
  return {
    title: blog?.title,
    openGraph: {
      title: blog?.title,
      // description: `${blog?.description}`,
      url: `isolatucasa.com/blog/${blog?.slug}`,
      siteName: "ISOLA",
      images: [
        {
          url: `isolatucasa.com/${blog?.coverImage}`, // Dynamic og route
          width: 800,
          height: 600,
        },
        {
          url: `isolatucasa.com/${blog?.coverImage}`, // Dynamic og route
          width: 1800,
          height: 1600,
          alt: `image of ${blog?.title}`,
        },
      ],
      locale: "es_SP",
      type: "website",
    },
  };
}
export default async function page({ params }: paramsProp) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "anonymous";
  const blog = await findBlogBySlug(params.slug, ip);

   return (
    <article className="min-h-screen bg-background max-w-5xl mx-auto">
      <header className="border-b border-border/50">
        <div className="max-w-4xl mx-auto px-2 md:px-6 py-6 md:py-16 lg:py-24">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
              {blog?.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>admin</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>
                  {blog?.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{blog?.views} views</span>
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