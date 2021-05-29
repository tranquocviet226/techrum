import { PostEntity } from '@entities/post.entity';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { PostRepository } from '@repository/post.repository';
import { UserRepository } from '@repository/user.repository';
import { PostBody, PostParams, PostRequest } from '@requests/index';
import { PostResponse } from '@response/post/post.response';
import { BaseService } from '@services/base.service';
import { deleteFileFs } from '@utils/function';
import { PostFactoryService } from './post.factory.service';

@Injectable()
export class PostService extends BaseService<PostEntity, PostRepository> {
  constructor(
    repository: PostRepository,
    logger: CustomLoggerService,
    private readonly postFactoryService: PostFactoryService,
    private userRepository: UserRepository,
  ) {
    super(repository, logger);
  }

  async find(body?: PostBody): Promise<PostResponse> {
    try {
      const take = body.total_result || 10;
      const skip = body.page ? body.page - 1 : 0;
      const type = body.type || '';
      const category_id = body.category_id || null;
      const sort_target = body?.sort_by?.target || 'created_at';
      const sort_order = body?.sort_by?.order || 'DESC';
      const condition_target = body?.condition?.target || 'created_at';
      const condition_operator = body?.condition?.operator || '<=';
      const condition_value = body?.condition?.value || new Date();

      const order = `post.${sort_target}`;
      const condition = `post.${condition_target} ${condition_operator} :value`;

      if (type === 'rand') {
        const post = await this.repository
          .createQueryBuilder('post')
          .leftJoinAndSelect('post.categories', 'categories')
          .take(take)
          .skip(skip)
          .orderBy('RAND()')
          .getMany();

        const response = new PostResponse(true, 200, undefined, post);
        return response;
      } else {
        const query = await this.repository
          .createQueryBuilder('post')
          .leftJoinAndSelect('post.categories', 'categories')
          .take(take)
          .skip(skip)
          .orderBy(order, sort_order);

        if (category_id) {
          query.andWhere('categories.id = :id', { id: category_id });
        }

        if (body?.condition) {
          query.andWhere(condition, { value: condition_value });
        }

        const posts = await query.getMany();
        const response = new PostResponse(true, 200, undefined, posts);
        return response;
      }
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

  async findAll(query?: PostParams): Promise<PostResponse> {
    const take: number = query.total_result || 10;
    const skip: number = query.page ? query.page - 1 : 0;
    try {
      const post = await this.repository
        .createQueryBuilder('post')
        .leftJoinAndSelect('post.categories', 'categories')
        .take(take)
        .skip(skip)
        .orderBy('post.created_at', 'DESC')
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
        .orderBy('post.created_at', 'DESC')
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

  async createPost(
    postRequest: PostRequest,
    userId: number,
  ): Promise<PostResponse> {
    try {
      const post = await this.postFactoryService.postCreate(
        postRequest,
        userId,
      );
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
      post.views = post.views + 1;
      post.save();
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

  async putOne(
    id: string,
    userId: number,
    postRequest: PostRequest,
  ): Promise<PostResponse> {
    try {
      const oldPost = await this.repository.findOne(id, {
        relations: ['user'],
      });
      console.log(userId)
      if (oldPost && oldPost.user.id === userId) {
        const post = await this.postFactoryService.postCreate(
          postRequest,
          oldPost.user.id,
        );
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

  async deleteOne(id: string, userId: number): Promise<PostResponse> {
    const code = HttpStatus.FORBIDDEN;
    try {
      const post = await this.repository.findOne(id, { relations: ['user'] });
      if (post && post.user.id === userId) {
        deleteFileFs(post.background_url);
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
