"use client";

import * as React from "react";
import { BarChart3, LayoutDashboard, Folder, List, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Image from "next/image";
import Link from "next/link";
import { PiArticleNyTimesDuotone } from "react-icons/pi";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const sidebarData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Product",
      url: "/admin/product",
      icon: List,
    },
    {
      title: "Bundle",
      url: "/admin/bundle",
      icon: BarChart3,
    },
    {
      title: "Coupon",
      url: "/admin/coupon",
      icon: Folder,
    },
    {
      title: "Order",
      url: "/admin/order",
      icon: Users,
    },
    {
      title: "Blog",
      url: "/admin/blog",
      icon: PiArticleNyTimesDuotone,
    },
  ],
};

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#" className="">
                <Image
                  src="/favicon.png"
                  width={1000}
                  height={1000}
                  alt={""}
                  className="!size-8"
                />
                <span className="text-base font-semibold">{`Vitanou`}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
