import { IsOptional, IsNumber, Min, ValidateIf } from 'class-validator';

export class LazyLoadingInputDto {
  @IsNumber()
  @IsOptional()
  cursor: number;

  @IsNumber()
  @IsOptional()
  @Min(5)
  limit: number = 5;
}
