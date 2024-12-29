"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/constants";
import React from "react";

type Props = {};

const UploadButton = (props: Props) => {
  return (
    <Button className="rounded-xl">
      <Icons.upload.filled />
      Upload
    </Button>
  );
};

export default UploadButton;
