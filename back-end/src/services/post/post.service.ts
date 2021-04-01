import { PostEntity } from '@entities/post.entity';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { PostRepository } from '@repository/post.repository';
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
      const post = await this.repository.find();
      const response = new PostResponse(true, 200, 'success', post);

      return response;
    } catch (error) {
      const code = HttpStatus.FORBIDDEN;
      const message = 'error';
      const response = new PostResponse(false, code, message, error);

      return response;
    }
  }
}
