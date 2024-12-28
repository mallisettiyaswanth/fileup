"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetToken } from "@/lib/email";
import { generatePasswordResetToken } from "@/lib/tokens";

export const forgotPassword = async (email: string) => {
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      throw new Error("User not found!, try to register.");
    }

    const verificationToken = await generatePasswordResetToken(email);
    await sendPasswordResetToken(
      verificationToken.token,
      verificationToken.email
    );

    return {
      status: "Success",
      body: {
        message: "Reset Email sent.",
      },
    };
  } catch (err) {
    console.log(err);
  }
};
