import { RoleEntity } from '@entities/role.entity';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, Length } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { JoinTable, ManyToMany } from 'typeorm/index';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(['email'])
  @Column()
  @IsEmail({}, { message: 'Incorrect email' })
  email: string;

  @Column({ name: 'first_name' })
  @Length(3, 10, {
    message:
      'The firstName must be at least 3 but not longer than 10 characters',
  })
  firstName: string;

  @Column({ name: 'last_name' })
  @Length(3, 10, {
    message:
      'The lastName must be at least 3 but not longer than 10 characters',
  })
  lastName: string;

  @Exclude()
  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'permissions' })
  permissions: string;

  @Column({ name: 'last_login', type: 'timestamp' })
  lastLogin: Date;

  @CreateDateColumn({
    nullable: true,
    name: 'created_at',
  })
  createdAt: string;

  @UpdateDateColumn({
    nullable: true,
    name: 'updated_at',
  })
  updatedAt: string;

  @ManyToMany(type => RoleEntity, { cascade: true })
  @JoinTable({
    name: 'user_roles',
    joinColumn: {
      name: 'users',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'roles',
      referencedColumnName: 'id',
    },
  })
  roles: RoleEntity[];

  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }
  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
