import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './modules/user/user.module';
import { SessionModule } from './modules/session/session.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { ForbiddenException } from './shared/errors/ForbiddenException';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { UserController } from './modules/user/user.controller';
import { MulterModule } from '@nestjs/platform-express';
import { PrintModule } from './print/print.module';
import { AdminService } from './modules/admin/admin.service';
import { AdminModule } from './modules/admin/admin.module';
import { AppGateway } from './modules/gateway/gateway.service';
import { ChatGateway } from './modules/chat/chat.gateway';
import { AlertController } from './modules/alert/alert.controller';
import { AlertGateway } from './modules/alert/alert.gateway';
import { EventModule } from './modules/events/events.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,SessionModule,
    AuthModule,AdminModule,
    MulterModule.register({
      dest:'uploads',
  }),
    PrintModule,
    AppGateway,
    ChatGateway,
    EventModule
    // AlertGateway,
    // AlertController
  ],
  controllers: [AppController,AlertController],
  providers: [AppService,AlertGateway],
  exports:[AlertGateway]
})

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//       consumer
//         .apply(LoggerMiddleware)
//         // .forRoutes('user');
//         // .forRoutes({path:'user',method:RequestMethod.GET})
//         .exclude(
//           {path:'user/upload',method:RequestMethod.POST},
//         )
//         .forRoutes(UserController);
export class AppModule {}



//   }

// }

// {
//   provide:APP_FILTER,
//   useClass:ForbiddenException
// }