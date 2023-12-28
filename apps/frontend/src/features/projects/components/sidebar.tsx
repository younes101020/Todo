"use client";

import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/ui";
import { getProjects, useProjectQueryKey } from "../api";
import { Project as ProjectProps } from "../types";
import { Project } from "./project";

const Sidebar = () => {
  const { data, status, error } = useQuery({
    queryKey: useProjectQueryKey.all,
    queryFn: getProjects
  });

  return (
    <aside className="w-2/12 bg-indigo-900 h-screen flex flex-col items-center text-white p-6 fixed top-0 left-0">
      <h1 className="text-2xl font-medium">Projet(s) 🧑‍💻</h1>
      <ul className="inline-block mt-4 *:truncate">
        {status === "pending" ? (
          <Spinner />
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          data.slice(2, 5).map((project: ProjectProps) => {
            return <Project key={project.id} {...project} />;
          })
        )}
        <li className="flex justify-center rounded border-dashed border-2 mt-2">
          +
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
