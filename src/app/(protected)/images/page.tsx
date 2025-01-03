"use client";

import React, { useState } from "react";
import Loading from "@/app/(protected)/loading";
import CommonHeader from "@/components/global/common-header";
import TypeSheet from "@/components/global/type-sheet";
import { useGetImages } from "@/react-query/query";
import EmptyState from "../empty";
import UploadButton from "@/components/global/buttons/upload-button";
import SearchBar from "@/components/global/search-bar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {};

const Images = (props: Props) => {
  const { data: files, isLoading, isError, refetch } = useGetImages();
  const [view, setView] = useState<"grid" | "table">("grid");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelectAll = () => {
    if (selectedIds.length === files?.data.length) {
      // If all files are selected, deselect them
      setSelectedIds([]);
    } else {
      // Otherwise, select all files
      setSelectedIds(files?.data.map((file) => file.id));
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>Error loading images. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 p-5">
      <CommonHeader title="Images" />
      <div className="flex flex-col gap-7 p-3">
        <div className="flex justify-between">
          <div className="flex gap-3 h-full items-center">
            <SearchBar placeholder="Search Images" />
            {files?.data.length > 0 && (
              <>
                <Checkbox
                  checked={selectedIds.length === files?.data.length}
                  onCheckedChange={handleSelectAll}
                />
                <div>Select all</div>
              </>
            )}
          </div>
          <div className="flex gap-3">
            {selectedIds.length > 0 && (
              <Button variant="destructive" className="h-full">
                Delete
              </Button>
            )}

            <ToggleGroup
              type="single"
              value={view}
              onValueChange={(value: "grid" | "table") => setView(value)}
            >
              <ToggleGroupItem value="grid" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="table" aria-label="Toggle strikethrough">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <EmptyState
          condition={files?.data.length === 0}
          title="No images found"
          desc="Try uploading an image."
          externalButton={<UploadButton />}
        >
          {view === "grid" && (
            <div className="grid grid-cols-5 gap-3 gap-y-5">
              {files?.data?.map((file: any, index: number) => (
                <TypeSheet
                  key={index}
                  file={file}
                  isSelected={selectedIds.includes(file.id)}
                  setSelectedIds={setSelectedIds}
                />
              ))}
            </div>
          )}
        </EmptyState>
      </div>
    </div>
  );
};

export default Images;
