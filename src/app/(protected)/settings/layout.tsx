"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

type SettingsTab = {
  label: string;
  url: string;
  value: string;
};
const tabs: SettingsTab[] = [
  {
    label: "General",
    url: "/settings/general",
    value: "/settings/general",
  },
  {
    label: "Notifications",
    url: "/settings/notifications",
    value: "/settings/notifications",
  },
  {
    label: "Billing",
    url: "/settings/billing",
    value: "/settings/billing",
  },
  {
    label: "Authentication",
    url: "/settings/authentication",
    value: "/settings/authentication",
  },
];

const Layout = ({ children }: Props) => {
  const pathName = usePathname();
  const navigate = useRouter();

  return (
    <div className="flex w-full h-full flex-1 flex-col">
      <Tabs value={pathName} className="px-5">
        <TabsList className="bg-transparent gap-3">
          {tabs.map((tab: SettingsTab, index: number) => {
            return (
              <TabsTrigger
                key={index}
                value={tab.url}
                onClick={() => {
                  navigate.push(tab.url);
                }}
                className="tracking-wide"
              >
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
      {/* <div className="flex-1 p-5">{children}</div> */}
    </div>
  );
};

export default Layout;
