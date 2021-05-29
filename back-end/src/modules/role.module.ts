import { JwtAuthGuard } from '@controllers/auth/jwt.guard';
import { JwtStrategy } from '@controllers/auth/jwt.strategy';
import { RolesGuard } from '@controllers/auth/role.guard';
import { RoleController } from '@controllers/role/role.controller';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from '@repository/role.repository';
import { UserRepository } from '@repository/user.repository';
import { RoleService } from '@services/role/role.service';
import { UserService } from '@services/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleRepository, UserRepository]),
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
  controllers: [RoleController],
  providers: [RoleService, JwtStrategy, RolesGuard, JwtAuthGuard, UserService],
  exports: [TypeOrmModule, RoleService],
})
export class RoleModule {}
