"use server";

import AsyncHandler from "@/utils/async-handler";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { z } from "zod";
import s3Client from "../lib/s3Client";

const schema = z.object({
  name: z.string(),
  type: z.string(),
  size: z.number(),
  lastModified: z.number(),
  content: z.array(z.number()),
});

type Schema = z.infer<typeof schema>;

export const uploadFileToAws = AsyncHandler(async (file: Schema) => {
  schema.parse(file);
  const buffer = Buffer.from(file.content);
  const uploadParams = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
    Key: file.name,
    Body: buffer,
    ContentType: file.type,
  };
  const result = await s3Client.send(new PutObjectCommand(uploadParams));
  console.log(result);

  const publicUrl = `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${file.name}`;
  return { fileName: file.name, publicUrl };
});
