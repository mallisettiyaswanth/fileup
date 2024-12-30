import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 px-4 border sticky top-0 backdrop-blur-sm">
          <SidebarTrigger className="-ml-1" />
          <div className="flex-1 flex items-center justify-between">
            <div className="border rounded-lg flex items-center px-3 hover:border-2 focus-within:border-2 hover:border-primary focus-within:border-primary transition-colors shadow-sm bg-white">
              <Icons.search.filled />
              <Input
                className="border-none outline-none shadow-none focus:ring-0 focus:outline-none"
                placeholder="Search files"
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="p-3">
                <Icons.notifications.outline />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex gap-3 items-center">
                    <Avatar>
                      <AvatarImage src="" />
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
  );
}
