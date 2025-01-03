"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { Dispatch, SetStateAction, useState } from "react";
import ZoomableImage from "../zoomable-image";
import { Icons } from "@/lib/constants";
import {
  useFileDelete,
  useMarkFileFavouriteToggle,
} from "@/react-query/mutation";
import { Spinner } from "../spinner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type Props = {
  file: {
    type: string;
    name: string;
    url: string;
    size: number;
    id: string;
    isFavourite: boolean;
  };
  isSelected: boolean;
  setSelectedIds: Dispatch<SetStateAction<string[]>>;
};

const TypeSheet = ({ file, isSelected, setSelectedIds }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { mutate: makeFileFavourite, isPending: isFileFavourting } =
    useMarkFileFavouriteToggle();
  const {
    mutate: deleteFile,
    isPending: isFileDeleting,
    isSuccess: isFileDeleted,
  } = useFileDelete();

  const sheetButtons = [
    {
      icon: Icons.download.filled,
      fn: () => {},
    },
    {
      icon: isFileFavourting
        ? Spinner
        : file.isFavourite
        ? Icons.star.filled
        : Icons.star.outline,
      fn: () => makeFileFavourite(file.id),
    },
    {
      icon: isFileDeleting ? Spinner : Icons.trash.filled,
      fn: () => {
        deleteFile(file.id);
        if (!isFileDeleting) setSheetOpen(false);
      },
    },
    {
      icon: Icons.share.filled,
      fn: () => {},
    },
    {
      icon: Icons.archive.filled,
      fn: () => {},
    },
  ];

  return (
    <Sheet onOpenChange={setSheetOpen} open={sheetOpen}>
      <div className="flex flex-col gap-1">
        <div
          className={cn(
            "h-32 overflow-hidden rounded-md relative group border-2 ",
            isSelected && "border-primary"
          )}
        >
          <img
            src={file.url}
            alt={file.name}
            className="object-contain w-full h-32"
          />
          <div
            className={cn(
              "bg-black bg-opacity-20 w-full h-full absolute top-0 left-0 z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 p-3",
              isSelected ? "" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="w-full">
              <Checkbox
                checked={isSelected}
                onCheckedChange={() =>
                  setSelectedIds((prev: string[]) =>
                    prev.includes(file.id)
                      ? prev.filter((id) => id !== file.id)
                      : [...prev, file.id]
                  )
                }
              />
            </div>
            <SheetTrigger>
              <Button variant="outline">Preview</Button>
            </SheetTrigger>
          </div>
        </div>

        <div className="text-gray-400 truncate text-sm text-start px-3">
          <span className="w-2/3">{file.name}</span>
        </div>
      </div>
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
            {sheetButtons.map((sheetbutton, index: number) => {
              return (
                <button
                  key={index}
                  className="flex items-center justify-center p-2 border shadow-sm rounded-md hover:bg-primary/20 transition-all"
                  onClick={sheetbutton.fn}
                >
                  <sheetbutton.icon
                    className="h-5 w-5 text-primary"
                    color="#7c3aed"
                  />
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
