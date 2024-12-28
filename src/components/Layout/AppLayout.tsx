"use client";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/shadcn/sidebar";
import SearchBar from "@/components/global/main-search";
import { Button } from "@/components/shadcn/button";
import { Icons } from "@/lib/constants";
import { SidebarTrigger } from "@/components/shadcn/sidebar";
import Header from "@/components/global/header";
import { usePathname } from "next/navigation";
import CreateAutomation from "@/components/global/create-automation";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-full p-2 flex flex-col">
        <div className="p-3 flex gap-3 items-center justify-between">
          <SearchBar />
          <SidebarTrigger className="md:hidden block" />
          <div className="flex gap-3">
            <CreateAutomation />
            <Button className="bg-white rounded-full hover:bg-white/90">
              <Icons.notifications color="red" />
            </Button>
          </div>
        </div>
        <Header
          icon={pathname.split("/")[1]}
          slug={
            pathname.split("/")[1].toUpperCase()[0] +
            pathname.split("/")[1].toLowerCase().substring(1)
          }
        />
        <div className="h-full flex-1 rounded-lg bg-transparent">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
