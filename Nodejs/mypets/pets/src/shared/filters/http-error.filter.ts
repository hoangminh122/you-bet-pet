
// import {Catch, ExceptionFilter, ArgumentsHost, HttpException, Logger} from '@nestjs/common'

// @Catch()
// export class HttpErrorFilter implements ExceptionFilter {
//     catch(exception: HttpException, host: ArgumentsHost) {
//         const ctx = host.switchToHttp();
//         const request = ctx.getRequest();
//         const response = ctx.getResponse();
//         // const status = exception.getStatus();
//         Logger.log(exception);

//         const errorResponse = {
//             // code: status,
//             timestamp: new Date().toLocaleDateString(),
//             path:request.url,
//             method: request.method,
//             message:exception.message || 'not found'
//         }
 
//         Logger.error('${request.method} ${request.url}',
//         JSON.stringify(errorResponse),
//         'ExceptionFilter'
        
//         )
//         response.status(404).json(errorResponse);

//     }

// }