import { useSession } from "next-auth/react";

const useUser = () => {
  const session = useSession();
  return session.data?.user;
};

export default useUser;
