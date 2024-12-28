"use client";

import DashboardChart from "@/components/global/dashboard-chart";
import DoubleGradientCard from "@/components/global/double-gradient-card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import useUser from "@/hooks/useUser";
import { Icons } from "@/lib/constants";
import { useQueryUser } from "@/react-query/queries";
import React from "react";

type Props = {};

const Page = (_props: Props) => {
  const data = useUser();

  return (
    <div className="h-full w-full p-3 flex flex-col gap-3">
      <div className="flex gap-3 flex-col lg:flex-row">
        <Card className="flex-[2] bg-gradient-to-r from-red-900/90 via-red-800/80 to-red-950/90 min-h-44 lg:min-h-fit">
          <CardHeader className="flex-1">
            <CardTitle className="font-semibold flex gap-3">
              <div>
                <span className="text-4xl">Welcome Back,</span>{" "}
                <span className="text-4xl">{data?.name}!</span>
              </div>
              <Avatar className="ring ring-sidebar-primary">
                <AvatarImage src={data?.image ?? ""} alt="@shadcn" />
                <AvatarFallback>
                  {data?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, eos.
            </CardDescription>
          </CardHeader>
        </Card>
        <DoubleGradientCard
          label="Set-up Auto Replies"
          subLabel="Deliver a product lineup through Instagram DM"
          description="Get products in front of your followers in as many places"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        <DashboardChart />
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {[
            {
              title: "Comments",
            },
            {
              title: "Direct Messages",
            },
            {
              title: "Lorem",
            },
            {
              title: "Lorem",
            },
          ].map((n, index: number) => {
            return (
              <Card key={index}>
                <CardHeader className="p-5">
                  <CardTitle className="text-xl">{n.title}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
