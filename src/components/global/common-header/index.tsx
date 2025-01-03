import React from "react";
import UploadButton from "@/components/global/buttons/upload-button";
import CreateButton from "@/components/global/buttons/create-button";

type Props = {
  title: string;
};

const CommonHeader = ({ title }: Props) => {
  return (
    <div className="w-full flex justify-between gap-3 items-end">
      <h1 className="text-3xl">{title}</h1>
      <div className="flex gap-3">
        <UploadButton />
        <CreateButton />
      </div>
    </div>
  );
};

export default CommonHeader;
