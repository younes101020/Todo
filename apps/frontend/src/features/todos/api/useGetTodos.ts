import { getQueryClient } from "@/hooks";
import { useTodoQueryKey } from "./useTodoQueryKey";
import { apiClient } from "./http-common";

type Lazyloading = {
  initiatorId: number;
  cursor: number;
};

export const getTodos = async (queryParams: Lazyloading) => {
  const todos = await apiClient.get("", { params: queryParams });
  return todos.data;
};

// Prefetch todos from server side
export default async function useGetTodos() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: useTodoQueryKey.infinite(),
    queryFn: ({ pageParam }) => getTodos({ cursor: pageParam, initiatorId: 1 }),
    initialPageParam: 0
  });

  return queryClient;
}
