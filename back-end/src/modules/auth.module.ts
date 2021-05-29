import { AuthController } from '@controllers/auth/auth.controller';
import { JwtStrategy } from '@controllers/auth/jwt.strategy';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@repository/user.repository';
import { AuthService } from '@services/auth/auth.service';
import { TokenFactoryService } from '@services/auth/token.factory.service';
import { UserService } from '@services/user/user.service';

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
