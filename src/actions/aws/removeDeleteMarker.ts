"use server";

import AsyncHandler from "@/utils/async-handler";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "@/actions/lib/s3Client";

const removeDeleteMarker = AsyncHandler(
  async (fileName: string, versionId: string) => {
    const deleteParams = {
      Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
      Key: fileName,
      versionId,
    };

    const deleted = await s3Client.send(new DeleteObjectCommand(deleteParams));
    console.log(deleted);
  }
);

export default removeDeleteMarker;
