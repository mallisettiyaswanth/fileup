import { Card } from "@/components/shadcn/card";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-between">
      {children}
      <div className="p-3 w-1/3">
        <Card className="rounded-sm p-3 w-full h-2/3">This is the card</Card>
      </div>
    </div>
  );
};

export default layout;
