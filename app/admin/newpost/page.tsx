import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import Image from "next/image"
import FieldQuill from "@/components/shared/FieldQuill"
import PostForm from "@/components/shared/PostForm"

export default function page() {
    return (
        <section className="py-6">
            <header className=" flex items-center justify-between mb-6 px-8">
                <h1 className="text-2xl font-bold">Create Blog Post</h1>
                <div className="flex items-center gap-4">
                    <Button variant="outline">Save Draft</Button>
                    <Button>Publish</Button>
                </div>
            </header>
            <div className="flex min-h-screen flex-col md:flex-row">
                <div className="flex-1 p-6 md:p-10">
                    <div className=" rounded-lg shadow p-6 md:p-10">
                        <PostForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
