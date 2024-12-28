import {
  MutationFunction,
  MutationKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

const useMutationData = (
  mutationFn: MutationFunction<any, any>,
  mutationKey: MutationKey,
  queryKey?: string,
  onSuccess?: () => void,
  onError?: () => void
) => {
  const client = useQueryClient();
  const methods = useMutation({
    mutationFn,
    mutationKey,
    onSuccess(data) {
      if (onSuccess) onSuccess();
      return toast("Success", {
        description: data?.data,
      });
    },
    onSettled: async () => {
      return await client.invalidateQueries({
        queryKey: [queryKey],
      });
    },
    onError(error) {
      if (onError) onError();
      return toast("Error", {
        description: error?.message,
      });
    },
  });
  return methods;
};

export default useMutationData;
