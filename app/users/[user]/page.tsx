import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getUser } from "@/requests/users";
import { User } from "@/components/data/User";

export const metadata: Metadata = {
  title: "User Info",
};

export default async function UserRoute({
  params,
}: {
  params: Promise<{ user: number }>;
}) {
  const { user } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user", user],
    queryFn: () => getUser(user),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <User id={user} />
    </HydrationBoundary>
  );
}
