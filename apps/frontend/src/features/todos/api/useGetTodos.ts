import { getQueryClient } from "@/hooks";
import { useTodoQueryKey } from "./useTodoQueryKey";
import { apiClient } from "./http-common";
import { useProjectQueryKey } from "@/features/projects/api";
import { useQueryClient } from "@tanstack/react-query";
import { useGetProjects } from "@/features/projects/api";
import { Project } from "@/features/projects/types";

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
  const projectsClient = await useGetProjects();
  const projects = projectsClient.getQueryData(
    useProjectQueryKey.all
  ) as Project[];

  await queryClient.prefetchInfiniteQuery({
    queryKey: useTodoQueryKey.infinite(parseInt(projects[0].id)),
    queryFn: ({ pageParam }) =>
      getTodos({
        cursor: pageParam,
        initiatorId: parseInt(projects[0].id)
      }),
    initialPageParam: 0
  });

  return queryClient;
}
