import { PostEntity } from '@entities/post.entity';
import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@repository/category.repository';
import { PostRequest } from '@requests/post/post.request';

@Injectable()
export class PostFactoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async postCreate(postRequest: PostRequest): Promise<PostEntity> {
    const { category_id } = postRequest;
    try {
      const categories = await this.categoryRepository.findByIds(
        [category_id],
      );
      const post = new PostEntity(postRequest);
      post.categories = categories;
      return post;
    } catch (error) {
      const post = new PostEntity(error);
      return post;
    }
  }
}
