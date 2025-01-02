import { QueryClient, QueryFunction, QueryKey } from "@tanstack/react-query";

const useTanstackPrefetch = (
  client: QueryClient,
  queryKey: QueryKey,
  queryFn: QueryFunction
) => {
  return client.prefetchQuery({
    queryKey,
    queryFn,
    staleTime: 60000,
  });
};

export default useTanstackPrefetch;
