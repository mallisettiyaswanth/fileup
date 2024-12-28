import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import { Switch } from "@/components/shadcn/switch";
import React from "react";

type Props = {};

const Authentication = (props: Props) => {
  return (
    <div className="flex gap-3 flex-col">
      <div className="flex items-center justify-between border-b p-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <h2 className="text-md">Enable Two Factor Authentication</h2>
            <Badge variant="outline">Recommended</Badge>
          </div>
          <p className="text-xs w-5/6 text-white/60">
            We recommend requiring a verification code in addition to your
            password.
          </p>
        </div>
        <Switch />
      </div>
      <div className="flex items-center justify-between border-b p-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-md">Password</h2>
          <p className="text-xs w-5/6 text-white/60">
            change your password to protect your account.
          </p>
        </div>
        <Button variant="outline" className="border-primary rounded-full">
          Change
        </Button>
      </div>
    </div>
  );
};

export default Authentication;
