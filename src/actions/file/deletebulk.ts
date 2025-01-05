"use server";
import { prisma } from "@/lib/db";
import deleteFileFromAws from "@/actions/aws/deleteObjects";

export const deleteBulkFiles = async (ids: string[]) => {
  try {
    const deletingImages = await prisma.file.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    await prisma.file.deleteMany({
      where: {
        id: { in: ids },
      },
    });
    const filesToDeleteFromAws = deletingImages.map((file) => {
      return deleteFileFromAws(file.name);
    });
    await Promise.all(filesToDeleteFromAws);

    return {
      status: 200,
      message: "Files Deleted.",
    };
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      message: "Something went wrong!",
    };
  }
};
