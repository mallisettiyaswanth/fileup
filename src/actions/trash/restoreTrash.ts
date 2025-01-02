"use server";
import { prisma } from "@/lib/db";
import removeDeleteMarker from "@/actions/aws/removeDeleteMarker";
const restoreTrash = async (id: string) => {
  try {
    const trash = await prisma.trash.findFirst({
      where: {
        id,
      },
    });
    await prisma.trash.delete({
      where: {
        id,
      },
    });
    await removeDeleteMarker(trash?.name, trash?.versionId);
    const restoreFile = await prisma.file.create({
      data: {
        name: trash?.name ?? "",
        type: trash?.type ?? "",
        size: trash?.size ?? 0,
        createdAt: trash?.createdAt ?? "",
        isFavourite: trash?.isFavourite,
        url: trash?.url ?? "",
        userId: trash?.userId ?? "",
      },
    });
    return {
      status: 200,
      message: "Success",
      body: {
        restoreFile,
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
export default restoreTrash;
