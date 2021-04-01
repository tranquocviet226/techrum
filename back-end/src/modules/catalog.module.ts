import { CategoryController } from '@controllers/category.controller';
import { PostController } from '@controllers/post.controller';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from '@repository/post.repository';
import { CategoryFactoryService } from '@services/category/category.factory.service';
import { CategoryService } from '@services/category/category.service';
import { PostFactoryService } from '@services/post/post.factory.service';
import { PostService } from '@services/post/post.service';
import { CategoryRepository } from 'src/repository/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepository, PostRepository]),
    ConfigService,
    CustomLoggerService,
  ],
  controllers: [CategoryController, PostController],
  providers: [
    CategoryService,
    CategoryFactoryService,
    PostService,
    PostFactoryService,
  ],
  exports: [TypeOrmModule],
})
export class CatalogModule {}
