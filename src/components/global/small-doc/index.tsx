import { Icons } from "@/lib/constants";
import React from "react";

type Props = {
  data: {
    type: string;
    name: string;
    size: string | number;
    category: string;
  };
};

const SmallDoc = ({ data }: Props) => {
  const Icon = Icons[data.type]?.filled;

  return (
    <div className="flex-1 border rounded-md bg-white shadow-sm flex flex-row gap-3 h-fit p-3 items-center cursor-pointer">
      <div className="flex items-center justify-center p-2 border shadow-sm rounded-md">
        {Icon ? (
          <Icon className="h-5 w-5 text-primary" />
        ) : (
          <div className="text-gray-400">No icon available</div>
        )}
      </div>
      <div className="flex flex-col text-sm w-full">
        <h1 className="tracking-wide truncate overflow-hidden whitespace-nowrap">
          {data.name}
        </h1>
        <div className="flex gap-1 items-center text-xs text-gray-600">
          <span>{data.size}</span>
          <span className="flex items-center">
            <Icons.dot.outline className="font-bold text-black" />
            {data.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallDoc;
