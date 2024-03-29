import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsEnum,
  IsInt,
  Min,
  Max,
  IsNumber
} from 'class-validator';

export enum Status {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE"
}

export class CreateTodoDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: "The project id tied to this todo"
  })
  initiatorId: number;

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
  @IsInt()
  @Min(1)
  @Max(3)
  @ApiProperty({ 
    description: "Priority level of the task",
    default: 2
  })
  priority: 2;
}
