import { getQueryClient } from '@/hooks';
import { useTodoQueryKey } from './useTodoQueryKey';

export const getTodos = async (cursor: number | null) => {
    const todos = await fetch(`${process.env.REST_API_BASE_URL}/todos?cursor=${cursor}`);
    return todos.json();
};

// Prefetch todos from server side
export default async function useGetTodos(cursor = null) {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: useTodoQueryKey.pagination(cursor),
    queryFn: () => getTodos(cursor),
  })

  return queryClient
}