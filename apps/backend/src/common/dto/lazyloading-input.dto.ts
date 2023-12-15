import { IsOptional, IsNumber, Min, ValidateIf } from 'class-validator';

export class LazyLoadingInputDto {
  @IsNumber()
  @IsOptional()
  cursor: number;

  @IsNumber()
  @IsOptional()
  @Min(3)
  limit: number = 3;
}
