import CommonHeader from "@/components/global/common-header";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <CommonHeader />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">Documents</h1>
      </div>
    </div>
  );
};

export default Dashboard;
