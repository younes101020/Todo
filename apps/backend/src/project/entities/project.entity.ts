import { ApiProperty } from "@nestjs/swagger";
import { Project } from "@prisma/client";

export class ProjectEntity implements Project {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    progress: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
