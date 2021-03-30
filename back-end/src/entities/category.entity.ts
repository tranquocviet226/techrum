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

  @Unique(['parent_id'])
  @Column({ name: 'parent_id' })
  parentId: number;

  @Column()
  slug: string;

  @Column()
  position: number;

  @Column({ name: 'is_searchable' })
  isSearchable: boolean;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @CreateDateColumn({
    default: null,
    nullable: true,
    name: 'created_at',
  })
  createdAt: string;

  @UpdateDateColumn({
    default: null,
    nullable: true,
    name: 'updated_at',
  })
  updatedAt: string;

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
