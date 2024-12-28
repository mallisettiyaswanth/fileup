"use client";

import { logout } from "@/actions/auth/logout";
import { Button } from "@/components/shadcn/button";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
};

export default Dashboard;
