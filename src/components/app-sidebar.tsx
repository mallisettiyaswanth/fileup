"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Icons } from "@/lib/constants";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Icons.dashboard.outline,
      filledIcon: Icons.dashboard.filled,
      isActive: true,
    },
    {
      title: "Recent files",
      url: "/recents",
      icon: Icons.clock.outline,
      filledIcon: Icons.clock.filled,
    },
    {
      title: "Documents",
      url: "/documents",
      icon: Icons.document.outline,
      filledIcon: Icons.document.filled,
    },
    {
      title: "Images",
      url: "/images",
      icon: Icons.image.outline,
      filledIcon: Icons.image.filled,
    },
    {
      title: "Videos",
      url: "/videos",
      icon: Icons.video.outline,
      filledIcon: Icons.video.filled,
    },
    {
      title: "Audios",
      url: "/audios",
      icon: Icons.audio.outline,
      filledIcon: Icons.audio.filled,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Icons.trash.outline,
      filledIcon: Icons.trash.filled,
    },
  ],
  footer: [
    {
      title: "Settings",
      url: "/settings",
      icon: Icons.settings.outline,
      filledIcon: Icons.settings.filled,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} lable />
      </SidebarContent>
      <SidebarFooter className="p-0">
        <NavMain items={data.footer} />
      </SidebarFooter>
    </Sidebar>
  );
}
