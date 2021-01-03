// import { Module, forwardRef } from '@nestjs/common';
// import { PrintService } from './print.service';
// import { PrintController } from './print.controller';
// import { HandleBarService } from '../shared/services/handlebar.service';
// import { UserModule } from '../modules/user/user.module';
// import { UserService } from '../modules/user/user.service';
// import { UserEntity } from '../entities/index.entity';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports:[forwardRef(() =>UserModule),TypeOrmModule.forFeature([UserEntity])],
//   providers: [PrintService,HandleBarService],
//   controllers: [PrintController]
// })
// export class PrintModule {}
