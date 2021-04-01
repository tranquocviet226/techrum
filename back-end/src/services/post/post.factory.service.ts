import { PostEntity } from '@entities/post.entity';
import { Injectable } from '@nestjs/common';
import { PostResponse } from '@response/post/post.response';

@Injectable()
export class PostFactoryService {
  async factoryPost(post: PostEntity[]): Promise<PostResponse[]> {
    const postArray = [];

    postArray.push(post);
    return postArray;
  }
}
