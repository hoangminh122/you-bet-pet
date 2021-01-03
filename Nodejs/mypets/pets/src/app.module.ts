import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SessionModule } from './modules/session/session.module';
import { APP_FILTER } from '@nestjs/core';
import { ForbiddenException } from './shared/errors/ForbiddenException';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { MulterModule } from '@nestjs/platform-express';
import { AdminService } from './modules/admin/admin.service';
import { AdminModule } from './modules/admin/admin.module';
import { AppGateway } from './modules/gateway/gateway.service';
// import { ChatGateway } from './modules/chat/chat.gateway';
import { AlertController } from './modules/alert/alert.controller';
import { AlertGateway } from './modules/alert/alert.gateway';
import { EventModule } from './modules/events/events.module';
import { DatabaseModule } from './modules/database/database.module';


@Module({
  imports: [
  //   MulterModule.register({
  //     dest:'uploads',
  // }),
    DatabaseModule,
    SessionModule
    // AppGateway,
    // ChatGateway,
    // EventModule
    // AlertGateway,
    // AlertController
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
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