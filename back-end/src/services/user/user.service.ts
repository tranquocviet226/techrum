import { RoleEntity } from '@entities/role.entity';
import { UserEntity } from '@entities/user.entity';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '@repository/user.repository';
import { RegisterRequest } from '@requests/auth/register.request';
import { BaseResponse } from '@response/base.response';
import { BaseService } from '@services/base.service';
import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRole } from 'src/interface/role/role.interface';

@Injectable()
export class UserService extends BaseService<UserEntity, UserRepository> {
  constructor(repository: UserRepository, logger: CustomLoggerService) {
    super(repository, logger);
  }

  findOne(id: number): Observable<UserEntity> {
    return from(
      this.repository
        .createQueryBuilder('users')
        .leftJoinAndSelect('users.roles', 'roles')
        .where('users.id = :user_id', { user_id: id })
        .getOne(),
    ).pipe(
      map((user: any) => {
        return user.roles;
      }),
    );
  }

  findByEmail(email: string): Promise<UserEntity> {
    return this.repository.findOne({ where: { email: email }, cache: true });
  }

  async createUser(registerRequest: RegisterRequest): Promise<any> {
    const {
      email,
      first_name,
      last_name,
      avatar_url,
      password,
      permissions,
      last_login,
      created_at,
      updated_at,
    } = registerRequest;
    const hashedPassword = await bcrypt.hash(password, 10);
    const dataUser = new UserEntity({
      email: email,
      firstName: first_name,
      lastName: last_name,
      avatar_url: avatar_url,
      password: hashedPassword,
      permissions: permissions,
      lastLogin: last_login,
      createdAt: created_at,
      updatedAt: updated_at,
    });

    // Validation
    const errors = await validate(dataUser);
    if (errors.length > 0) {
      const objError = errors[0].constraints;
      return {
        status: false,
        message: objError[Object.keys(objError)[0]],
        code: 400,
      };
    } else {
      const user = await this.repository.findOne({
        where: { email: email },
        cache: true,
      });
      if (user) {
        return {
          status: false,
          message: 'User already exist!!!',
          code: 400,
        };
      } else {
        try {
          const data = await this.repository.create(dataUser);
          // const user = await this.repository.save(data);

          // const data2 = {
          //   ...user,
          //   roles: [selectRole1, selectRole2],
          // };
          await this.repository.save(data);

          return {
            status: true,
            message: 'Register success!!!',
            code: 200,
          };
        } catch (error) {
          console.log(error);
          return new BaseResponse(false, 400, error, undefined);
        }
      }
    }
  }

  async getUserPost(userId: number): Promise<any> {
    const user = this.repository.findOne(userId, {
      relations: ['posts'],
    });
    return user;
  }
}
