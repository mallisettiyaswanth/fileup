"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";

const getTrash = async () => {
  try {
    const user = await auth();
    const trash = await prisma.trash.findMany({
      where: {
        userId: user?.user?.id,
      },
    });

    return {
      status: 200,
      message: "Success",
      body: {
        trash,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      message: "Something went wrong!",
    };
  }
};

export default getTrash;
