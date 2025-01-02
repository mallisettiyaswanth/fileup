import { getFiles } from "@/actions/file/getFiles";
import useTanstackQuery from "@/hooks/use-tanstack-query";

const useGetImages = () => {
  return useTanstackQuery(["user-images"], () => getFiles("image"));
};

export { useGetImages };
