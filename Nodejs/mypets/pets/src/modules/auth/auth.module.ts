import { Module, forwardRef, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
// import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/index.entity';
// import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './jwt/constants';
import * as passport from 'passport';
import { LocalStrategy } from './jwt/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports:[PassportModule,
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.SECRET ||'MINH123',
      signOptions:{ expiresIn:'1h'}
    })
],
  controllers:[AuthController,],
  providers: [AuthService,UserService,LocalStrategy,JwtStrategy],
  exports: [AuthModule,AuthService]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(passport.authenticate('jwt', { session:false}))
    .forRoutes(
      {path:'session', method:RequestMethod.GET},
    )
    
  }

}
// export class AuthModule{}
