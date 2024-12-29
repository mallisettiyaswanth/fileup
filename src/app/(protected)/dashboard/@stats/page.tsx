import DashboardStatsChart from "@/components/global/dashboard-stats-chart";
import { Card } from "@/components/ui/card";
import React from "react";

type Props = {};

const StatsDashboard = (props: Props) => {
  return (
    <Card className="flex-[2] flex flex-col gap-5">
      <h1>Storage usage</h1>
      <div className="">
        <DashboardStatsChart />
      </div>
    </Card>
  );
};

export default StatsDashboard;
