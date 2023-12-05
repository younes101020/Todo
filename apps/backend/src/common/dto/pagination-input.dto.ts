import { IsOptional, IsNumber, Min } from "class-validator";

export class PaginationInputDto {
    @IsNumber()
    @IsOptional()
    @Min(1)
    skip: number;

    @IsNumber()
    @IsOptional()
    @Min(1)
    take: number;
}