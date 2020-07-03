import { Controller, Response, Post, Body, Request, UseGuards, Get, HttpStatus, Logger } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from './auth.service'
import { LoginDTO } from "./dto/auth.dto";
import { UserService } from "../user/user.service";
import { UserDTO } from "../user/dto/user.dto";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { UserEntity } from "../../entities/index.entity";
import { use } from "passport";
import { toUserLoginDto } from "../../shared/mapper/user.mapper";
import { JwtAuthGuard } from "./jwt/jwt-auth.guard";
import { LoggerMiddleware } from "src/shared/middleware/logger.middleware";
import { LocalAuthGuard } from "./jwt/local-auth.guard";
import { LocalStrategy } from "./jwt/local.strategy";

@ApiTags('auth')
@Controller()
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private localStrategy: LocalStrategy
    ) { }

    @Post('login')
    @ApiResponse({ status: 200, description: 'Create new user success !.' })
    @ApiBody({ type: [UserEntity] })
    async login(@Body() req) {
        let user = this.localStrategy.validate(req.email, req.password);
        console.log(req)
        return this.authService.login(user);
    }

    @Post('register')
    @ApiBody({ type: [UserEntity] })
    async register(@Response() res: any, @Body() userDTO: UserDTO) {
        console.log("asdas")
        if (!(userDTO && userDTO.email && userDTO.password)) {
            return res.status(HttpStatus.FORBIDDEN).json({
                message: 'Username and password are required!'
            })
        }
        let user = await this.userService.findByEmail(userDTO.email);
        if (user) {
            return res.status(HttpStatus.FORBIDDEN).json({ message: 'User exists' })
        } else {
            user = await this.userService.create(userDTO);
        }
        // return res.status(HttpStatus.CREATED).json(user)
        return this.authService.login(user);
        // const payload = {
        //     email: user.email,
        // }
        // const token = await this.authService.createToken(payload);
        // return {
        //     user,
        //     token
        // };
    }


   

    
}