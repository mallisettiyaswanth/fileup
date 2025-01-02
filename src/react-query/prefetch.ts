import { getFiles } from "@/actions/file/getFiles";
import useTanstackPrefetch from "@/hooks/use-tantstack-prefetch";
import { QueryClient } from "@tanstack/react-query";

export const prefetchGetImages = async (queryClient: QueryClient) => {
  await useTanstackPrefetch(queryClient, ["user-images"], () =>
    getFiles("image")
  );
};
