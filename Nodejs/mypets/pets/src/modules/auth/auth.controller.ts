import { Controller, Response, Post, Body, Request, UseGuards, Get, HttpStatus, Logger, UnauthorizedException, UseFilters, ForbiddenException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from './auth.service'
import { LoginDTO } from "./dto/auth.dto";
import { UserService } from "../user/user.service";
// import { UserDTO } from "../user/dto/user.dto";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { UserEntity } from "../../entities/index.entity";
import { use } from "passport";
import { toUserLoginDto } from "../../shared/mapper/user.mapper";
import { JwtAuthGuard } from "./jwt/jwt-auth.guard";
import { LoggerMiddleware } from "src/shared/middleware/logger.middleware";
import { LocalAuthGuard } from "./jwt/local-auth.guard";
import { LocalStrategy } from "./jwt/local.strategy";
import { HttpExceptionFilter } from "../../shared/filters/http-exception.filter";
import { CreateUserDto } from "../user/dto/create.cat.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private localStrategy: LocalStrategy
    ) { }

    @Post('login')
    @UseFilters(new HttpExceptionFilter())
    @ApiResponse({ status: 200, description: 'Create new user success !.' })
    // @ApiBody({ type: [UserEntity] })
    async login(@Body() req:LoginDTO) {
        let result = null;
        const user = await this.localStrategy.validate(req.email, req.password);
        if(user != null){
            result= await this.authService.login(user);
            return result;
        }
        return new UnauthorizedException;
        // res.status(200).send("UnauthorizedException");
        // throw new UnauthorizedException();
    }

    @Post('register')
    // @ApiBody({ type: [UserEntity] })
    async register(@Response() res: any, @Body() userDTO: CreateUserDto) {
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