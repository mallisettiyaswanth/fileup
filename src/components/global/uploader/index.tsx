"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { getErrorMessage } from "@/lib/handle-error";
import { useUploadFile } from "@/hooks/use-upload-file";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileUploader } from "@/components/file-uploader";

import { UploadedFilesCard } from "./uploaded-files-card";
import { uploadFile } from "@/actions/aws/upload";

const schema = z.object({
  images: z.array(z.instanceof(File)),
});

type Schema = z.infer<typeof schema>;

export function ReactHookFormDemo() {
  const [loading, setLoading] = React.useState(false);
  const { onUpload, progresses, uploadedFiles, isUploading } = useUploadFile(
    "imageUploader",
    { defaultUploadedFiles: [] }
  );
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      images: [],
    },
  });

  function onSubmit(values: Schema) {
    setLoading(true);

    const serializedFiles = values.images.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      return {
        name: file.name,
        type: file.type,
        content: Array.from(new Uint8Array(arrayBuffer)),
      };
    });

    Promise.all(serializedFiles)
      .then((files) => {
        toast.promise(uploadFile({ images: files }), {
          loading: "Uploading images...",
          success: () => {
            form.reset();
            setLoading(false);
            return "Images uploaded";
          },
          error: (err) => {
            setLoading(false);
            return getErrorMessage(err);
          },
        });
      })
      .catch((err) => {
        console.error("File serialization failed:", err);
        toast.error("Failed to serialize files");
        setLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <div className="space-y-6">
              <FormItem className="w-full">
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value}
                    onValueChange={field.onChange}
                    maxFileCount={4}
                    maxSize={4 * 1024 * 1024}
                    progresses={progresses}
                    disabled={isUploading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
              {uploadedFiles.length > 0 ? (
                <UploadedFilesCard uploadedFiles={uploadedFiles} />
              ) : null}
            </div>
          )}
        />
        <Button className="w-fit" disabled={loading}>
          Save
        </Button>
      </form>
    </Form>
  );
}
