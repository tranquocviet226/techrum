import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import listEntity from '@entities/index';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<"mysql" | "mariadb">('db_connection'),
        host: configService.get<string>('db_host'),
        port: configService.get<number>('db_port'),
        username: configService.get<string>('db_username'),
        password: configService.get<string>('db_password'),
        database: configService.get<string>('db_name'),
        entities: listEntity,
        synchronize: true
      }),
      inject: [ConfigService]
    }),
  ],
  exports:[TypeOrmModule]
})
export class DatabaseModule {
}

