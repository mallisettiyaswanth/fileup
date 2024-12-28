"use client";

import { register } from "@/actions/auth/register";
import { Button } from "@/components/shadcn/button";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Button
        onClick={async () => {
          await register({
            email: "yaswanth@gmail.com",
            password: "yaswanth",
            name: "yaswanth",
          });
        }}
      >
        register
      </Button>
    </div>
  );
};

export default Page;
