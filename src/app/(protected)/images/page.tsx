"use client";

import React from "react";
import Loading from "@/app/(protected)/loading";
import CommonHeader from "@/components/global/common-header";
import TypeSheet from "@/components/global/type-sheet";
import { useGetImages } from "@/react-query/query";
import EmptyState from "../empty";
import UploadButton from "@/components/global/buttons/upload-button";

type Props = {};

const Images = (props: Props) => {
  const { data: files, isLoading, isError, refetch } = useGetImages();

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
      <CommonHeader />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">Images</h1>
        <EmptyState
          condition={files?.data?.length === 0}
          title="No images found"
          desc="Try uploading an image."
          externalButton={<UploadButton />}
        >
          <div className="grid grid-cols-5 gap-3">
            {files?.data?.map((file: any, index: number) => (
              <TypeSheet key={index} file={file} />
            ))}
          </div>
        </EmptyState>
      </div>
    </div>
  );
};

export default Images;
