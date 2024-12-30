import { Card } from "@/components/ui/card";
import React from "react";

type Props = {};

const Files = (props: Props) => {
  return (
    <Card className="flex-[2] border bg-white flex flex-col gap-3">
      <div className="w-full flex flex-col">
        <h1 className="text-lg">Recent uploads</h1>
        <p className="text-sm text-gray-500">
          last 3 uploads are displayed here.
        </p>
      </div>
    </Card>
  );
};

export default Files;
