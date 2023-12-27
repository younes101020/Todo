// Effective React Query Keys
// https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories
// https://tkdodo.eu/blog/leveraging-the-query-function-context#query-key-factories

export const useProjectQueryKey = {
  all: ["projects"],
  details: () => [...useProjectQueryKey.all, "detail"],
  detail: (id: number) => [...useProjectQueryKey.details(), id],
  infinite: (cursor: number = 0) => [
    ...useProjectQueryKey.all,
    "infinite",
    cursor
  ]
};
