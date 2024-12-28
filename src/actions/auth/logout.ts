"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // TODO : do some before stuff
  await signOut();
};
