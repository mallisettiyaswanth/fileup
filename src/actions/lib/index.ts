import { auth } from "@/auth";

export const getUser = async () => {
  const userObj = await auth();
  if (!userObj || !userObj?.user) return;
  const { user } = userObj;
  return user;
};
