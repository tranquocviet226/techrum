import { PostEntity } from '@entities/post.entity';
import { UserEntity } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@repository/category.repository';
import { UserRepository } from '@repository/user.repository';
import { PostBody, PostRequest } from '@requests/index';

@Injectable()
export class PostFactoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private userRepository: UserRepository,
  ) {}

  async postCreate(
    postRequest: PostRequest,
    userId: number,
  ): Promise<PostEntity> {
    const { category_id } = postRequest;
    try {
      const categories = await this.categoryRepository.findByIds(category_id);
      const post = new PostEntity(postRequest);
      const user = await this.userRepository.findOne(userId);
      post.categories = categories;
      post.author = user.fullName;
      post.user = user;
      return post;
    } catch (error) {
      const post = new PostEntity(error);
      return post;
    }
  }
}
