import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import {NestExpressApplication} from '@nestjs/platform-express'
import {join} from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //app.useStaticAssets(join(__dirname,'..','static'));

  const options = new DocumentBuilder().setTitle('Pets API')
  .setDescription('Pets Auction sesion API')
  .setVersion('1.0')
  .setBasePath('api')
  .addBearerAuth(
    
  )
  .addTag('pets')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('doc',app,document)
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  await app.listen(3006);
}
bootstrap();
