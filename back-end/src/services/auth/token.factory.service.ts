import { UserEntity } from '@entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';

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
      throw new UnauthorizedException('Username or password is incorrect');
    }
    // system using bcrypt of laravel
    //if want compare for bcrypt of nodejs using code bellow !
    const currentPasswordHash = user.password.replace('$2y$', '$2a$');

    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
      throw new UnauthorizedException('Username or password is incorrect');
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
        expiresIn: this.configService.get<string>('time_to_life'),
      }),
      expiresIn: this.getTimeExpiresIn(),
    };
  }

  getTimeExpiresIn(): number {
    const timeToLife =
      parseInt(this.configService.get<string>('time_to_life')) | 30;
    const today = new Date();
    today.setDate(today.getDate() + timeToLife);
    return today.getTime();
  }
}
