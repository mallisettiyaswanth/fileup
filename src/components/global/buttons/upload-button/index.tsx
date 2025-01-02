"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/constants";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactHookFormDemo } from "@/components/global/uploader";

type Props = {};

const UploadButton = (props: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger>
        <Button className="rounded-xl">
          <Icons.upload.filled />
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent>
        <ReactHookFormDemo callback={() => setDialogOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
