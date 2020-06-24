import { Controller,Response, Post,Body,Request, UseGuards, Get, HttpStatus, Logger } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {AuthService} from './auth.service'
import { LoginDTO } from "./dto/auth.dto";
import { UserService } from "../user/user.service";
import { UserDTO } from "../user/dto/user.dto";
import { ApiTags, ApiBody } from "@nestjs/swagger";
import { UserEntity } from "../../entities/index.entity";
import { use } from "passport";
import { toUserLoginDto } from "../../shared/mapper/user.mapper";


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
    @Post('login')
    @ApiBody({type:[toUserLoginDto]})
    async loginUser(@Response() res:any,@Body() userDTO: LoginDTO){
        if(!(userDTO && userDTO.password)) {
            return res.status(HttpStatus.FORBIDDEN).json({
                message: 'Username and password aer requires!'
            })
        }

        const user = await this.userService.findByEmail(userDTO.email);
        if(user) {
            console.log("asd")
            Logger.log("vao")
            if(await this.authService.comparePassword(userDTO.password,user.password)){
               let token = await this.authService.createToken(user) ;
               return res.status(HttpStatus.OK).json(token);
            }
        }
        return res.status(HttpStatus.FORBIDDEN).json({
            message:'Username or password wrong!'
        })
    }    

    @Post('register')
    @ApiBody({type:[UserEntity]})
    async register(@Response() res: any,@Body() userDTO:UserDTO){
        if(!(userDTO && userDTO.email && userDTO.password)) {
            return res.status(HttpStatus.FORBIDDEN).json({
                message:'Username and password are required!'
            })
        }
        let user = await this.userService.findByEmail(userDTO.email);
        if(user){
            return res.status(HttpStatus.FORBIDDEN).json({message:'User exists'})
        } else {
             user = await this.userService.create(userDTO);
        }
        return res.status(HttpStatus.CREATED).json(user)
        // const payload = {
        //     email: user.email,
        // }
        // const token = await this.authService.createToken(payload);
        // return {
        //     user,
        //     token
        // };
    }


    // @Post('auth/login')
    // async login(@Request() req){
    //     // return this.authService.login(req.user)
    //     return req.user;
    // }
}