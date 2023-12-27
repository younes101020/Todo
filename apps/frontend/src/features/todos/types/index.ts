import { BaseEntity } from "@/types";

export type Project = {
  title: string;
  progress: number;
} & BaseEntity;
