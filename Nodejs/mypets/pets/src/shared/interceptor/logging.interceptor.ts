import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { tap } from 'rxjs/operators';
import { Observable } from "rxjs/internal/Observable";

export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log('Before');  
        
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => console.log(`After... ${Date.now() - now}ms`)),
            );
    }
    

}