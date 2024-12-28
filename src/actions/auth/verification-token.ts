"use server";

import { getVerificationTokenbyEmail } from "@/data/verification-token";
import { prisma } from "@/lib/db";

export const verifyToken = async (token: string) => {
  try {
    const verificationToken = await getVerificationTokenbyEmail(token);
    if (!verificationToken) {
      throw new Error("Something went wrong!");
    }
    const hasExpired = new Date(verificationToken.expires) < new Date();
    if (hasExpired) {
      throw new Error("Token has expired");
    }
    await prisma.user.update({
      where: {
        email: verificationToken.email,
      },
      data: {
        emailVerified: new Date(),
        email: verificationToken.email,
      },
    });
    await prisma.verificationToken.delete({
      where: {
        id: verificationToken.id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
