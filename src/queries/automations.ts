import { prisma } from "@/lib/db";

export const getAutomations = async (id: string) => {
  return await prisma.user.findFirst({
    where: {
      id,
    },
    select: {
      automations: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          keywords: true,
          listener: true,
        },
      },
    },
  });
};

export const createAutomation = async (id: string, automationId?: string) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      automations: {
        create: {
          ...(automationId && { id: automationId }),
        },
      },
    },
  });
};
