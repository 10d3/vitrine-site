import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { FilePen, LayoutGrid, List, Settings, Tag, Users } from 'lucide-react'

export default function SideBar() {
    return (
        <aside className=' sticky left-0 w-auto h-full'>
            <div className="bg-gray-950 md:min-h-screen text-white flex flex-col items-start p-6 gap-6 w-full md:w-auto shrink-0">
                <nav className="flex flex-col items-start w-auto gap-1">
                    <Link
                        href="/admin"
                        className="flex items-center gap-2 w-full py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
                        prefetch={false}
                    >
                        <LayoutGrid className="w-5 h-5" />
                        {/* <span>Dashboard</span> */}
                    </Link>
                    <Link
                        href="/admin/newpost"
                        className="flex items-center gap-2 w-full py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
                        prefetch={false}
                    >
                        <FilePen className="w-5 h-5" />
                        {/* <span>Create Blog Post</span> */}
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 w-full py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
                        prefetch={false}
                    >
                        <List className="w-5 h-5" />
                        {/* <span>Manage Posts</span> */}
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 w-full py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
                        prefetch={false}
                    >
                        <Tag className="w-5 h-5" />
                        {/* <span>Manage Categories</span> */}
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 w-full py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
                        prefetch={false}
                    >
                        <Users className="w-5 h-5" />
                        {/* <span>User Management</span> */}
                    </Link>
                </nav>
                <div className="mt-auto flex items-center gap-2 w-full">
                    {/* <Avatar className="w-8 h-8 border">
                        <AvatarImage src="/placeholder.svg" alt="User Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-medium">John Doe</span>
                        <span className="text-sm text-gray-400">Admin</span>
                    </div> */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="ml-auto">
                                <Settings className="w-5 h-5" />
                                <span className="sr-only">Settings</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Account Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </aside>
    )
}
