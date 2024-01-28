// Effective React Query Keys
// https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories
// https://tkdodo.eu/blog/leveraging-the-query-function-context#query-key-factories

export const useTodoQueryKey = {
  all: ["todos"] as const,
  details: () => [...useTodoQueryKey.all, "detail"] as const,
  detail: (id: number) => [...useTodoQueryKey.details(), id] as const,
  infinite: (projectId: number, cursor: number = 0) =>
    [...useTodoQueryKey.all, projectId, cursor] as const
};
