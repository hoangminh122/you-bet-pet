import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder().setTitle('Pets API')
  .setDescription('Pets Auction sesion API')
  .setVersion('1.0')
  .addTag('pets')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('doc',app,document)
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3006);
}
bootstrap();
