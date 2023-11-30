import { Todo } from "@prisma/client";
export declare class TodoEntity implements Todo {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}
