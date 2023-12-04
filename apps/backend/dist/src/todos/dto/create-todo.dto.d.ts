export declare enum Status {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}
export declare enum Priority {
    URGENT = "URGENT",
    CAN_WAIT = "CAN_WAIT",
    OPTIONAL = "OPTIONAL"
}
export declare class CreateTodoDto {
    title: string;
    tags: string[];
    status: Status;
    priority: Priority;
}
