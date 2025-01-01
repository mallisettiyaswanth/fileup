import CreateButton from "@/components/global/buttons/create-button";
import Header from "@/components/global/header";
import UploadButton from "@/components/global/buttons/upload-button";
import { Icons } from "@/lib/constants";
import React from "react";

type Props = {
  overviewstorage: React.ReactNode;
  files: React.ReactNode;
  uploadarea: React.ReactNode;
};

const Layout = ({ overviewstorage, files, uploadarea }: Props) => {
  return (
    <div className="h-full w-full flex flex-col gap-10 p-3">
      <Header title="Storage overview" icon={Icons.dashboard.outline}>
        <div className="flex gap-3">
          <UploadButton />
          <CreateButton />
        </div>
      </Header>
      {overviewstorage}
      <div className="flex gap-3">
        {files}
        {uploadarea}
      </div>
    </div>
  );
};

export default Layout;
