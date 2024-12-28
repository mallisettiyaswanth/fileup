"use client";
import SettingsTab from "@/components/global/settings-tab";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { Button } from "@/components/shadcn/button";
import { DialogFooter } from "@/components/shadcn/dialog";
import { Input } from "@/components/shadcn/input";
import useUser from "@/hooks/useUser";
import React, { useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type Props = {};

const General = (props: Props) => {
  const user = useUser();
  const uploadRef = useRef<HTMLInputElement | null>(null);

  if (!user || !user.name) return <> Loading </>;

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <SettingsTab
        name="Name"
        triggerFn={() => {}}
        value={<h1>{user?.name}</h1>}
        triggerContent={
          <div className="flex flex-col gap-5">
            <Input
              type="text"
              placeholder="name"
              className="border border-primary"
            />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
              <DialogPrimitive.Close>
                <Button variant="outline">Cancel</Button>
              </DialogPrimitive.Close>
            </DialogFooter>
          </div>
        }
      />
      <SettingsTab
        name="Avatar"
        mutateFn={() => {
          uploadRef.current?.click();
        }}
        value={
          <div>
            <Avatar>
              <AvatarImage src={user?.image ?? undefined} />
              <AvatarFallback>
                {user?.name
                  ?.split(" ")
                  .reduce((acc, cur) => acc + cur[0].toUpperCase(), "")}
              </AvatarFallback>
            </Avatar>
            <Input type="file" ref={uploadRef} className="hidden" />
          </div>
        }
      />
      <SettingsTab name="Email" disabled value={<h1>{user?.email}</h1>} />
    </div>
  );
};

export default General;
