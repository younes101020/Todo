import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTodoQueryKey } from "./useTodoQueryKey";
import { toast } from "react-hot-toast";
import { Todo } from "../types";

const createTodoFn = async (newTodo: Todo) => {
  const response = await fetch(`${process.env.REST_API_BASE_URL}/todos`, {
    method: "POST",
    body: JSON.stringify(newTodo)
  });
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }
  return response.json();
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
