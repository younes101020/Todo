import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProjectQueryKey } from "./useProjectQueryKey";
import { toast } from "react-hot-toast";
import { Todo } from "../types";
import { apiClient } from "./http-common";

const createProjectFn = async (newTodo: Todo) => {
  const response = await apiClient.post("", newTodo);
  return response.data;
};

// https://tanstack.com/query/latest/docs/react/guides/optimistic-updates
export function useCreateProjectUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProjectFn,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: useProjectQueryKey.all });
    },
    onSuccess: (data) => {
      toast.success(`New User ${data.title} Created`);
    },
    onError: (err, newTodo, context?: any) => {
      queryClient.setQueryData(
        useProjectQueryKey.all,
        context.previousProjects
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: useProjectQueryKey.all });
    }
  });
}
