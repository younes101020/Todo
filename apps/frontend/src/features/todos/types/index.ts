import { BaseEntity } from "@/types";

export type Todo = {
  title: string;
  status: "DONE" | "NOT_STARTED" | "IN_PROGRESS";
  priority: 1 | 2 | 3;
  tags: string[];
} & BaseEntity;
