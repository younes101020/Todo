'use client'

import { useQuery } from "@tanstack/react-query";
import { getTodos } from '@/features/todos/api'
import { Todo as TodoType } from '@/features/todos/types'
import { Todo } from "./todo";

const Todos = () => {
    const { data } = useQuery({ queryKey: ['todos'], queryFn: getTodos });

    return (
        <div className="flex justify-center py-5">
            <ul className="w-80 flex flex-col gap-5">
                {
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
                }
            </ul>
            
        </div>
    )
}

export { Todos };