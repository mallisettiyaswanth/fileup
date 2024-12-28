"use server";
import { prisma } from "@/lib/db";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { DEFUALT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateTwoFactorToken } from "@/lib/tokens";
import { sendTwoFactorToken } from "@/lib/email";
import { getTwoFactortokenByEmail } from "@/data/two-factor-token";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

class ValidationError extends Error {}
class UserNotFoundError extends Error {}
class PasswordMismatchError extends Error {}

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  try {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
      throw new ValidationError("Invalid input values");
    }

    const { email, password, code } = validatedFields.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UserNotFoundError("User not found");
    }

    const isValidPassword =
      password && user.password
        ? await bcrypt.compare(password, user.password)
        : false;
    if (!isValidPassword) {
      throw new PasswordMismatchError("Invalid password");
    }

    if (user.isTwoFactorEnabled && user.email) {
      if (code) {
        const twoFactorToken = await getTwoFactortokenByEmail(user.email);
        if (!twoFactorToken || twoFactorToken.token !== code) {
          throw new Error("Invalid code");
        }

        const hasExpired = new Date(twoFactorToken.expires) < new Date();
        if (hasExpired) {
          throw new Error("Code expired!");
        }

        await prisma.twoFactorToken.delete({
          where: {
            id: twoFactorToken.id,
          },
        });

        const existingConfirmation = await getTwoFactorConfirmationByUserId(
          user.id
        );

        if (existingConfirmation) {
          await prisma.twoFactorConfirmation.delete({
            where: {
              id: existingConfirmation.id,
            },
          });
        }

        await prisma.twoFactorConfirmation.create({
          data: {
            userId: user.id,
          },
        });
      } else {
        const twoFactorToken = await generateTwoFactorToken(user.email);
        await sendTwoFactorToken(twoFactorToken.token, user.email);
        return {
          status: "Success",
          body: {
            twoFactorEnabled: true,
          },
        };
      }
    }

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: callbackUrl || DEFUALT_LOGIN_REDIRECT,
    });

    return {
      status: "Success",
      body: {
        message: "Login successful",
        userId: user.id,
      },
    };
  } catch (err) {
    console.error(err);
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return {
            status: "Error",
            body: {
              message: "Invalid Credentials!",
            },
          };
      }
    } else if (err instanceof ValidationError) {
      return {
        status: "Error",
        body: { message: err.message },
      };
    } else if (err instanceof UserNotFoundError) {
      return {
        status: "Error",
        body: { message: err.message },
      };
    } else if (err instanceof PasswordMismatchError) {
      return {
        status: "Error",
        body: { message: err.message },
      };
    } else {
      return {
        status: "Error",
        body: { message: "An unexpected error occurred" },
      };
    }

    throw err;
  }
};
