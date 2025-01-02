"use server";

import { prisma } from "@/lib/db";
import deleteFileFromAws from "@/actions/aws/deleteObjects";

const deleteFile = async (fileId: string) => {
  try {
    const deleted = await prisma.file.delete({
      where: {
        id: fileId,
      },
    });
    await deleteFileFromAws(deleted.name);

    return {
      status: 200,
      message: "File has been deleted successfully",
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error deleting file:", err.message);
      return {
        status: 404,
        message: err.message,
      };
    }

    console.error("Unexpected error:", err);
    return {
      status: 500,
      message: "An unexpected error occurred",
    };
  }
};

export default deleteFile;
