<<<<<<< Updated upstream
import { IsOptional, IsNumber, Min } from "class-validator";

export class LazyLoadingInputDto {
    @IsNumber()
    @IsOptional()
    @Min(1)
    cursor: number;

    @IsNumber()
    @IsOptional()
    @Min(10)
    limit: number = 10;
}
=======
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class LazyLoadingInputDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: "This field can't be used in the first request, you can fill it with the id of the last todo you have retrieved, this will allow you to get the next setp of todos"
  })
  cursor: number;

  @IsNumber()
  @IsOptional()
  @Min(5)
  @ApiProperty({
    description: "The number of todo you want to retrieve"
  })
  limit: number = 5;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "The project id tied to todo(s)"
  })
  initiatorId: number;
}
>>>>>>> Stashed changes
