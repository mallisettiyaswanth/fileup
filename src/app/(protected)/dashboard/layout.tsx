import React, { Suspense } from "react";
import Loading from "./loading";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default Layout;
