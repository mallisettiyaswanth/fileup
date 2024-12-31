"use client";
import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/constants";
import React from "react";

type Props = {};

const FilterButton = (props: Props) => {
  return (
    <Button variant="outline" className="rounded-xl">
      <Icons.sort.outline />
      Sort
    </Button>
  );
};

export default FilterButton;
