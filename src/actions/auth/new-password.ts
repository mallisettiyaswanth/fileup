import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export const newPassword = async (password: string, token: string) => {
  try {
    if (!token) {
      throw new Error("Token is missing!");
    }
    const resetToken = await getPasswordResetTokenByToken(token);
    if (!resetToken) {
      throw new Error("Token not found!");
    }
    const hasExpired = new Date(resetToken?.expires) < new Date();
    if (hasExpired) {
      await prisma.passwordResetToken.delete({
        where: {
          id: resetToken.id,
        },
      });
      throw new Error("Token is expired!");
    }
    const user = await getUserByEmail(resetToken.email);
    if (!user) {
      throw new Error("User not found!");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await prisma.user.update({
      where: {
        email: resetToken.email,
      },
      data: {
        password: hashedPassword,
      },
    });
    await prisma.passwordResetToken.delete({
      where: {
        id: resetToken.id,
      },
    });
  } catch (err) {
    console.log(err);
    return {
      status: "Error",
      body: {
        message: err.message,
      },
    };
  }
};
