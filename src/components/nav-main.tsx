"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { IconType } from "react-icons/lib";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
  lable,
}: {
  lable?: boolean;
  items: {
    title: string;
    url: string;
    icon: LucideIcon | IconType;
    filledIcon: LucideIcon | IconType;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathName = usePathname();
  return (
    <SidebarGroup>
      {lable && <SidebarGroupLabel>Menu</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton
              tooltip={item.title}
              className={`${
                pathName === item.url
                  ? "bg-primary text-white hover:bg-primary/75 hover:text-white"
                  : ""
              }`}
            >
              {pathName === item.url ? <item.filledIcon /> : <item.icon />}
              <a href={item.url}>{item.title}</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
