"use server";

import AsyncHandler from "@/utils/async-handler";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../lib/s3Client";

const deleteFileFromAws = AsyncHandler(async (fileName: string) => {
  const deleteParams = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
    Key: fileName,
  };

  const deleted = await s3Client.send(new DeleteObjectCommand(deleteParams));
  console.log(deleted);

  return deleted;
});

export default deleteFileFromAws;
