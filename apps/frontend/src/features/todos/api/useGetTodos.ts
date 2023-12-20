import { getQueryClient } from "@/hooks";
import { useTodoQueryKey } from "./useTodoQueryKey";

export const getTodos = async () => {
  const todos = await fetch(`${process.env.REST_API_BASE_URL}/todos`, { cache: 'no-store' });
  if (!todos.ok) {
    throw new Error("Failed to fetch todos");
  }
  return todos.json();
};

// Prefetch todos from server side
export default async function useGetTodos() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: useTodoQueryKey.all,
    queryFn: () => getTodos(),
  });

  return queryClient;
}
