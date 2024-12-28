import { prisma } from "@/lib/db";

export const getUserWithId = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      TwoFactorConfirmation: true,
      InstagramProfiles: true,
      FacebookProfiles: true,
      Subscription: true,
    },
  });
};
