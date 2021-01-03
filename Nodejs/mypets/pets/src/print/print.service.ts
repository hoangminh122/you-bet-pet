// import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
// import { HandleBarService } from '../shared/services/handlebar.service';
// import * as puppeteer from 'puppeteer';
// import * as fs from 'fs-extra';
// import { UserService } from '../modules/user/user.service';

// @Injectable()
// export class PrintService {

//     constructor(
//         @Inject(HandleBarService)
//         private handleBarService: HandleBarService,
//         private userService:UserService
//         ) {

//     }

//     getFileName(applicant: any) {
//         // return applicant.enrolmentCode
//         //   ? Math.random() + ' - ' + applicant.username
//         //   : applicant.username;


//       }

//     async export(id: string) {

//         //get user 
//         const user =await this.userService.findById(id);
//         if(!user){
//             throw new HttpException('User not found',HttpStatus.NOT_FOUND);
//         }
//         console.log("user")
//         console.log(user)
//         console.log("user")

//         this.getFileName(user);


//         //end
//         const dataPrint = {
//             name: "hoang minh",
//             date: new Date().toLocaleDateString("en-US")
//         };

//         const result = {
//             fileName: null,
//             buffer: null,
//         };
//         result['fileName'] = this.getFileName(user);

//         const content = await fs.readFileSync('./templates/index.html', 'utf8');
//         const template = this.handleBarService.getInstance().compile(content);
//         const html = template(dataPrint);

//         const browser = await puppeteer.launch({
//             headless: true,
//             executablePath: process.env.CHROME_BIN || null,
//             args: ['--no-sandbox'],
//         });
//         const page = await browser.newPage();

//         await page.setContent(html, { waitUntil: 'domcontentloaded' });
//         // await page.waitForSelector('#avatar');
//         // await page.waitForSelector('#coverPage');

//         result['buffer'] = await page.pdf({
//             format: 'A4',
//             printBackground: true,
//             displayHeaderFooter: true,
//             headerTemplate: '<div><!-- no header hack --></div>',
//             footerTemplate: '<div><!-- no header hack --></div>',
//             margin: {
//                 top: '10mm',
//                 bottom: '10mm'
//             },
//         });

//         await browser.close();

//         //get fileName
//         return result;
//     }
// }
