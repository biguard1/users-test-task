export type ApiConfig = typeof apiConfig;

export const apiConfig = {
  baseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "https://jsonplaceholder.typicode.com",
  endpoints: {
    users: process.env.NEXT_PUBLIC_API_ENDPOINTS_USERS ?? "/users",
  },
};
