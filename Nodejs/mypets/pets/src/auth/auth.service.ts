import { Injectable } from '@nestjs/common';
import { UserService } from '../modules/user/user.service';
import {JwtService} from '@nestjs/jwt'
import { sign } from 'jsonwebtoken';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService
        ){

    }

    async signPayload(payload: any){
        return sign(payload, 'secretKey', {expiresIn:'12'});
    }

    async validateUser(payload: any){
        return await this.userService.findUser(payload);
    }

}
