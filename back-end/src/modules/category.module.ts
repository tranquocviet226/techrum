import { CategoryController } from '@controllers/category.controller';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryFactoryService } from '@services/category/category.factory.service';
import { CategoryService } from '@services/category/category.service';
import { CategoryRepository } from 'src/repository/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepository]),
    ConfigService,
    CustomLoggerService,
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryFactoryService],
  exports: [TypeOrmModule],
})
export class CategoryModule {}
