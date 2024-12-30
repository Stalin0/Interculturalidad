import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateProductRequest {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsPositive()
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;
}