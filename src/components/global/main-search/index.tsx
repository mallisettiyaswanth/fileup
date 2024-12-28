"use client";
import { Badge } from "@/components/shadcn/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { Input } from "@/components/shadcn/input";
import { Icons } from "@/lib/constants";
import React, { useEffect, useState } from "react";

type Props = {};

const SearchBar = (_props: Props) => {
  const [isSearchModalOpen, setSearchModelOpen] = useState<boolean>(false);

  useEffect(() => {
    const listner = (e: KeyboardEvent): void => {
      if (e.ctrlKey && e.key.toLocaleLowerCase() === "k") {
        e.stopPropagation();
        e.preventDefault();
        setSearchModelOpen((prev: boolean): boolean => !prev);
      }
    };
    window.addEventListener("keydown", listner);
    return () => window.removeEventListener("keydown", listner);
  }, []);

  return (
    <>
      <div className="flex-1 md:flex hidden border-2 rounded-full px-3 gap-3 items-center">
        <Icons.search className="text-primary" />
        <Dialog
          open={isSearchModalOpen}
          onOpenChange={() =>
            setSearchModelOpen((prev: boolean): boolean => !prev)
          }
        >
          <DialogTrigger className="flex-1 py-1">
            <div className="border-none outline-none active:outline-none active:border-none py-1 flex items-center justify-between flex-1 w-full">
              <span className="text-sm text-white/80">Search Automations</span>
              <Badge className="text-sm text-white/80 rounded-full">
                ctrl + K
              </Badge>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-80 md:max-w-lg rounded-md">
            <Input
              type="text"
              placeholder="Search Automations"
              className="w-full py-7 px-5 border-primary border-2"
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default SearchBar;
