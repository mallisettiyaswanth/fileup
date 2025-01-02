"use client";

import React from "react";
import Loading from "../loading";
import CommonHeader from "@/components/global/common-header";
import TypeSheet from "@/components/global/type-sheet";
import { useGetImages } from "@/react-query/query";

type Props = {};

const Images = (props: Props) => {
  const { data: files, isLoading, isError } = useGetImages();

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
        <div className="grid grid-cols-5 gap-3">
          {files?.data?.map((file: any, index: number) => (
            <TypeSheet key={index} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
