import { Card } from "@/components/ui/card";
import React from "react";

type Props = {
  children: React.ReactNode;
  files: React.ReactNode;
  stats: React.ReactNode;
};

const Layout = ({ children, files, stats }: Props) => {
  return (
    <div className="h-full w-full flex flex-col gap-10 p-3">
      {children}
      <div className="flex gap-3 w-full h-full">
        {files}
        <div className="flex-1 h-full flex flex-col gap-3">
          {stats}
          <Card className="flex-1">This is add</Card>
        </div>
      </div>
    </div>
  );
};

export default Layout;
