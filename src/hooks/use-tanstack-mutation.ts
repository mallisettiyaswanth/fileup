import {
  MutationFunction,
  MutationKey,
  QueryClient,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

const useTanstackMutation = <
  TData extends { status: number; message: string },
  TVariables,
  TError = unknown
>(
  mutationKey: MutationKey,
  mutationFn: MutationFunction<TData, TVariables>,
  revalidateKey?: string[]
): UseMutationResult<TData, TError, TVariables> => {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables>({
    mutationKey,
    mutationFn,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: revalidateKey,
      });
      toast(data.message, {
        description: "Success",
      });
    },
    onError(error, variables, context) {
      console.error("Mutation error:", error);
    },
    onSettled(data, error, variables, context) {
      if (revalidateKey) {
        queryClient.refetchQueries({
          queryKey: revalidateKey,
        });
      }
    },
  });
};

export default useTanstackMutation;
