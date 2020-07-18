// import { Controller, Param, Res, Get } from '@nestjs/common';
// import { PrintService } from './print.service';
// import { ApiTags } from '@nestjs/swagger';

// @ApiTags('print')
// @Controller('print')
// export class PrintController {
//     constructor(private printService: PrintService) {

//     }

//     @Get(':id')
//     public async printPurchaseOrder(@Param('id') id: string, @Res() res) {
//         res.header(
//           'Content-disposition',
//           `attachment; filename=Export-PO-${Date.now()}.pdf`,
//         );
//         res.header('Content-Type', 'application/pdf');
//         const buffer = await this.printService.print(id);
//         res.send(buffer);
//     }



// }
