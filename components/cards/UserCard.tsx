import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { User } from "@/types/data/user";

export function UserCard({ user }: { user: User }) {
  return (
    <Link className="group rounded-xl" href={`/users/${user.id}`}>
      <Card className="group-hover:bg-foreground group-hover:text-background group-active:scale-95 group-active:bg-foreground/80 group-active:text-background transition">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
