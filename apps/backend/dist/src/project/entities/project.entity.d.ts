import { Project } from "@prisma/client";
export declare class ProjectEntity implements Project {
    id: number;
    title: string;
    progress: number;
    createdAt: Date;
    updatedAt: Date;
}
