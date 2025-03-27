import { apiConfig } from "@/config/api";
import { User } from "@/types/data/user";

export async function getUsers(
  page: number = 1,
  limit: number = 10,
): Promise<{ data: User[]; total: number }> {
  const result = await fetch(
    `${apiConfig.baseUrl}${apiConfig.endpoints.users}?_page=${page}&_limit=${limit}`,
  );
  const data = await result.json();
  const total = Number.parseInt(result.headers.get("x-total-count")!);

  return { data, total };
}

export async function getUser(id: number): Promise<User> {
  const result = await fetch(
    `${apiConfig.baseUrl}${apiConfig.endpoints.users}/${id}`,
  );

  if (!result.ok) {
    throw new Error("User not found");
  }

  return await result.json();
}
