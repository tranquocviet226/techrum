import { RoleEntity } from '@entities/role.entity';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, Length } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { JoinTable, ManyToMany } from 'typeorm/index';
import { PostEntity } from './post.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(['email'])
  @Column()
  @IsEmail({}, { message: 'Incorrect email' })
  email: string;

  @Column({ name: 'first_name', nullable: true })
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @Column({ name: 'avatar_url', nullable: true })
  avatar_url: string;

  @Exclude()
  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'permissions', nullable: true })
  permissions: string;

  @Column({
    name: 'last_login',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
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
    name: 'users_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      // referencedColumnName: 'role_id',
    },
  })
  roles: RoleEntity[];

  @OneToMany(() => PostEntity, post => post.user)
  posts: PostEntity[];

  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }
  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
