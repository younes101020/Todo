import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsInt
} from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({
    description: "Title of the project"
  })
  title: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ 
    description: "Current status of the task",
  })
  progress: number;
}
