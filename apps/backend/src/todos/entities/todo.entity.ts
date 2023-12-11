import { ApiProperty } from "@nestjs/swagger";
import { Todo } from "@prisma/client";
import { Status } from "../dto";

export class TodoEntity implements Todo {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    status: Status;

    @ApiProperty()
    priority: number;

    @ApiProperty({ required: false })
    tags: string[];

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
