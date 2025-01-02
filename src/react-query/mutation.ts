import { markFileFavouriteToggle } from "@/actions/favourites";
import deleteFile from "@/actions/file/deleteFile";
import useTanstackMutation from "@/hooks/use-tanstack-mutation";

const useMarkFileFavouriteToggle = () => {
  return useTanstackMutation(["mark-file-favourite"], markFileFavouriteToggle, [
    "user-images",
  ]);
};

const useFileDelete = () => {
  return useTanstackMutation(["delete-file"], deleteFile, ["user-images"]);
};

export { useMarkFileFavouriteToggle, useFileDelete };
