"use client";

import { ChevronRight, SubscriptIcon, type LucideIcon } from "lucide-react";

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
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconType } from "react-icons/lib";
import { usePathname } from "next/navigation";

const getSidebarTab = (item: {
  title: string;
  isActive?: boolean;
  url: string;
  icon?: LucideIcon | IconType;
  filledIcon?: LucideIcon | IconType;
  items?: {
    title: string;
    url: string;
    icon?: LucideIcon | IconType;
    filledIcon?: LucideIcon | IconType;
  }[];
}) => {
  const pathName = usePathname();
  const { state, isMobile } = useSidebar();
  if (item && item.items && item.items?.length > 0 && state === "expanded") {
    return (
      <Collapsible
        key={item.title}
        asChild
        defaultOpen={item.isActive}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton
                    asChild
                    className={`${
                      pathName === subItem.url &&
                      "bg-primary hover:bg-primary/95 text-white hover:text-white"
                    }`}
                  >
                    <a href={subItem.url} className="flex gap-2">
                      {subItem &&
                      subItem.icon &&
                      subItem.filledIcon &&
                      subItem.url === pathName ? (
                        <subItem.filledIcon className="!text-white" />
                      ) : (
                        subItem.icon && <subItem.icon />
                      )}
                      <span>{subItem.title}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  } else if (item && item.items && item.items?.length > 0) {
    return (
      <DropdownMenu key={item.title}>
        <SidebarMenuItem>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              {item && item.icon && item.filledIcon && item.url === pathName ? (
                <item.filledIcon />
              ) : (
                item.icon && <item.icon />
              )}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          {item.items?.length ? (
            <DropdownMenuContent
              side={isMobile ? "bottom" : "right"}
              align={isMobile ? "end" : "start"}
              className="min-w-56 rounded-lg"
            >
              {item.items.map((item) => (
                <DropdownMenuItem asChild key={item.title}>
                  <a href={item.url}>{item.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          ) : null}
        </SidebarMenuItem>
      </DropdownMenu>
    );
  }

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        isActive={item.isActive}
        className={`${
          pathName === item.url &&
          "bg-primary hover:bg-primary/95 text-white hover:text-white"
        }`}
      >
        {item && item.icon && item.filledIcon && item.url === pathName ? (
          <item.filledIcon className="text-white" />
        ) : (
          item.icon && <item.icon />
        )}
        <a href={item.url}>{item.title}</a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function NavMain({
  items,
  label,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | IconType;
    filledIcon?: LucideIcon | IconType;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  label: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, index: number) => getSidebarTab(item))}
      </SidebarMenu>
    </SidebarGroup>
  );
}


