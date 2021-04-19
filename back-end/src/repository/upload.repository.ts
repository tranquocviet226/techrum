import { PostEntity } from '@entities/post.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(PostEntity)
export class UploadRepository extends Repository<PostEntity> {}
