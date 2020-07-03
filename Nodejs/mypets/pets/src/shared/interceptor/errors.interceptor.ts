import { NestInterceptor, ExecutionContext, CallHandler, Injectable, BadRequestException, BadGatewayException } from "@nestjs/common";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs/internal/observable/throwError";

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>) {
        return next
            .handle()
            .pipe(
                catchError(err =>throwError(new BadGatewayException()))
            );

    }

}