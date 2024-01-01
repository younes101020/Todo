"use client";

import { useTodoStore } from "@/stores";
import { Project as ProjectProps } from "../types";
import { ProgressBar } from "./ui";

const Project = ({ progress, title, id }: ProjectProps) => {
  const { updateSelectedProject } = useTodoStore();

  return (
    <li
      onClick={() => updateSelectedProject(parseInt(id))}
      className="transition flex flex-col gap-2 p-4 cursor-pointer hover:bg-indigo-950/50 duration-300 outline-dotted outline-2 outline-offset-2 rounded outline-indigo-950"
    >
      <p className="truncate">{title}</p>
      <ProgressBar value={progress} />
    </li>
  );
};

export { Project };
