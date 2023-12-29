import { Project as ProjectProps } from "../types";
import { ProgressBar } from "./ui";

const Project = ({ progress, title }: ProjectProps) => {
  return (
    <li className="transition flex flex-col gap-2 p-4 cursor-pointer hover:bg-indigo-950/50 duration-300">
      {title}
      <ProgressBar value={progress} />
    </li>
  );
};

export { Project };
