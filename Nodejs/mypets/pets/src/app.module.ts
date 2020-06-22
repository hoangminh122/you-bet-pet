import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './modules/user/user.module';
import { SessionModule } from './modules/session/session.module';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { ForbiddenException } from './shared/errors/ForbiddenException';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { UserController } from './modules/user/user.controller';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [TypeOrmModule.forRoot(), UserModule,SessionModule, AuthModule,
    MulterModule.register({
      dest:'uploads',
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        // .forRoutes('user');
        // .forRoutes({path:'user',method:RequestMethod.GET})
        .exclude(
          {path:'user/upload',method:RequestMethod.POST},
        )
        .forRoutes(UserController);
       



  }

}

// {
//   provide:APP_FILTER,
//   useClass:ForbiddenException
// }