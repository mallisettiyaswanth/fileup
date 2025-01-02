"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import removeDeleteMarker from "@/actions/aws/removeDeleteMarker";

const restoreAll = async () => {
  try {
    const user = await auth();
    const trash = await prisma.trash.findMany({
      where: {
        userId: user?.user?.id,
      },
    });
    await prisma.trash.deleteMany({
      where: {
        userId: user?.user?.id,
      },
    });
    const filesToRestore = trash.map((file) => {
      return {
        name: file.name,
        type: file.type,
        size: file.size,
        createdAt: file.createdAt,
        url: file.url,
        userId: file.userId,
        isFavourite: file.isFavourite,
      };
    });
    const removeDeleteMarkerFromAws = trash.map((file) => {
      return removeDeleteMarker(file.name, file.versionId);
    });
    const restores = await prisma.file.createMany({
      data: filesToRestore,
    });
    return {
      status: 200,
      message: "Success",
      body: {
        restores,
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

export default restoreAll;
