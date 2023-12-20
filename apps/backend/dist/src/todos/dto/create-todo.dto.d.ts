export declare enum Status {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}
export declare class CreateTodoDto {
    initiatorId: number;
    title: string;
    tags: string[];
    status: Status;
    priority: 2;
}
