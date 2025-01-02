"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { BsDatabase } from "react-icons/bs";

type Props = {
  title: string;
  desc: string;
  children: React.ReactNode;
  condition: boolean;
  externalButton: React.ReactNode;
};

const EmptyState = ({
  title,
  desc,
  children,
  condition,
  externalButton,
}: Props) => {
  return condition ? (
    <div className="flex flex-col gap-5 items-center justify-center py-36">
      <div className="flex flex-col gap-3 items-center justify-center">
        <BsDatabase className="w-42 h-42 text-primary text-9xl" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl font-semibold">{title}</span>
          <span className="text-gray-500 text-sm">{desc}</span>
        </div>
      </div>
      {externalButton}
    </div>
  ) : (
    children
  );
};

export default EmptyState;
