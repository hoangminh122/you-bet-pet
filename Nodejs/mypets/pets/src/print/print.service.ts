import { Injectable, Inject } from '@nestjs/common';
import { HandleBarService } from '../shared/services/handlebar.service';
import * as puppeteer from 'puppeteer';
import * as fs from 'fs-extra';

@Injectable()
export class PrintService {
  
    constructor(   
      @Inject(HandleBarService)
      private  handleBarService: HandleBarService){
       
    }
    async print(id:string) {
        const dataPrint = {
            name: "hoang minh",
            date: new Date().toLocaleDateString("en-US")
          };

    let buffer;
    const content = fs.readFileSync(
      './templates/test.html',
      'utf8',
    );
    const template = this.handleBarService.getInstance().compile(content);
    const html = template(dataPrint);

    const browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.CHROME_BIN || null,
      args: ['--no-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html);
    buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();
    console.log(buffer)
    return buffer;
    }
}
