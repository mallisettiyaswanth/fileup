import CreateButton from "@/components/global/create-button";
import UploadButton from "@/components/global/upload-button";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-xl tracking-wide">All files</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          All of your files are displayed here
        </p>
      </div>
      <div className="flex gap-3">
        <UploadButton />
        <CreateButton />
      </div>
    </div>
  );
};

export default Dashboard;
