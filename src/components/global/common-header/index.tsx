import React from "react";
import UploadButton from "@/components/global/buttons/upload-button";
import CreateButton from "@/components/global/buttons/create-button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  buttons?: boolean;
  className?: string;
};

const CommonHeader = ({ title, buttons = true, className }: Props) => {
  return (
    <div
      className={cn("w-full flex justify-between gap-3 items-end", className)}
    >
      <h1 className="text-3xl">{title}</h1>
      {buttons && (
        <div className="flex gap-3">
          <UploadButton />
          <CreateButton />
        </div>
      )}
    </div>
  );
};

export default CommonHeader;
