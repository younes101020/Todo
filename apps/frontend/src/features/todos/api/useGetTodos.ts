import { getQueryClient } from "@/hooks";
import { useTodoQueryKey } from "./useTodoQueryKey";
import { apiClient } from './http-common';

export const getTodos = async (queryParams: any = { initiatorId: 0 }) => {
  const todos = await apiClient.get("", { params: queryParams })
  return todos.data;
};

// Prefetch todos from server side
export default async function useGetTodos() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: useTodoQueryKey.all,
    queryFn: () => getTodos()
  });

  return queryClient;
}
