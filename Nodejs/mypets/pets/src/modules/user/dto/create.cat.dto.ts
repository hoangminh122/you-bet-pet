import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    email   : string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    avatar  : string;

    @ApiProperty()
    @IsString()
    phone   : string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    address : string;

}