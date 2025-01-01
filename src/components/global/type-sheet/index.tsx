"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import ZoomableImage from "../zoomable-image";
import { Icons } from "@/lib/constants";

type Props = {
  file: {
    type: string;
    name: string;
    url: string;
    size: number;
  };
};

const TypeSheet = ({ file }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const sheetButtons = [
    {
      icon: Icons.download.filled,
      fn: () => {},
    },
    {
      icon: Icons.star.outline,
      fn: () => {},
    },
    {
      icon: Icons.trash.filled,
      fn: () => {},
    },
    {
      icon: Icons.share.filled,
      fn: () => {},
    },
    {
      icon: Icons.expand.filled,
      fn: () => setDialogOpen(true),
    },
  ];
  return (
    <Sheet>
      <SheetTrigger>
        <div className="bg-gray-500 h-24 w-24">{file.name}</div>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] py-10 flex flex-col gap-5">
        <SheetHeader>
          <ZoomableImage
            img={{
              src: file.url,
              alt: file.name,
            }}
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
          />
        </SheetHeader>
        <div className="flex h-full flex-col gap-10">
          <div className="flex gap-3 w-full justify-around px-8">
            {sheetButtons.map((sheetbutton) => {
              return (
                <button
                  className="flex items-center justify-center p-2 border shadow-sm rounded-md hover:bg-primary/20 transition-all"
                  onClick={sheetbutton.fn}
                >
                  <sheetbutton.icon className="h-5 w-5 text-primary" />
                </button>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 h-full">
            <div className="flex flex-col">
              <h1 className="text-lg">
                {file.name.split(".").slice(0, -1).join(".")}
              </h1>
              <p className="text-gray-500">{file.type}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-base">Info</h1>
              <div className="w-full flex justify-between text-sm">
                <span className="text-gray-400">Size</span>
                <span>{(file.size / 1024).toFixed(0)} KB</span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TypeSheet;
