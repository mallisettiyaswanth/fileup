import { createUserAutomation } from "@/actions/automations";
import useMutationData from "@/hooks/use-mutation-data";
import { v4 } from "uuid";

export const useCreateAutomation = () => {
  const mutationId = v4();
  const { isPending, mutate } = useMutationData(
    () => createUserAutomation(mutationId),
    ["create-automation"],
    "user-automations"
  );

  return { isPending, mutate };
};
