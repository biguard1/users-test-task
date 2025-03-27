import { Skeleton } from "@heroui/skeleton";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function UserCardSkeleton() {
  return (
    <Card className="group-hover:bg-foreground group-hover:text-background group-active:scale-95 group-active:bg-foreground/80 group-active:text-background transition">
      <CardHeader>
        <CardTitle>
          <Skeleton className="rounded-full h-[1.25em] w-24" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="rounded-full h-[1.25em] w-48" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
