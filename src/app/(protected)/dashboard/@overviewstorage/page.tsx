import DashboardChart from "@/components/global/dashboard-all-files-chart";
import DashboardStorageType from "@/components/global/dashboard-storage-types";
import { Icons } from "@/lib/constants";
import { LucideIcon } from "lucide-react";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {};

type FileType = {
  icon: LucideIcon | IconType;
  title: string;
  occupied: number;
  total: 100;
  url: string;
  items: number;
  color: string;
};

const fileTypeData: FileType[] = [
  {
    icon: Icons.image.filled,
    title: "Image",
    occupied: 40,
    total: 100,
    items: 100,
    url: "/images",
    color: "#4c6de8",
  },
  {
    icon: Icons.video.filled,
    title: "Video",
    occupied: 20,
    total: 100,
    items: 100,
    url: "/images",
    color: "#8146e7",
  },
  {
    icon: Icons.document.filled,
    title: "Document",
    occupied: 70,
    total: 100,
    items: 100,
    url: "/images",
    color: "#e8b568",
  },
  {
    icon: Icons.other.filled,
    title: "Other",
    occupied: 55,
    total: 100,
    items: 100,
    url: "/images",
    color: "#e8b568",
  },
];

const OverviewStorage = (props: Props) => {
  return (
    <div className="w-full rounded-sm flex flex-col">
      <h1 className="text-lg">Overview storage</h1>
      <DashboardChart />
      <div className="w-full flex gap-3 flex-col lg:flex-row">
        {fileTypeData.map((fileType: FileType, index: number) => {
          return <DashboardStorageType key={index} fileType={fileType} />;
        })}
      </div>
    </div>
  );
};

export default OverviewStorage;
