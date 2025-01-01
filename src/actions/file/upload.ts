"use server";

import { prisma } from "@/lib/db";
import { uploadFileToAws } from "@/actions/aws/uploadObject";
import { auth } from "@/auth";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  type: z.string(),
  size: z.number(),
  lastModified: z.number(),
  content: z.array(z.number()),
});

type FileType = z.infer<typeof schema>;

export const addFile = async (formData: { files: FileType[] }) => {
  formData.files.forEach((file) => {
    schema.parse(file);
  });

  const user = await auth();
  if (!user || !user.user || !user?.user?.id) {
    throw new Error("User is not authenticated.");
  }

  const awsUpload = await Promise.all(
    formData.files.map(async (file) => {
      const upload = await uploadFileToAws(file);
      const type =
        file.type.split("/")[0] === "image" ? "image" : file.type.split("/")[1];
      return {
        userId: user && user?.user && user.user.id ? user.user.id : "",
        name: file.name,
        type,
        size: file.size,
        url: upload.publicUrl,
        createdAt: new Date(),
      };
    })
  );

  const createFiles = await prisma.file.createMany({
    data: awsUpload,
  });

  return { success: true, filesCreated: createFiles.count };
};
