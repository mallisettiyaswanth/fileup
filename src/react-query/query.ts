import { getFiles } from "@/actions/file/getFiles";
import getTrash from "@/actions/trash/getTrash";
import useTanstackQuery from "@/hooks/use-tanstack-query";

const useGetImages = () => {
  return useTanstackQuery(["user-images"], () => getFiles("image"));
};

const useGetTrash = () => {
  return useTanstackQuery(["user-trash"], getTrash);
};

export { useGetImages, useGetTrash };
