import { IsNumber } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ManyToMany } from 'typeorm/index';
import { CategoryEntity } from './category.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'posts' })
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'content', type: "longtext" })
  content: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'sort_description' })
  sort_description: string;

  @Column({ name: 'background_url' })
  background_url: string;

  @Column({ name: 'background_name' })
  background_name: string;

  @Column({ name: 'views', default: 0 })
  views: number;

  @Column({ name: 'author', default: 'admin' })
  author: string;

  @Unique(['slug'])
  @Column()
  slug: string;

  @Column({ name: 'is_active' })
  @IsNumber({}, { message: 'Incorrect value' })
  is_active: number;

  @CreateDateColumn({
    nullable: true,
    name: 'created_at',
  })
  created_at: Date;

  @UpdateDateColumn({
    nullable: true,
    name: 'updated_at',
  })
  updated_at: Date;

  @ManyToMany(() => CategoryEntity, { cascade: true })
  @JoinTable({
    name: 'post_category',
    joinColumn: {
      name: 'post_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  categories: CategoryEntity[];

  @ManyToOne(() => UserEntity, user => user.posts)
  user: UserEntity;

  constructor(partial: Partial<PostEntity>) {
    super();
    Object.assign(this, partial);
  }
}
