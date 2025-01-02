"use server";

import { prisma } from "@/lib/db";

const deleteTrash = async (id: string) => {
  try {
    const trash = await prisma.trash.delete({
      where: {
        id,
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

export default deleteTrash;
