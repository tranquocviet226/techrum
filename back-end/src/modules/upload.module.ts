import { UploadController } from '@controllers/upload.controller';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadRepository } from '@repository/upload.repository';
import { UploadService } from '@services/upload/upload.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UploadRepository]),
    ConfigService,
    CustomLoggerService,
  ],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [TypeOrmModule],
})
export class UploadModule {}
