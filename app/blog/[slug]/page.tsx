import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { blogs } from "@/lib/blog/blog"
import { prisma } from "@/lib/db/prisma"
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
        <div className="flex flex-col min-h-[100dvh]">
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
            <div>
                <Image
                    src={blog?.image as string}
                    alt="Blog Post Image"
                    width={1200}
                    height={600}
                    className="rounded-lg object-cover w-[50%] h-auto"
                />
            </div>
            <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                    {blog?.content}
                    {/* <p>
                        In the ever-evolving landscape of web development, React has emerged as a powerhouse, transforming the way
                        we build dynamic and responsive user interfaces. As a declarative JavaScript library, React simplifies the
                        process of creating complex UIs by breaking them down into reusable components.
                    </p>
                    <p>
                        One of the key advantages of React is its virtual DOM (Document Object Model), which allows for efficient
                        updates and optimizations. By keeping track of changes in the virtual DOM and only updating the necessary
                        parts of the actual DOM, React minimizes the number of costly DOM manipulations, resulting in faster and
                        more responsive applications.
                    </p>
                    <Image
                        src="/placeholder.svg"
                        alt="Blog Post Image"
                        width={1200}
                        height={600}
                        className="rounded-lg object-cover w-full aspect-[16/9]"
                    />
                    <p>
                        Another notable feature of React is its component-based architecture. By breaking down the user interface
                        into self-contained, reusable components, developers can create modular, maintainable, and scalable
                        applications. This approach promotes code reuse, making it easier to develop and update complex web
                        applications.
                    </p>
                    <p>
                        React&apos;s ecosystem is also a significant advantage, with a vast array of third-party libraries and tools
                        available. From state management solutions like Redux and MobX to UI component libraries, the React
                        community has produced a rich ecosystem that empowers developers to build sophisticated web applications
                        quickly and efficiently.
                    </p>
                    <p>
                        As the web continues to evolve, React&apos;s focus on performance, modularity, and developer experience makes it
                        a compelling choice for building modern, scalable, and maintainable web applications. By embracing the power
                        of React, developers can create cutting-edge user experiences that delight users and drive business success.
                    </p> */}
                </div>
                <div className="space-y-8">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                        <div className="space-y-4">
                            {blogs.map((blog, i) => (
                            <Link key={i} href={`/blog${blog.slug}`} className="block hover:text-gray-900 dark:hover:text-white" prefetch={false}>
                                {blog.title}
                            </Link>))}
                            {/* <Link href="#" className="block hover:text-gray-900 dark:hover:text-white" prefetch={false}>
                                Optimizing React Performance with Memoization
                            </Link>
                            <Link href="#" className="block hover:text-gray-900 dark:hover:text-white" prefetch={false}>
                                Building a Responsive Design with React and Tailwind CSS
                            </Link>
                            <Link href="#" className="block hover:text-gray-900 dark:hover:text-white" prefetch={false}>
                                Implementing State Management in React with Redux
                            </Link> */}
                        </div>
                    </div>
                    {/* <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-4">Categories</h3>
                        <div className="space-y-4">
                            <Link href="#" className="block hover:text-gray-900 dark:hover:text-white" prefetch={false}>
                                React
                            </Link>
                            <Link href="#" className="block hover:text-gray-900 dark:hover:text-white" prefetch={false}>
                                Web Development
                            </Link>
                            <Link href="#" className="block hover:text-gray-900 dark:hover:text-white" prefetch={false}>
                                Front-end
                            </Link>
                            <Link href="#" className="block hover:text-gray-900 dark:hover:text-white" prefetch={false}>
                                JavaScript
                            </Link>
                        </div>
                    </div> */}
                </div>
            </main >
        </div >
    )
}