"use client";

import CommonHeader from "@/components/global/common-header";
import { useGetTrash } from "@/react-query/query";
import React from "react";
import Loading from "../loading";

type Props = {};

const Dashboard = (props: Props) => {
  const { data, isLoading, isError } = useGetTrash();

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
        <p>Error loading Data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 p-5">
      <CommonHeader title="Trash" buttons={false} className="sticky top-0" />
    </div>
  );
};

export default Dashboard;
