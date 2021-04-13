import { PostEntity } from '@entities/post.entity';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { PostRepository } from '@repository/post.repository';
import { PostParams } from '@requests/post/post.params';
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

  async findAll(query?: PostParams): Promise<PostResponse> {
    const take: number = query.total_result || 10;
    const skip: number = query.page ? query.page - 1 : 0;

    try {
      const post = await this.repository
        .createQueryBuilder('post')
        .leftJoinAndSelect('post.categories', 'categories')
        .take(take)
        .skip(skip)
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

  async findByCategory(query?: PostParams): Promise<PostResponse> {
    const take: number = query.total_result || 10;
    const skip: number = query.page ? query.page - 1 : 0;
    try {
      const post = await this.repository
        .createQueryBuilder('post')
        .innerJoinAndSelect(
          'post.categories',
          'categories',
          'categories.id = :id',
          { id: query.category_id },
        )
        .take(take)
        .skip(skip)
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

  async findOne(id: string): Promise<PostResponse> {
    try {
      const post = await this.repository
        .createQueryBuilder('post')
        .leftJoinAndSelect('post.categories', 'categories')
        .where('post.id = :id', { id: id })
        .getOne();
      const response = new PostResponse(true, 200, undefined, post ? post : {});
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

  async putOne(id: string, postRequest: PostRequest): Promise<PostResponse> {
    try {
      const oldPost = await this.repository.findOne(id);
      if (oldPost) {
        const post = await this.postFactoryService.postCreate(postRequest);
        post.id = parseInt(id);
        const updateResult = await this.repository.save(post);
        const response = new PostResponse(
          true,
          200,
          undefined,
          updateResult ? updateResult : {},
        );
        return response;
      } else {
        const response = new PostResponse(
          false,
          HttpStatus.FORBIDDEN,
          [{ code: -1, message: 'Not Found ID Post' }],
          undefined,
        );
        return response;
      }
    } catch (error) {
      const response = new PostResponse(
        false,
        HttpStatus.FORBIDDEN,
        [{ code: -1, message: error.message }],
        undefined,
      );
      return response;
    }
  }

  async deleteOne(id: string): Promise<PostResponse> {
    const code = HttpStatus.FORBIDDEN;
    try {
      const deleteResult = await this.repository.delete(id);
      if (deleteResult.affected > 0) {
        const response = new PostResponse(
          true,
          200,
          undefined,
          'Delete success!',
        );
        return response;
      } else {
        const response = new PostResponse(
          false,
          code,
          [{ code: -1, message: 'Not Found ID Post' }],
          undefined,
        );
        return response;
      }
    } catch (error) {
      const response = new PostResponse(
        false,
        code,
        [{ code: -1, message: error.message }],
        undefined,
      );
      return response;
    }
  }
}
