import { Module } from '@nestjs/common';
import * as path from 'path';
import { I18nModule, I18nJsonParser } from 'nestjs-i18n';
import {  ConfigService } from '@nestjs/config';

@Module({
  imports: [
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: configService.get<string>('appLang'), // e.g., 'en'
        parserOptions: {
          path: path.join(__dirname, '/i18n/'),
        },
      }),
      parser: I18nJsonParser,
      inject: [ConfigService],
    }),
  ],
  controllers: [],
})
export class AppModule {}