import { PostEntity } from '@entities/post.entity';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { PostRepository } from '@repository/post.repository';
import { PostRequest } from '@requests/post/post.request';
import { PostResponse } from '@response/post/post.response';
import { BaseService } from '@services/base.service';
import { PostFactoryService } from './post.factory.service';

@Injectable()
export class PostService extends BaseService<PostEntity, PostRepository> {
  constructor(
    repository: PostRepository,
    logger: CustomLoggerService,
    private readonly postFactoryService: PostFactoryService,
  ) {
    super(repository, logger);
  }

  async findAll(): Promise<PostResponse> {
    try {
      const post = await this.repository
        .createQueryBuilder('post')
        .leftJoinAndSelect('post.categories', 'categories')
        .getMany();
      const response = new PostResponse(true, 200, undefined, post);
      return response;
    } catch (error) {
      const code = HttpStatus.FORBIDDEN;
      const response = new PostResponse(
        false,
        code,
        [{ code: -1, message: error.message }],
        undefined,
      );
      return response;
    }
  }

  async findByCategory(category_id?: string): Promise<PostResponse> {
    try {
      const post = await this.repository
        .createQueryBuilder('post')
        .innerJoinAndSelect(
          'post.categories',
          'categories',
          'categories.id = :id',
          { id: category_id },
        )
        .getMany();
      const response = new PostResponse(true, 200, undefined, post);

      return response;
    } catch (error) {
      const code = HttpStatus.FORBIDDEN;
      const response = new PostResponse(
        false,
        code,
        [{ code: -1, message: error.message }],
        undefined,
      );
      return response;
    }
  }

  async createPost(postRequest: PostRequest): Promise<PostResponse> {
    try {
      const post = await this.postFactoryService.postCreate(postRequest);
      await this.repository.save(post);
      const response = new PostResponse(true, 200, undefined, post);
      return response;
    } catch (error) {
      const code = HttpStatus.FORBIDDEN;
      const response = new PostResponse(
        true,
        code,
        [{ code: -1, message: error.message }],
        undefined,
      );
      return response;
    }
  }
}
