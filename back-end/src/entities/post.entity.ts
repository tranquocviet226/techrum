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
  @IsNumber({}, { message: 'Incorrect value' })
  categoryId: number;

  @Column({ name: 'is_active' })
  @IsNumber({}, { message: 'Incorrect value' })
  isActive: number;

  @CreateDateColumn({
    nullable: true,
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    nullable: true,
    name: 'updated_at',
  })
  updatedAt: Date;

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
  category: PostEntity[];

  constructor(partial: Partial<PostEntity>) {
    super();
    Object.assign(this, partial);
  }
}
