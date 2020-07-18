import { Injectable, forwardRef, Inject, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import {JwtService} from '@nestjs/jwt'


@Injectable()
export class AuthService {
    private saltRounds = 10;
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService,
        private jwtService: JwtService
        ){

    }
    
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if (user && this.comparePassword(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    
    async login(user: any) {
        const payload = { email: user.email, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async createToken( payload: any) {
        const expiresIn = process.env.EXPIRESIN || 3600;
        const secretOrKey = process.env.SECRET || 'MINH123';
        payload.password ="";
        const user = {payload};
        const token = jwt.sign(user,secretOrKey,{expiresIn})
        return {expires_in: expiresIn, token}
    }

    async getHash(password: string|undefined): Promise<string> {
        return bcrypt.hash(password,this.saltRounds);
    }
    async comparePassword(attempt: string|undefined, passwordHash: string|undefined): Promise<boolean> {
        let attemptHash = this.getHash(attempt);
        Logger.log(attempt)
        // console.log(bcrypt.compare(attempt,passwordHash))
        return await bcrypt.compare(attempt,passwordHash)
    }
}
