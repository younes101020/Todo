"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getTodos, useTodoQueryKey } from "@/features/todos/api";
import { Todo as TodoType } from "@/features/todos/types";
import { Spinner } from "./ui";
import { Todo } from "./todo";
import { Fragment } from "react";

const Todos = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: useTodoQueryKey.infinite(),
    queryFn: ({ pageParam }) => getTodos({ cursor: pageParam, initiatorId: 1 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor
  });

  return (
    <div className="flex flex-col justify-center py-5">
      <ul className="w-80 flex flex-col gap-5 justify-center">
        {status === "pending" ? (
          <Spinner />
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          data.pages.map((group, i) => (
            <Fragment key={i}>
              {group.map(
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
          ))
        )}
        <div>
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
          </button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </ul>
      <hr className="h-px my-7 bg-slate-600 border-0" />
    </div>
  );
};

export { Todos };
