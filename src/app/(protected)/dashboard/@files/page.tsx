import DashboardChart from "@/components/global/dashboard-all-files-chart";
import DashboardRecents from "@/components/global/dashboard-recents";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/lib/constants";
import React, { FC } from "react";

type Props = {};

const FilesDashboard: FC = (props: Props) => {
  return (
    <div className="flex-[3] flex flex-col gap-3">
      <DashboardRecents />
      <Card className="flex-1 gap-3 flex flex-col">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg">All files</h1>
          <div className="flex gap-3">
            <Button variant="outline" className="text-sm shadow-sm">
              <Icons.filters.outline className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" className="text-sm shadow-sm">
              <Icons.list.outline className="h-4 w-4" />
              List
            </Button>
          </div>
        </div>
        <DashboardChart />
      </Card>
    </div>
  );
};

export default FilesDashboard;
