import { AuthModule } from '@modules/auth.module';
import { CatalogModule } from '@modules/catalog.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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
    include: [AuthModule, CatalogModule],
  });
  SwaggerModule.setup(SWAGGER_API_DOCS, app, apiDocument);

  await app.listen(APP_PORT | 3000);
}
(async () => await bootstrap())();
