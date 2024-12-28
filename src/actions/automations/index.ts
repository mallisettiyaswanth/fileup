"use server";

import { createAutomation, getAutomations } from "@/queries/automations";
import { getUser } from "@/actions/lib";

export const getUserAutomations = async () => {
  const user = await getUser();
  try {
    const userAutomations = await getAutomations(user?.id ?? "");
    if (userAutomations)
      return { status: 200, data: userAutomations.automations };
    return { status: 404, data: [] };
  } catch {
    return {
      status: "failed",
      data: {
        automations: [],
      },
    };
  }
};

export const createUserAutomation = async (id?: string) => {
  const user = await getUser();
  try {
    const automation = await createAutomation(user?.id ?? "", id);
    if (automation)
      return { status: 201, data: "Automation created", res: automation };
    return { status: 404, data: "Oops! something went wrong" };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      data: "Automation not created!",
    };
  }
};
