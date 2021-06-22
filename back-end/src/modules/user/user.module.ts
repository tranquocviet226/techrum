import { UserController } from '@controllers/user/user.controller';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@repository/user.repository';
import { UserService } from '@services/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
  
    ConfigService,
    CustomLoggerService,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UserModule {}
