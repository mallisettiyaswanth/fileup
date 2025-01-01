import { getFiles } from "@/actions/file/getFiles";
import React from "react";

type Props = {};

const Images = async (props: Props) => {
  const files = await getFiles("image");
  console.log(files);
  return (
    <div>
      {files.data.map((file, index: number) => {
        return (
          <div key={index} className="">
            {file.name}
          </div>
        );
      })}
      These are the files
    </div>
  );
};

export default Images;
