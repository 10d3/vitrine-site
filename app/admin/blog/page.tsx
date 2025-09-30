import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PlusCircle,
  FileText,
  Edit3,
  TrendingUp,
  Eye,
} from "lucide-react";
import { findBlogs } from "@/lib/actions/BlogPostAction";
import PublishButton from "./_components/publish-button";
import Image from "next/image";

export default async function BlogAdminPage() {
  const blogs = await findBlogs();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="flex flex-col gap-4 mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h1 className="font-serif text-6xl tracking-tight text-foreground leading-tight">
              Blog Management
            </h1>
            <p className="text-lg text-muted-foreground">
              Create and manage your content with precision
            </p>
          </div>
          <Link href="/admin/blog/editor">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 rounded-full font-medium shadow-sm hover:shadow-md transition-all"
            >
              <PlusCircle className="h-5 w-5" />
              New Article
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border border-border bg-card hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-5xl font-light text-foreground tracking-tight">
                    {blogs?.length || 0}
                  </p>
                  <div className="p-3 rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                  Total Articles
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-5xl font-light text-foreground tracking-tight">
                    {blogs?.filter((b) => b.published).length || 0}
                  </p>
                  <div className="p-3 rounded-full bg-green-500/10">
                    <TrendingUp className="h-6 w-6 text-green-700 dark:text-green-400" />
                  </div>
                </div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                  Published
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-5xl font-light text-foreground tracking-tight">
                    {blogs
                      ?.reduce((total, blog) => total + blog.views, 0)
                      .toLocaleString() || 0}
                  </p>
                  <div className="p-3 rounded-full bg-blue-500/10">
                    <Eye className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                  </div>
                </div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                  Total Views
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-5xl font-light text-foreground tracking-tight">
                    {blogs?.filter((b) => !b.published).length || 0}
                  </p>
                  <div className="p-3 rounded-full bg-amber-500/10">
                    <Edit3 className="h-6 w-6 text-amber-700 dark:text-amber-400" />
                  </div>
                </div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                  Drafts
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-border bg-card">
          <CardHeader className="pb-8 px-10 pt-10">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <CardTitle className="font-serif text-3xl tracking-tight">
                  Content Library
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Manage and organize your articles
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium rounded-full bg-muted"
              >
                {blogs?.length || 0} articles
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="px-10 pb-10">
            {blogs?.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="rounded-2xl bg-muted/50 p-10 mb-8">
                  <FileText className="h-20 w-20 text-muted-foreground/40" />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-foreground">
                  No articles yet
                </h3>
                <p className="text-muted-foreground mb-10 max-w-md leading-relaxed text-lg">
                  Start creating compelling content that engages your audience
                  and builds your brand.
                </p>
                <Link href="/admin/blog/editor">
                  <Button
                    size="lg"
                    className="gap-2 px-10 py-6 rounded-full shadow-sm"
                  >
                    <PlusCircle className="h-5 w-5" />
                    Create First Article
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogs?.map((blog) => (
                  <Card
                    key={blog.slug}
                    className="h-full transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative"
                  >
                    <CardHeader className="">
                      <CardTitle className="font-serif text-2xl line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                        <Link
                          key={blog.id}
                          href={`/admin/blog/editor?blogId=${blog.id}`}
                          className="group"
                        >
                          {blog.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground font-mono">
                        /{blog.slug}
                      </CardDescription>
                    </CardHeader>

                    {blog.coverImage && (
                      <CardContent className="">
                        <Image
                          src={blog.coverImage as string}
                          alt={blog.title}
                          width={1000}
                          height={1000}
                        />
                      </CardContent>
                    )}
                    <CardFooter>
                      <div className=" border-t border-border/50">
                        <div className="flex items-center justify-between gap-3">
                          {blog.published ? (
                            <Badge
                              variant="outline"
                              className="text-xs font-medium px-3 py-1 rounded-full border-green-300 text-green-800 bg-green-50 dark:border-green-800 dark:text-green-300 dark:bg-green-950"
                            >
                              Published
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="text-xs font-medium px-3 py-1 rounded-full border-amber-300 text-amber-800 bg-amber-50 dark:border-amber-800 dark:text-amber-300 dark:bg-amber-950"
                            >
                              Draft
                            </Badge>
                          )}

                          <PublishButton
                            id={blog.id}
                            published={blog.published}
                          />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
