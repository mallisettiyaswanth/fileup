import SmallDoc from "@/components/global/small-doc";
import { Card } from "@/components/ui/card";
import React from "react";

type Props = {};

const temp = [
  {
    type: "document",
    name: "Mallisetti_Yaswanth.docx",
    size: "40 GB",
    category: "Document",
  },
  {
    type: "image",
    name: "Mallisetti_Yaswanth.docx",
    size: "100 MB",
    category: "Image",
  },
  {
    type: "video",
    name: "Mallisetti_Yaswanth.docx",
    size: "5 TB",
    category: "Video",
  },
];

const Files = (props: Props) => {
  return (
    <Card className="flex-[2] border bg-white flex flex-col gap-3">
      <div className="w-full flex flex-col">
        <h1 className="text-lg">Recent uploads</h1>
        <p className="text-sm text-gray-500">
          last 3 uploads are displayed here.
        </p>
      </div>
      <div className="w-full gap-2 flex">
        {temp.map((doc, index: number) => {
          return <SmallDoc data={doc} key={index} />;
        })}
      </div>
    </Card>
  );
};

export default Files;
