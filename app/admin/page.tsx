import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function page() {
  return (
    <div className="container w-full mx-auto px-4 md:px-6 mt-6 min-h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col gap-4 justify-between items-center w-full h-full">
          <div className="flex flex-row w-full justify-between">
            <Card>
              <CardHeader>
                <CardTitle>Total Blog Posts</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-4xl font-bold">245</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Posts by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">72</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Lifestyle</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">48</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Travel</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">35</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Technology</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">28</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Business</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">22</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Design</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">18</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Food</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Recent Blog Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        The Ultimate Guide to Sustainable Living
                      </Link>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">May 15, 2023</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        10 Productivity Hacks for Remote Workers
                      </Link>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">May 10, 2023</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        The Art of Minimalist Travel: Packing Light
                      </Link>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">May 5, 2023</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        Mastering the Art of Work-Life Balance
                      </Link>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">May 1, 2023</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        The Future of Renewable Energy: Trends and Innovations
                      </Link>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">April 25, 2023</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full flex">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Top Viewed Blog Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">12,345</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        The Ultimate Guide to Sustainable Living
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">9,876</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        10 Productivity Hacks for Remote Workers
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">7,654</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        The Art of Minimalist Travel: Packing Light
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">5,432</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        Mastering the Art of Work-Life Balance
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">3,456</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <Link href="#" className="hover:underline" prefetch={false}>
                        The Future of Renewable Energy: Trends and Innovations
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}