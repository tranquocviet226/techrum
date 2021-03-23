import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'roles'})
export class RoleEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  permissions: string

  constructor(partial: Partial<RoleEntity>) {
    super()
    Object.assign(this, partial)
  }

}