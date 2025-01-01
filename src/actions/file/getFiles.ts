"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export const getFiles = async (type: "image" | "video" | "pdf" | "json") => {
  try {
    const user = await auth();
    if (!user?.user?.id) {
      throw new Error("User is not authenticated.");
    }
    const files = await prisma.file.findMany({
      where: {
        userId: user.user.id,
        type,
      },
    });
    return {
      status: 200,
      message: "Files fetched successfully.",
      data: files,
    };
  } catch (error: any) {
    if (error.message === "User is not authenticated.") {
      return {
        status: 401,
        message: error.message,
        data: [],
      };
    }
    console.error("Error fetching files:", error);
    return {
      status: 500,
      message:
        "An error occurred while fetching files. Please try again later.",
      data: [],
    };
  }
};
