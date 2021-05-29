import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity({ name: 'permissions' })
export class PermissionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(['name'])
  @Column()
  name: string;

  @ManyToMany(
    type => RoleEntity,
    role => role.permission,
  )
  roles: RoleEntity[];

  constructor(partial: Partial<RoleEntity>) {
    super();
    Object.assign(this, partial);
  }
}
