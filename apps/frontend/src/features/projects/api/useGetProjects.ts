import { getQueryClient } from "@/hooks";
import { useProjectQueryKey } from "./useProjectQueryKey";
import { apiClient } from "./http-common";

export const getProjects = async () => {
  const projects = await apiClient.get("");
  return projects.data;
};

// Prefetch projects from server side
export default async function useGetProjects() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: useProjectQueryKey.all,
    queryFn: getProjects
  });

  return queryClient;
}
