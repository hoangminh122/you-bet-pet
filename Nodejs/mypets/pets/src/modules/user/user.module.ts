import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from '../../entities/index.entity';
import { APP_FILTER } from '@nestjs/core';
import { ForbiddenException } from '../../shared/errors/ForbiddenException';
import { JoiValidationPipe } from '../../shared/pipes/JoiValidationPipe';
import { MulterModule } from '@nestjs/platform-express';
import { AuthGuards } from '../../auth/jwt/local-auth.guard';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]), MulterModule.register({
    dest:'uploads',
})],
  controllers:[UserController],
  providers:[ MulterModule,UserService,{
    provide:APP_FILTER,
    useClass:ForbiddenException
  },
  JoiValidationPipe,
  AuthGuards
 
]
})
export class UserModule {}
