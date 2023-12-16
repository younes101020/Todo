'use client'

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTodos, useTodoQueryKey } from '@/features/todos/api'
import { Todo as TodoType } from '@/features/todos/types'
import { Todo } from "./todo";

const Todos = () => {
    const { 
        isPending,
        isError,
        error,
        data,
        isFetching,
        isPlaceholderData,
    } = useQuery({ 
        queryKey: useTodoQueryKey.all,
        queryFn: () => getTodos(),
        placeholderData: keepPreviousData,
    });
  
    return (
        <div className="flex justify-center py-5">
            <ul className="w-80 flex flex-col gap-5">
                {
                    data ? 
                        data.map(({ id, title, status, priority, tags, createdAt }: TodoType) => {
                            return <Todo 
                                        key={id} 
                                        title={title}
                                        status={status}
                                        priority={priority}
                                        tags={tags}
                                        createdAt={createdAt}
                                    />
                        }) 
                        : 
                        "server error component"
                }
            </ul>
            
        </div>
    )
}

export { Todos };