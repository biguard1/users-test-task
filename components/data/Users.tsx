"use client";

import { useQuery } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";
import { Pagination } from "@heroui/pagination";
import { parseAsInteger, useQueryState } from "nuqs";

import { title } from "../primitives";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { UserCard } from "../cards/UserCard";
import { UserCardSkeleton } from "../skeletons/UserCardSkeleton";

import { getUsers } from "@/requests/users";

export default function Users() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(8));
  const { isSuccess, isLoading, data, isError, error } = useQuery({
    queryKey: ["users", page, limit],
    queryFn: () => getUsers(page, limit),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <h1 className={title({ size: "sm" })}>Users</h1>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        {isLoading ? (
          <ul className="w-full grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
            {[...Array(limit)].map((_, index) => (
              <li key={`user-skeleton-${index}`}>
                <UserCardSkeleton />
              </li>
            ))}
          </ul>
        ) : isError ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was an error fetching the users: &quot;{error.message}
              &quot;.
            </AlertDescription>
          </Alert>
        ) : data!.data.length === 0 ? (
          <Alert variant="default">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>No users found</AlertTitle>
            <AlertDescription>There are no users to display.</AlertDescription>
          </Alert>
        ) : (
          <ul className="w-full grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
            {data!.data.map((user) => (
              <li key={`user-${user.id}`}>
                <UserCard user={user} />
              </li>
            ))}
          </ul>
        )}
        {isSuccess && (
          <Pagination
            showControls
            initialPage={1}
            page={page}
            total={Math.ceil(data!.total / limit)}
            variant="bordered"
            onChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}
