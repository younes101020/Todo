import { Project as ProjectProps } from "../types";
import { ProgressBar } from "./ui";

const Project = ({ progress, title }: ProjectProps) => {
  return (
    <>
      {title}
      <ProgressBar value={progress} />
    </>
  );
};

export { Project };
