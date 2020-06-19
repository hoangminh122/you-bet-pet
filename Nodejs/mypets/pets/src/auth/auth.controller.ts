import { Controller, Post,Body,Request, UseGuards, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "./local-auth.guard";
import {AuthService} from './auth.service'
import { LoginDTO } from "./dto/auth.dto";
import { UserService } from "../user/user.service";
import { UserDTO } from "../user/dto/user.dto";
import { ApiTags, ApiBody } from "@nestjs/swagger";
import { UserEntity } from "../entities/index.entity";


@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor( 
        private authService: AuthService,
        private userService: UserService
        ){}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    tempAuth(){
        return {auth:'work'};
    }

    // async login(@Body() userDTO: LoginDTO){
    //     const user = await this. userService.findUser(userDTO.)
    // }    

    @Post('register')
    @ApiBody({type:[UserEntity]})
    async register(@Body() userDTO:UserDTO){
        const user = await this.userService.create(userDTO);
        const payload = {
            username: user.username,
        }
        const token = await this.authService.signPayload(payload);
        return {
            user,
            token
        };
    }


    // @Post('auth/login')
    // async login(@Request() req){
    //     // return this.authService.login(req.user)
    //     return req.user;
    // }
}