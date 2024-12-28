import React from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

type Props = {
  children: React.ReactNode;
};

const SessionProviderWrapper = async ({ children }: Props) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
