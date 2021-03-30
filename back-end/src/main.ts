import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthModule } from '@modules/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const APP_NAME = config.get<string>('app_name');
  const APP_VERSION = config.get<string>('app_ver');
  const APP_DESCRIPTION = config.get<string>('app_description');
  const SWAGGER_AUTH_PATH = config.get<string>('swagger_auth_path');
  const APP_PORT = config.get<number>('app_port');

  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(APP_DESCRIPTION)
    .setVersion(APP_VERSION)
    .addBearerAuth()
    .build();

  const authDocument = SwaggerModule.createDocument(app, options, {
    include: [AuthModule],
  });
  SwaggerModule.setup(SWAGGER_AUTH_PATH, app, authDocument);

  await app.listen(APP_PORT | 3000);
}
(async () => await bootstrap())();
