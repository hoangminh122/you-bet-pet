import { NestInterceptor, ExecutionContext, CallHandler, Injectable, RequestTimeoutException } from "@nestjs/common";
import { timeout, catchError } from "rxjs/operators";
import { TimeoutError, throwError } from "rxjs";

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>) {
        return next
            .handle()
            .pipe(
               timeout(5000),
                catchError(err => {
                    if(err instanceof TimeoutError) {
                        return throwError(new RequestTimeoutException())
                    }
                    return throwError(err)
                })
            );
    }
}