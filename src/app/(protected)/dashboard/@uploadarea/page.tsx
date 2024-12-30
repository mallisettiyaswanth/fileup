import { ReactHookFormDemo } from "@/components/global/uploader";
import { Card } from "@/components/ui/card";
import React from "react";

type Props = {};

const UploadArea = (props: Props) => {
  return (
    <Card className="flex-1">
      <ReactHookFormDemo />
    </Card>
  );
};

export default UploadArea;
