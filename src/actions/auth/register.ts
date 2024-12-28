"use server";
import { prisma } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationToken } from "@/lib/email";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
      throw new Error("Error parsing the values");
    }
    const { email, password, name } = validatedFields.data;
    const user = await getUserByEmail(email);
    if (user) {
      throw new Error("Email already exists!, please login to continue.");
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationToken(
      verificationToken.token,
      verificationToken.email
    );

    return {
      status: "Success",
      body: {
        message: "User Created",
      },
    };
  } catch (err) {
    console.log(err);
    return {
      status: "Error",
      body: {
        // message: err.message,
      },
    };
  }
};
