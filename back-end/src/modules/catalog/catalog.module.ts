import { CategoryController } from '@controllers/category/category.controller';
import { PostController } from '@controllers/post/post.controller';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from '@repository/post.repository';
import { UserRepository } from '@repository/user.repository';
import { CategoryFactoryService } from '@services/category/category.factory.service';
import { CategoryService } from '@services/category/category.service';
import { PostFactoryService } from '@services/post/post.factory.service';
import { PostService } from '@services/post/post.service';
import { UserService } from '@services/user/user.service';
import { CategoryRepository } from 'src/repository/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepository, PostRepository, UserRepository]),
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
  controllers: [CategoryController, PostController],
  providers: [
    CategoryService,
    CategoryFactoryService,
    PostService,
    PostFactoryService,
    ConfigService,
    UserService
  ],
  exports: [TypeOrmModule],
})
export class CatalogModule {}
