"use client";
import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/constants";
import React from "react";

type Props = {};

const SortButton = (props: Props) => {
  return (
    <Button variant="outline" className="rounded-xl">
      <Icons.filter.outline />
      Filters
    </Button>
  );
};

export default SortButton;
