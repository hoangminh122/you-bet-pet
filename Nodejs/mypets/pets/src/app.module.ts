import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { ForbiddenException } from './shared/ForbiddenException';


@Module({
  imports: [TypeOrmModule.forRoot(), UserModule,SessionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

// {
//   provide:APP_FILTER,
//   useClass:ForbiddenException
// }