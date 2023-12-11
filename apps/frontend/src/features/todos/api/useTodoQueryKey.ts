// Effective React Query Keys
// https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories
// https://tkdodo.eu/blog/leveraging-the-query-function-context#query-key-factories

export const useTodoQueryKey = {
    all: ['todos'],
    details: () => [...useTodoQueryKey.all, 'detail'],
    detail: (id: number) => [...useTodoQueryKey.details(), id],
    pagination: (page: number) => [...useTodoQueryKey.all, 'pagination', page],
    infinite: () => [...useTodoQueryKey.all, 'infinite'],
  };