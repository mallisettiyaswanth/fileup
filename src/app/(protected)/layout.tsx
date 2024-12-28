import AppLayout from "@/components/Layout/AppLayout";
import {
  prefetchUserAutomations,
  prefetchUserProfile,
} from "@/react-query/prefetch";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new QueryClient();
  await prefetchUserProfile(client);
  await prefetchUserAutomations(client);

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <AppLayout>{children}</AppLayout>
    </HydrationBoundary>
  );
}
