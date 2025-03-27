import { Skeleton } from "@heroui/skeleton";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

export function UserSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="rounded-full h-[1.25em] w-24" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="rounded-full h-[1.25em] w-48" />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1 grid-cols-1 sm:gap-3 sm:grid-cols-[auto,1fr]">
        <h4 className="font-bold">Phone:</h4>
        <p>
          <Skeleton className="rounded-full h-[1.25em] w-48" />
        </p>

        <h4 className="font-bold mt-4 sm:mt-0">Website:</h4>
        <p>
          <Skeleton className="rounded-full h-[1.25em] w-48" />
        </p>

        <h4 className="font-bold mt-4 sm:mt-0">Address:</h4>
        <Card>
          <CardContent className="p-4 grid gap-1 grid-cols-1 sm:gap-3 sm:grid-cols-[auto,1fr]">
            <h4 className="font-bold">Street:</h4>
            <p>
              <Skeleton className="rounded-full h-[1.25em] w-36" />
            </p>

            <h4 className="font-bold mt-4 sm:mt-0">Suite:</h4>
            <p>
              <Skeleton className="rounded-full h-[1.25em] w-36" />
            </p>

            <h4 className="font-bold mt-4 sm:mt-0">City:</h4>
            <p>
              <Skeleton className="rounded-full h-[1.25em] w-36" />
            </p>

            <h4 className="font-bold mt-4 sm:mt-0">Zipcode:</h4>
            <p>
              <Skeleton className="rounded-full h-[1.25em] w-36" />
            </p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
