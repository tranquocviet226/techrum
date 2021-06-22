import { IsNumber } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { JoinColumn, ManyToMany } from 'typeorm/index';
import { PostEntity } from './post.entity';

@Entity({ name: 'categories' })
@Tree('materialized-path')
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(['slug'])
  @Column()
  slug: string;

  @Column()
  @Unique(['title'])
  title: string;

  @Column()
  color: string

  @Column({nullable: true})
  background_url: string

  @TreeParent()
  parent: CategoryEntity;

  @TreeChildren()
  sub_category: CategoryEntity[];

  @Column({nullable: true, default: 0})
  @IsNumber({}, { message: 'Incorrect value' })
  position: number;

  @Column({ name: 'is_searchable', nullable: true, default: 1 })
  @IsNumber({}, { message: 'Incorrect value' })
  is_searchable: number;

  @Column({ name: 'is_active', nullable: true, default: 1 })
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
  @JoinColumn({
    name: 'id',
  })
  categories: CategoryEntity[];

  @ManyToMany(
    () => PostEntity,
    posts => posts.categories,
  )
  posts: PostEntity[];

  constructor(partial: Partial<CategoryEntity>) {
    super();
    Object.assign(this, partial);
  }
}
