import { prisma } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const resetToken = await prisma.passwordResetToken.findFirst({
      where: {
        token,
      },
    });

    return resetToken;
  } catch (err) {
    console.log(err);
  }
};
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const resetToken = await prisma.passwordResetToken.findFirst({
      where: {
        email,
      },
    });

    return resetToken;
  } catch (err) {
    console.log(err);
  }
};
