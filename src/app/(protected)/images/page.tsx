import { getFiles } from "@/actions/file/getFiles";
import React, { Suspense } from "react";
import Loading from "../loading";
import CommonHeader from "@/components/global/common-header";
import TypeSheet from "@/components/global/type-sheet";
type Props = {};

const Images = async (props: Props) => {
  const files = await getFiles("image");

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <Loading />
        </div>
      }
    >
      <div className="flex flex-col gap-10 p-5">
        <CommonHeader />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">Images</h1>
          <div className="grid grid-cols-5 gap-3">
            {files.data.map((file, index: number) => {
              return <TypeSheet file={file} />;
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Images;
