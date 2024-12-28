import { getUserAutomations } from "@/actions/automations";
import { getUserData } from "@/actions/user";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: ["user-automations"],
    queryFn: getUserAutomations,
  });
};

export const useQueryUser = () => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserData,
  });
};