import { markFileFavouriteToggle } from "@/actions/favourites";
import { deleteBulkFiles } from "@/actions/file/deletebulk";
import deleteFile from "@/actions/file/deleteFile";
import { addFile } from "@/actions/file/upload";
import useTanstackMutation from "@/hooks/use-tanstack-mutation";

const useMarkFileFavouriteToggle = () => {
  return useTanstackMutation(["mark-file-favourite"], markFileFavouriteToggle, [
    "user-images",
  ]);
};

const useFileDelete = () => {
  return useTanstackMutation(["delete-file"], deleteFile, ["user-images"]);
};

const useFileUpload = () => {
  return useTanstackMutation(["upload-file"], addFile, ["user-images"]);
};

const useBulkDelete = () => {
  return useTanstackMutation(["delete-bulk-files"], deleteBulkFiles, [
    "user-images",
  ]);
};

export {
  useMarkFileFavouriteToggle,
  useFileDelete,
  useFileUpload,
  useBulkDelete,
};
