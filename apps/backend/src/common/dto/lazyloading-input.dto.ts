import { IsOptional, IsNumber, Min } from "class-validator";

export class LazyLoadingInputDto {
    @IsNumber()
    @IsOptional()
    cursor: number | null;

    @IsNumber()
    @IsOptional()
    @Min(3)
    limit: number = 3;
}