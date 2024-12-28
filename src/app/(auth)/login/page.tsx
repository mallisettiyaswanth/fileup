"use client";
import { login } from "@/actions/auth/login";
import { Button } from "@/components/shadcn/button";
import React from "react";
import { signIn } from "next-auth/react";
import { DEFUALT_LOGIN_REDIRECT } from "@/routes";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
  const callbackUrl = useSearchParams().get("callbackUrl");

  return (
    <div>
      <Button
        onClick={async () =>
          await login(
            {
              email: "yaswanth@gmail.com",
              password: "yaswanth",
            },
            callbackUrl
          )
        }
      >
        login
      </Button>
      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: callbackUrl || DEFUALT_LOGIN_REDIRECT,
          })
        }
      >
        GOOGLE
      </Button>
    </div>
  );
};

export default Page;
