"use client";

import { Button } from "@/components/shadcn/button";
import { Icons } from "@/lib/constants";
import { useCreateAutomation } from "@/react-query/mutations";
import Loader from "../loader";
import React, { useMemo } from "react";
import { v4 } from "uuid";

type Props = {};

const CreateAutomation = (props: Props) => {
  const { isPending, mutate } = useCreateAutomation();

  return (
    <Button
      className="bg-gradient-to-b from-primary to-primary/10 rounded-full flex items-center justify-center min-w-44"
      disabled={isPending}
      onClick={mutate}
    >
      <Loader state={isPending}>
        <Icons.automations /> Create Automation
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
