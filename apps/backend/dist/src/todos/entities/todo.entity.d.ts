import { Todo } from "@prisma/client";
import { Status } from "../dto";
export declare class TodoEntity implements Todo {
    id: number;
    title: string;
    status: Status;
    priority: number;
    initiatorId: number;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}
