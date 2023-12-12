import { IsOptional, IsNumber, Min } from "class-validator";

export class LazyLoadingInputDto {
    @IsNumber()
    @IsOptional()
    @Min(1)
    cursor: number;

    @IsNumber()
    @IsOptional()
    @Min(3)
    limit: number = 3;
}