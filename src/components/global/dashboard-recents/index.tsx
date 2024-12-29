import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import SmallDoc from "@/components/global/small-doc";
import { Icons } from "@/lib/constants";

type Props = {};

const temp = [
  {
    type: "document",
    name: "Mallisetti_Yaswanth.docx",
    size: "4.7 MB",
    category: "Document",
  },
  {
    type: "audio",
    name: "Audio_Book.mp3",
    size: "40 MB",
    category: "Audio",
  },
  {
    type: "video",
    name: "Bahubali.mp4",
    size: "200 MB",
    category: "Video",
  },
];

const DashboardRecents = (props: Props) => {
  return (
    <div className="py-3 flex flex-col gap-1">
      <div className="w-full flex items-center justify-between h-fit">
        <h1 className="px-3">Recent uploads</h1>
        <Button variant="ghost">
          view more
          <Icons.arrow_right.outline />
        </Button>
      </div>
      <div className="flex gap-5">
        {temp.map((tempData, index: number) => {
          return <SmallDoc key={index} data={tempData} />;
        })}
      </div>
    </div>
  );
};

export default DashboardRecents;
