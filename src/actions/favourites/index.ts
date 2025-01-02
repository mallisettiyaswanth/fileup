"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export const markFileFavouriteToggle = async (fileId: string) => {
  try {
    const user = await auth();
    const userId = user && user.user && user.user?.id ? user.user?.id : "";
    const isAlreadyFavourite = await prisma.file.findFirst({
      where: {
        id: fileId,
      },
    });
    if (isAlreadyFavourite?.isFavourite) {
      await prisma.file.update({
        where: {
          id: fileId,
        },
        data: {
          isFavourite: false,
        },
      });
      return {
        status: 200,
        message: "File removed from favourites",
      };
    }
    await prisma.file.update({
      where: {
        id: fileId,
      },
      data: {
        isFavourite: true,
      },
    });
    return {
      status: 200,
      message: "File marked as favourite",
    };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      message: "Something went wrong!",
    };
  }
};
