"use server";

import AsyncHandler from "@/utils/async-handler";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { z } from "zod";

const schema = z.object({
  images: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      content: z.array(z.number()),
    })
  ),
});

type Schema = z.infer<typeof schema>;

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_kEY!,
  },
  region: process.env.NEXT_AWS_S3_REGION!,
});

export const uploadFileToAws = AsyncHandler(async (formData: Schema) => {
  schema.parse(formData);
  const uploadPromises = formData.images.map(async (file) => {
    const buffer = Buffer.from(file.content);
    const uploadParams = {
      Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
      Key: file.name,
      Body: buffer,
      ContentType: file.type,
    };
    return s3Client.send(new PutObjectCommand(uploadParams));
  });
  const results = await Promise.all(uploadPromises);
  console.log("Files uploaded successfully:", results);
  return results;
});
