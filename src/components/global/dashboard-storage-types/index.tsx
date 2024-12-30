import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

type FileType = {
  icon: LucideIcon | IconType;
  title: string;
  occupied: number;
  total: 100;
  url: string;
  items: number;
  color: string;
};

type Props = {
  fileType: FileType;
};

const DashboardStorageType = ({ fileType }: Props) => {
  const Icon = fileType.icon;

  return (
    <Link href={fileType.url} className="flex-1">
      <Card className="flex-1 rounded-md bg-white shadow-sm flex items-center cursor-pointer p-4 flex-col gap-5">
        <div className="flex w-full gap-3 items-center">
          <div
            className={`flex items-center justify-center p-2 border shadow-sm rounded-md bg-primary`}
          >
            {Icon ? (
              <Icon className="h-5 w-5 text-white" />
            ) : (
              <div className="text-gray-400">No icon available</div>
            )}
          </div>
          <div className="flex flex-col text-sm w-full">
            <h1 className="tracking-wide truncate overflow-hidden whitespace-nowrap">
              {fileType.title}
            </h1>
            <span className="text-xs text-gray-600">
              {fileType.items} items
            </span>
          </div>
        </div>
        <div className="w-full flex-col gap-2">
          <Progress value={fileType.occupied} className="z-0" />
          <span className="text-xs text-gray-600 px-1">
            {fileType.occupied} GB of {fileType.total} GB
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default DashboardStorageType;
