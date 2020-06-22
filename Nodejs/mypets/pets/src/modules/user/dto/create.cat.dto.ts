import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {

    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    email   : string;

    @IsString()
    avatar  : string;

    @IsNumber()
    phone   : string;

    @IsString()
    address : string;

}