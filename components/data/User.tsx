"use client";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { UserSkeleton } from "../skeletons/UserSkeleton";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";

import { getUser } from "@/requests/users";

export function User({ id }: { id: number }) {
  const { isSuccess, isLoading, data, isError, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-base" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-base">
              {isSuccess ? data.username : id}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {isLoading ? (
        <UserSkeleton />
      ) : isError ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            There was an error fetching the user: &quot;{error.message}&quot;.
          </AlertDescription>
        </Alert>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{data!.name}</CardTitle>
            <CardDescription>{data!.email}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-1 grid-cols-1 sm:gap-3 sm:grid-cols-[auto,1fr]">
            <h4 className="font-bold">Phone:</h4>
            <p>{data!.phone}</p>

            <h4 className="font-bold mt-4 sm:mt-0">Website:</h4>
            <p>{data!.website}</p>

            <h4 className="font-bold mt-4 sm:mt-0">Address:</h4>
            <Card>
              <CardContent className="p-4 grid gap-1 grid-cols-1 sm:gap-3 sm:grid-cols-[auto,1fr]">
                <h4 className="font-bold">Street:</h4>
                <p>{data!.address.street}</p>

                <h4 className="font-bold mt-4 sm:mt-0">Suite:</h4>
                <p>{data!.address.suite}</p>

                <h4 className="font-bold mt-4 sm:mt-0">City:</h4>
                <p>{data!.address.city}</p>

                <h4 className="font-bold mt-4 sm:mt-0">Zipcode:</h4>
                <p>{data!.address.zipcode}</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
