import {
  QueryFunction,
  QueryKey,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";

const useTanstackQuery = <TData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TData>
): UseQueryResult<TData> => {
  return useQuery<TData>({
    queryKey,
    queryFn,
  });
};

export default useTanstackQuery;
