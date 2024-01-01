"use client";

import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/ui";
import { getProjects, useProjectQueryKey } from "../api";
import { Project as ProjectProps } from "../types";
import { Project } from "./project";

const Projects = () => {
  const { data, status, error } = useQuery({
    queryKey: useProjectQueryKey.all,
    queryFn: getProjects
  });

  return (
    <>
      {status === "pending" ? (
        <Spinner />
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <ul className="w-3/4 mt-4 flex flex-col gap-4">
          {data.map((project: ProjectProps) => {
            return <Project key={project.id} {...project} />;
          })}
          <li className="transition cursor-pointer h-12 flex justify-center items-center rounded text-2xl outline-dotted outline-2 outline-offset-2 outline-white mt-2 hover:bg-indigo-950">
            +
          </li>
        </ul>
      )}
    </>
  );
};

export { Projects };
