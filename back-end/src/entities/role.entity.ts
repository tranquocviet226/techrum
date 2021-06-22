import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { PermissionEntity } from './permission.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'roles' })
export class RoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(['name'])
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(
    () => UserEntity,
    user => user.roles,
  )
  users: UserEntity[];

  @ManyToMany(
    () => PermissionEntity,
    permission => permission.roles,
  )
  permission: PermissionEntity[];

  constructor(partial: Partial<RoleEntity>) {
    super();
    Object.assign(this, partial);
  }
}
