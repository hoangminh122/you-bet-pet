import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { AuthService } from "../auth.service";
import passport from "passport";
import { ForbiddenException } from "../../../shared/errors/ForbiddenException";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
        
        ) {
        super();
    }

    async validate(email: string, password: string) {
        const user = await this.authService.validateUser(email,password);
        return user;
    }

}