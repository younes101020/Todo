import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTodoQueryKey } from "./useTodoQueryKey";
import { toast } from "react-hot-toast";
import { Todo } from "../types";
import { apiClient } from "./http-common";

const createTodoFn = async (newTodo: Todo) => {
  const response = await apiClient.post("", newTodo);
  return response.data;
};

// https://tanstack.com/query/latest/docs/react/guides/optimistic-updates
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodoFn,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: useTodoQueryKey.all });
    },
    onSuccess: (data) => {
      toast.success(`New User ${data.title} Created`);
    },
    onError: (err, newTodo, context?: any) => {
      queryClient.setQueryData(useTodoQueryKey.all, context.previousUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: useTodoQueryKey.all });
    }
  });
}
