import { Injectable, forwardRef, Inject, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'


@Injectable()
export class AuthService {
    private saltRounds = 10;
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService
        ){

    }
    async createToken( payload: any) {
        const expiresIn = process.env.EXPIRESIN || 3600;
        const secretOrKey = process.env.SECRET || 'MINH123';
        payload.password ="";
        const user = {payload};
        const token = jwt.sign(user,secretOrKey,{expiresIn})
        return {expires_in: expiresIn, token}
    }


    async signPayload(payload: any){
        return sign(payload,process.env.SECRET || 'MINH123', {expiresIn:'3600'});
    }

    async validateUser(payload: any){
        if(payload && payload.email){
            return Boolean(await this.userService.findUser(payload));
        }

        return false;

    }

    async getHash(password: string|undefined): Promise<string> {
        return bcrypt.hash(password,this.saltRounds);
    }
    async comparePassword(attempt: string|undefined, passwordHash: string|undefined): Promise<boolean> {
        let attemptHash = this.getHash(attempt);
        Logger.log(attempt)
        console.log(attempt)
        console.log(passwordHash)
        // console.log(bcrypt.compare(attempt,passwordHash))
        return await bcrypt.compare(attempt,passwordHash)
    }
}
