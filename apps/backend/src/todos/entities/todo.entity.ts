import { ApiProperty } from "@nestjs/swagger";
import { Todo } from "@prisma/client";
import { Status, Priority } from "../dto";

export class TodoEntity implements Todo {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    status: Status;

    @ApiProperty()
    priority: Priority;

    @ApiProperty({ required: false })
    tags: string[];

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
