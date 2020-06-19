import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from '../entities/index.entity';
import { APP_FILTER } from '@nestjs/core';
import { ForbiddenException } from '../shared/ForbiddenException';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers:[UserController],
  providers: [UserService,{
    provide:APP_FILTER,
    useClass:ForbiddenException
  }]
})
export class UserModule {}
