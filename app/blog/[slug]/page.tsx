import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { blogs } from "@/lib/blog/blog"
import Image from "next/image"
import Link from "next/link"

interface paramsProp {
    params: {
        slug: string
    }
}
export default function page({ params }: paramsProp) {

    const blog = blogs.find(blog => blog.slug === params.slug)
    console.log(blog?.content)

    return (
        <div className="flex flex-col min-h-[100dvh] w-full">
            <header className="bg-gray-900 text-white py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            {blog?.title}
                        </h1>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg" alt="Author Avatar" width={40} height={40} className="rounded-full" />
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium">{blog?.author}</span>
                            </div>
                            <span className="text-sm text-gray-400">May 15, 2023</span>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex items-center justify-center w-full my-4">
                <Image
                    src={blog?.image as string}
                    alt="Blog Post Image"
                    width={1200}
                    height={1200}
                    priority
                    className=" object-cover w-full max-h-[400px]"
                />
            </div>
            <main className="container mx-auto px-2 md:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                    {blog?.content}
                </div>
                <div className="space-y-8">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                        <div className="space-y-4">
                            {blogs.map((blog, i) => (
                            <Link key={i} href={`/blog/${blog.slug}`} className="block font-bold hover:text-gray-300 dark:hover:text-white" prefetch={false}>
                                {blog.title}
                            </Link>))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}