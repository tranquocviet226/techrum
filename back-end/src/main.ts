import { AuthModule } from '@modules/auth.module';
import { CategoryModule } from '@modules/category.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const APP_NAME = config.get<string>('app_name');
  const APP_VERSION = config.get<string>('app_ver');
  const APP_DESCRIPTION = config.get<string>('app_description');
  const SWAGGER_API_DOCS = config.get<string>('swagger_api_docs');
  const APP_PORT = config.get<number>('app_port');

  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(APP_DESCRIPTION)
    .setVersion(APP_VERSION)
    .addBearerAuth()
    .build();

  const apiDocument = SwaggerModule.createDocument(app, options, {
    include: [AuthModule, CategoryModule],
  });
  SwaggerModule.setup(SWAGGER_API_DOCS, app, apiDocument);

  app.use(cors()) // Use this after the variable declaration
  await app.listen(APP_PORT | 3000);
}
(async () => await bootstrap())();
