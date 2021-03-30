import { IsNumber } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { JoinColumn, ManyToMany } from 'typeorm/index';

@Entity({ name: 'categories' })
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'parent_id' })
  @IsNumber({}, { message: 'Incorrect value' })
  parentId: number;

  @Unique(['slug'])
  @Column()
  slug: string;

  @Column()
  @IsNumber({}, { message: 'Incorrect value' })
  position: number;

  @Column({ name: 'is_searchable' })
  @IsNumber({}, { message: 'Incorrect value' })
  isSearchable: number;

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
  @JoinColumn({
    name: 'id',
  })
  category: CategoryEntity[];

  constructor(partial: Partial<CategoryEntity>) {
    super();
    Object.assign(this, partial);
  }
}
