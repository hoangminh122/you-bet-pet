// import { Controller, Param, Res, Get } from '@nestjs/common';
// import { PrintService } from './print.service';
// import { ApiTags } from '@nestjs/swagger';
// import { UserService } from '../modules/user/user.service';
// import { UserModule } from '../modules/user/user.module';

// @ApiTags('print')
// @Controller('print')
// export class PrintController {
//     constructor(
//         private printService: PrintService,
      
//         ) {

//     }

//     @Get('export/:id')
//     public async exportApplicationInfo(@Param('id') id: string, @Res() res) {
//       const result = await this.printService.export(id);
//       const fileName = result.fileName;
//       res.header('Content-disposition', `attachment; filename=${fileName}.pdf`);
//       res.header('Content-Type', 'application/pdf');
//       res.send(result.buffer);
//     }



// }
