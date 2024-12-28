"use client";

import CreateAutomation from "@/components/global/create-automation";
import { Skeleton } from "@/components/shadcn/skeleton";
import useMutationDataState from "@/hooks/use-mutation-data-state";
import { useQueryAutomations } from "@/react-query/queries";
import React, { useMemo } from "react";

type Props = {};

const Page = (_props: Props) => {
  const { data, isLoading } = useQueryAutomations();
  const { latestVariable } = useMutationDataState(["create-automation"]);

  const optimisticUiData = useMemo(() => {
    if (latestVariable && latestVariable?.variables && data) {
      const test = [latestVariable.variables, ...(data?.data ?? [])];
      return { data: test };
    }
    return data || { data: [] };
  }, [latestVariable, data]);

  console.log(optimisticUiData);
  if (isLoading) {
    return (
      <div className="flex gap-5 flex-col">
        {[1, 2, 3].map(() => {
          return <Skeleton className="h-10 w-full" />;
        })}
      </div>
    );
  }

  if (data?.status !== 200 || (data?.data && data?.data?.length <= 0)) {
    return (
      <div className="flex justify-center items-center flex-col flex-1 h-[70vh] gap-3">
        <h3 className="text-lg text-gray-400">No automations found</h3>
        <CreateAutomation />
      </div>
    );
  }

  return (
    <div className="flex-1 flex justify-between flex-col items-center">
      {optimisticUiData?.data?.map((automation: any, index: number) => (
        <div key={index} className="flex items-center gap-2 flex-col">
          <p className="">{automation.name ?? "Unnamed Automation"}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
