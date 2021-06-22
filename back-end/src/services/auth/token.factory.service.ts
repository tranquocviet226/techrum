import { UserEntity } from '@entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from '@response/auth/login.response';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class TokenFactoryService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException(
        new LoginResponse(
          false,
          401,
          [{ code: -1, message: 'Username or password is incorrect' }],
          undefined,
        ),
      );
    }
    //if want compare for bcrypt of nodejs using code bellow !
    const currentPasswordHash = user.password.replace('$2y$', '$2a$');

    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
      throw new UnauthorizedException(
        new LoginResponse(
          false,
          401,
          [{ code: -1, message: 'Username or password is incorrect' }],
          undefined,
        ),
      );
    }

    return user;
  }

  async generateJwtToken(
    user: UserEntity,
  ): Promise<{ accessToken: string; expiresIn: number }> {
    const payload = {
      userId: user.id,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: parseInt(this.configService.get<string>('time_to_life')) || 2592000,
      }),
      expiresIn: this.getTimeExpiresIn(),
    };
  }

  getTimeExpiresIn(): number {
    const date = parseInt(this.configService.get<string>('time_to_life')) || 2592000
    return date;
  }
}
