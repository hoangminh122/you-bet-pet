import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class  SessionDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nameSession:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    moneyWin: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userWin:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    state:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    longTime:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    timeStart:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    userOwnId:string;
}

