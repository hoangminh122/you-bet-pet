// import { AuthGuard } from "@nestjs/passport";
// import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
// import { boolean } from "@hapi/joi";
// import * as jwt from 'jsonwebtoken'
// import { decode } from "querystring";
// // export class LocalAuthGuard extends AuthGuard('local'){}

// @Injectable()
// export class AuthGuards implements CanActivate {
//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const request = context.switchToHttp().getRequest();
//         if(!request.headers.authorization){
//             return false;
//         }

//         const decoded = await this.validateToken(request.headers.authorization);

//         console.log(decoded);
//         return true;
//         // return validateRequest(request);
        
//     }

//    async validateToken(auth: string) {
//         if(auth.split(' ')[0] !== 'Bearer'){
//             throw new HttpException('Invalid token',HttpStatus.FORBIDDEN)
//         }
//         const token = auth.split(' ')[1];
//         try{
//             const decode = await jwt.verify(token,process.env.SECRET || 'MINH123');
//             return decode;
//         }catch(err){
//             const message = 'Token error: ' + (err.message || err.name);
//             throw new HttpException(message,HttpStatus.FORBIDDEN)
//         }
//    }
// }