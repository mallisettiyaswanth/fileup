"use client";

import * as React from "react";
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Icons } from "@/lib/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";

const data = {
  navMain: [
    {
      title: "My Storage",
      url: "#",
      icon: Icons.cloud.outline,
      filledIcon: Icons.cloud.filled,
      isActive: true,
      items: [
        {
          title: "Folders",
          url: "/folders",
          icon: Icons.folder.outline,
          filledIcon: Icons.folder.filled,
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
          title: "Others",
          url: "/others",
          icon: Icons.document.outline,
          filledIcon: Icons.document.filled,
        },
      ],
    },
    {
      title: "Recents",
      url: "/recents",
      icon: Icons.clock.outline,
      filledIcon: Icons.clock.filled,
    },
    {
      title: "Favouites",
      url: "/favourites",
      icon: Icons.star.outline,
      filledIcon: Icons.star.filled,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Icons.trash.outline,
      filledIcon: Icons.trash.filled,
    },
  ],
  overview: [
    {
      title: "Storage overview",
      url: "/dashboard",
      icon: Icons.dashboard.outline,
      filledIcon: Icons.dashboard.filled,
    },
  ],
  shared: [
    {
      title: "Shared folders",
      url: "/shared-folders",
      icon: Icons.shared_folder.outline,
      filledIcon: Icons.shared_folder.filled,
    },
    {
      title: "Shared files",
      url: "/shared-files",
      icon: Icons.shared_file.outline,
      filledIcon: Icons.shared_file.filled,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b py-4">File Up</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.overview} label="Overview" />
        <NavMain items={data.navMain} label="File Manager" />
        <NavMain items={data.shared} label="Shared" />
        {state === "expanded" && (
          <div className="flex flex-col w-full gap-5 p-3">
            <div className="flex gap-2 flex-col text-sm">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Icons.database.filled />
                  Storage
                </div>
                70%
              </div>
              <Progress value={70} />
            </div>
            <Button>Upgrade</Button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
