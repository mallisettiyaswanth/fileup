import { prisma } from "@/lib/db";

export const getVerificationTokenbyEmail = async (email: string) => {
  try {
    const token = await prisma.verificationToken.findFirst({
      where: {
        email,
      },
    });

    return token;
  } catch {
    return null;
  }
};

export const getEmailbyVerificationToken = async (token: string) => {
  try {
    const email = await prisma.verificationToken.findFirst({
      where: {
        token,
      },
    });

    return email;
  } catch {
    return null;
  }
};
