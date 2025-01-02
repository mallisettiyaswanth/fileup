"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";

const deleteAll = async () => {
  try {
    const user = await auth();
    const trash = await prisma.trash.deleteMany({
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

export default deleteAll;
