import { AuthService } from "../auth.service";
import { Injectable,UnauthorizedException, HttpException, HttpStatus, Logger} from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport'
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { doesNotMatch } from "assert";
import { async } from "rxjs/internal/scheduler/async";
import * as passport from "passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: process.env.SECRET,
      });
    }
  
    async validate(payload: any) {
      return { userId: payload.sub, email: payload.email };
    }
  }