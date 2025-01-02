import { markFileFavouriteToggle } from "@/actions/favourites";
import deleteFile from "@/actions/file/deleteFile";
import { addFile } from "@/actions/file/upload";
import useTanstackMutation from "@/hooks/use-tanstack-mutation";

const useMarkFileFavouriteToggle = () => {
  return useTanstackMutation(["mark-file-favourite"], markFileFavouriteToggle, [
    "user-files",
  ]);
};

const useFileDelete = () => {
  return useTanstackMutation(["delete-file"], deleteFile, ["user-files"]);
};

const useFileUpload = () => {
  return useTanstackMutation(["upload-file"], addFile, ["user-images"]);
};

export { useMarkFileFavouriteToggle, useFileDelete, useFileUpload };
