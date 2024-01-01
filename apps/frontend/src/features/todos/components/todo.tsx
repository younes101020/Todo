"use client";

import { Todo as TodoType } from "@/features/todos/types";
import { Tag } from "./ui";

const initialData = {
  priority: "border-green-400/75 ring-green-400/50"
};

const Todo = ({
  title,
  tags,
  status,
  priority,
  createdAt
}: Omit<TodoType, "id">) => {
  let color: string;

  switch (priority) {
    case 1:
      color = "border-green-400/75 ring-green-400/50";
      break;
    case 2:
      color = "border-orange-400/75 ring-orange-400/50";
      break;
    case 3:
      color = "border-red-400/75 ring-red-400/50";
      break;
    default:
      color = "";
  }

  return (
    <li
      className={`flex flex-col gap-2 border-2 px-5 py-2 ${color} rounded-md border-dotted ring-offset-slate-900 ring-2 ring-offset-2`}
    >
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="appearance-none w-4 h-4 border-2 border-slate-400/75 rounded-full bg-white
                focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
                checked:bg-blue-500 checked:border-0
                disabled:border-steel-400 disabled:bg-steel-400"
        />
        <h1 className="text-sm whitespace-nowrap ">{title}</h1>
      </div>
      <ul className="font-light grid grid-cols-3 gap-2 text-xs">
        {tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />;
        })}
      </ul>
    </li>
  );
};

export { Todo };
