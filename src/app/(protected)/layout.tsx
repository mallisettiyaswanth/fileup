import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Icons } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchBar from "@/components/global/search-bar";
import { Suspense } from "react";
import Loading from "./loading";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { prefetchGetImages } from "@/react-query/prefetch";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  await prefetchGetImages(queryClient);
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense
        fallback={
          <div className="flex w-full min-h-screen items-center justify-center">
            <Loading />
          </div>
        }
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-14 shrink-0 items-center gap-2 px-4 border sticky top-0 backdrop-blur-sm">
              <SidebarTrigger className="-ml-1" />
              <div className="flex-1 flex items-center justify-between">
                <SearchBar placeholder="Search" />
                <div className="flex gap-3">
                  <Button variant="outline" className="p-3">
                    <Icons.notifications.outline />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex gap-3 items-center">
                        <Avatar>
                          <AvatarImage src="" alt="User Avatar" />
                          <AvatarFallback>Img</AvatarFallback>
                        </Avatar>
                        <div>User Name</div>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>
            {children}
          </SidebarInset>
        </SidebarProvider>
      </Suspense>
    </HydrationBoundary>
  );
}
