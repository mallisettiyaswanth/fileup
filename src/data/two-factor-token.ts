import { prisma } from "@/lib/db";

export const getTwoFactortokenByEmail = async (email: string) => {
  try {
    const token = await prisma.twoFactorToken.findFirst({
      where: {
        email,
      },
    });

    return token;
  } catch {
    return null;
  }
};

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const email = await prisma.twoFactorToken.findFirst({
      where: {
        token,
      },
    });

    return email;
  } catch {
    return null;
  }
};
