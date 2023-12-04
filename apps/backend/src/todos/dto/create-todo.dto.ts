import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsEnum
} from 'class-validator';

export enum Status {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE"
}

export enum Priority {
  URGENT = "URGENT",
  CAN_WAIT = "CAN_WAIT",
  OPTIONAL = "OPTIONAL"
}

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({
    description: "Title of the task"
  })
  title: string;

  @MinLength(5, {
    each: true,
  })
  @IsOptional()
  @ApiProperty({
    description: "Tags which qualifies the task"
  })
  tags: string[];

  @IsOptional()
  @IsEnum(Status)
  @ApiProperty({ 
    description: "Current status of the task", 
    default: Status.NOT_STARTED, 
    enum: Status 
  })
  status: Status;

  @IsOptional()
  @IsEnum(Priority)
  @ApiProperty({ 
    description: "Priority level of the task",
    default: Priority.CAN_WAIT,
    enum: Priority 
  })
  priority: Priority;
}
