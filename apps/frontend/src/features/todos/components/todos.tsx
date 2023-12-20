"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTodos, useTodoQueryKey } from "@/features/todos/api";
import { Todo as TodoType } from "@/features/todos/types";
import { Spinner } from "./ui";
import { Todo } from "./todo";

const Todos = () => {
  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: useTodoQueryKey.all,
      queryFn: () => getTodos(),
      placeholderData: keepPreviousData
    });

  return (
    <div className="flex flex-col justify-center py-5">
      <ul className="w-80 flex flex-col gap-5 justify-center">
        {data ? (
          data.map(
            ({ id, title, status, priority, tags, createdAt }: TodoType) => {
              return (
                <Todo
                  key={id}
                  title={title}
                  status={status}
                  priority={priority}
                  tags={tags}
                  createdAt={createdAt}
                />
              );
            }
          )
        ) : isFetching ? (
          <Spinner />
        ) : null}
      </ul>
      <hr className="h-px my-7 bg-slate-600 border-0" />
    </div>
  );
};

export { Todos };
