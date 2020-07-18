import { IsNotEmpty } from "class-validator";

export class AdminSetTimeRemaining{
    @IsNotEmpty() 
    idUser:string;
    
    @IsNotEmpty()
    idSession:string
    
}