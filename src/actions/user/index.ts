"use server";

import { getUserWithId } from "@/queries/user";
import { getUser } from "@/actions/lib";

export const getUserData = async () => {
  const user = await getUser();
  try {
    const userData = await getUserWithId(user?.id ?? "");
    return userData;
  } catch {
    return {
      status: "failed",
    };
  }
};
