import { QueryClient } from "@tanstack/react-query";

const getServerQueryClient = () => {
  return new QueryClient();
};

export default getServerQueryClient;
