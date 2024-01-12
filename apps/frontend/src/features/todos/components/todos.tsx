"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getTodos, useTodoQueryKey } from "@/features/todos/api";
import { Todo as TodoType } from "@/features/todos/types";
import { Spinner, Button } from "@/components/ui";
import { Todo } from "./todo";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTodoStore } from "@/stores";

const Todos = () => {
  const { ref, inView } = useInView();
  const { projectId } = useTodoStore();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: useTodoQueryKey.infinite(projectId),
    queryFn: ({ pageParam }) =>
      getTodos({ cursor: pageParam, initiatorId: projectId }),
    initialPageParam: 0,
    //enabled: !!projectId,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor;
    }
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="flex flex-col justify-center py-5">
      {status === "pending" ? (
        <Spinner />
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <ul className="w-80 flex flex-col gap-5 justify-center">
          {data.pages.map((group, i) => (
            <Fragment key={i}>
              {group.data.map(
                ({
                  id,
                  title,
                  status,
                  priority,
                  tags,
                  createdAt
                }: TodoType) => (
                  <Todo
                    key={id}
                    title={title}
                    status={status}
                    priority={priority}
                    tags={tags}
                    createdAt={createdAt}
                  />
                )
              )}
            </Fragment>
          ))}
        </ul>
      )}
      <div className="flex justify-center py-5">
        <Button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="bg-secondary text-secondary-foreground"
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Charger plus"
              : "Plus rien à charger"}
        </Button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};

export { Todos };
