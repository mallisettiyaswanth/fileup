"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/constants";
import React from "react";

type Props = {};

const CreateButton = (props: Props) => {
  return (
    <Button variant="outline" className="rounded-xl">
      <Icons.create.filled />
      Create
    </Button>
  );
};

export default CreateButton;
