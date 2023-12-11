'use client'

import { Todo } from '@/features/todos/types';


const Todo = ({ title, tags, status, priority }: Omit<Todo, 'id'>) => {
    return (
        <li className="flex flex-col gap-2 border-2 px-4 py-2 border-red-400/75 rounded-md border-dotted ring-2 ring-red-400/50 ring-offset-2">
            <div className="flex gap-2 items-center">
                <input type="checkbox" className="appearance-none w-4 h-4 border-2 border-slate-400/75 rounded-full bg-white
                focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
                checked:bg-blue-500 checked:border-0
                disabled:border-steel-400 disabled:bg-steel-400" />
                <h1 className="text-sm whitespace-nowrap">
                {title}
                </h1>
            </div>
            <ul className="w-auto inline-block font-light flex gap-2 text-xs">
                {
                    tags.map((tag) => {
                        return (
                          <li className="bg-emerald-600/50 border-2 border-emerald-200 text-emerald-900 px-2 rounded-lg">
                            {tag}
                          </li>  
                        )
                    })
                }
            </ul>
        </li>
    )
        
}

export { Todo };