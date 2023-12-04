import { Todo } from "@prisma/client";
import { Status, Priority } from "../dto";
export declare class TodoEntity implements Todo {
    id: number;
    title: string;
    status: Status;
    priority: Priority;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}
