import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CustomLoggerService } from '../logger/custom.logger.service';
import { AuthController } from '../controlles/auth.controller';
import { UserRepository } from '../repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@service/auth.service';
import { TokenFactoryService } from '@service/token.factory.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('secret_key'),
      }),
      inject: [ConfigService],
    }),
    ConfigService,
    CustomLoggerService,
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService, TokenFactoryService],
  exports: [TypeOrmModule],
})
export class AuthModule {}
