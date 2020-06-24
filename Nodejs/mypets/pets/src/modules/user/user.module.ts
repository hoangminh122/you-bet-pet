import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/index.entity';
import { APP_FILTER } from '@nestjs/core';
import { ForbiddenException } from '../../shared/errors/ForbiddenException';
import { JoiValidationPipe } from '../../shared/pipes/JoiValidationPipe';
import { MulterModule } from '@nestjs/platform-express';
// import { AuthGuards } from '../auth/jwt/local-auth.guard';
// import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    MulterModule.register({
      dest: 'uploads',
    }),
    forwardRef(() =>AuthModule)
    // AuthService
  ],
  controllers: [UserController],
  providers: [MulterModule, UserService, {
    provide: APP_FILTER,
    useClass: ForbiddenException
  },
    JoiValidationPipe,
    // AuthGuards,
    // AuthService
  ],
  exports: [UserService,UserModule]
})
export class UserModule { }
