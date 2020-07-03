import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import {Observable, of} from 'rxjs'

export class CacheInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>) {
        const isCached = false;
        if(isCached) {
            console.log("catchInterceptor")
            return of([])
        }
        return next.handle();
    }

}