import { IsNumber } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
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

  @Column({ name: 'label' })
  label: string;

  @Column({ name: 'content' })
  content: string;

  @Unique(['slug'])
  @Column()
  slug: string;

  @Column({ name: 'category_id' })
  category_id: string;

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

  @ManyToMany(type => CategoryEntity, { cascade: true })
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
  category: CategoryEntity[];

  @ManyToMany(type => UserEntity, { cascade: true })
  @JoinTable({
    name: 'post_user',
    joinColumn: {
      name: 'post_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  user: UserEntity[];

  constructor(partial: Partial<PostEntity>) {
    super();
    Object.assign(this, partial);
  }
}
