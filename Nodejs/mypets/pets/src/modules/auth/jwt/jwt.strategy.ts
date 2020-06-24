import { AuthService } from "../auth.service";
import { Injectable,UnauthorizedException, HttpException, HttpStatus} from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport'
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { doesNotMatch } from "assert";
import { async } from "rxjs/internal/scheduler/async";
import * as passport from "passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback:true,
            secretOrKey: process.env.SECRET || 'MINH123',
        },
        async (req, payload,next) => await this.verify(req,payload,next)
        );
        passport.use(this);
    }

    async verify(req,payload: any,done:VerifiedCallback){
        const user = await this.authService.validateUser(payload);
        if(!user){
            return done(
                new HttpException('Unauthorized access',
                HttpStatus.UNAUTHORIZED),
                false
                );
        }

        return done(null, user, payload.iat);
    }

}