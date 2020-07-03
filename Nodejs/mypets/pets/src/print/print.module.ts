import { Module } from '@nestjs/common';
import { PrintService } from './print.service';
import { PrintController } from './print.controller';
import { HandleBarService } from '../shared/services/handlebar.service';

@Module({
  providers: [PrintService,HandleBarService],
  controllers: [PrintController]
})
export class PrintModule {}
