import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/index.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports:[PassportModule,
    TypeOrmModule.forFeature([UserEntity]),
    UserModule,
],
  controllers:[AuthController],
  providers: [AuthService,JwtStrategy,UserService],
  exports: [AuthModule,AuthService]
})
export class AuthModule {}
