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
import { Italic, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useBulkDelete, useFileDelete } from "@/react-query/mutation";
import { toast } from "sonner";
import { Spinner } from "@/components/global/spinner";

type Props = {};

const Images = (props: Props) => {
  const { data: files, isLoading, isError } = useGetImages();
  const [view, setView] = useState<"grid" | "table">("grid");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const { mutateAsync: deleteBulkFiles, isPending: deletingFiles } =
    useBulkDelete();

  const handleSelectAll = () => {
    if (selectedIds.length === files?.data.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(() => files?.data.map((file) => file.id) || []);
    }
  };

  const handleDeleteBulkFiles = () => {
    toast.promise(deleteBulkFiles(selectedIds), {
      loading: "Files deleting...",
      success: (body) => {
        setDeleteDialog(false);
        setSelectedIds([]);
        return body.message;
      },
      error: (err) => err.message,
    });
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
            {
              <>
                <Checkbox
                  checked={
                    selectedIds.length !== 0 &&
                    selectedIds.length === files?.data.length
                  }
                  onCheckedChange={handleSelectAll}
                />
                <div>Select all</div>
              </>
            }
          </div>
          <div className="flex gap-3 items-end">
            {selectedIds.length > 0 && (
              <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
                <DialogTrigger>
                  <Button variant="outline">Delete</Button>
                </DialogTrigger>
                <DialogContent className="flex flex-col gap-5 p-5">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl">
                      Are you sure to delete{" "}
                      {selectedIds.length > 1
                        ? selectedIds.length + " files "
                        : selectedIds.length + " file "}
                      ?
                    </h1>
                    <span className="text-sm text-gray-500">
                      You can even restore the files from the trash, after you
                      delete.
                    </span>
                  </div>
                  <div className="flex gap-3 w-full items-end justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setDeleteDialog(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={handleDeleteBulkFiles}
                      disabled={deletingFiles}
                    >
                      {deletingFiles ? <Spinner /> : "Delete"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            <ToggleGroup
              type="single"
              value={view}
              onValueChange={(value: "grid" | "table") => setView(value)}
            >
              <ToggleGroupItem value="grid" aria-label="Toggle italic">
                <Italic className="h-3 w-3" />
              </ToggleGroupItem>
              <ToggleGroupItem value="table" aria-label="Toggle strikethrough">
                <Underline className="h-3 w-3" />
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
