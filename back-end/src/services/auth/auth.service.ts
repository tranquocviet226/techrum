import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RegisterRequest } from '@requests/auth/register.request';
import { LoginResponse } from '@response/auth/login.response';
import { RegisterResponse } from '@response/auth/register.response';
import { TokenFactoryService } from '@services/auth/token.factory.service';
import { AUTH_TYPE } from '@utils/constant';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenFactoryService: TokenFactoryService,
    private readonly configService: ConfigService,
  ) {}
  async login(email: string, password: string): Promise<LoginResponse> {
    const user = await this.tokenFactoryService.validateUser(email, password);
    const {
      accessToken,
      expiresIn,
    } = await this.tokenFactoryService.generateJwtToken(user);
    return new LoginResponse(true, 200, undefined, {
      access_token: accessToken,
      expires_in: expiresIn,
      token_type: AUTH_TYPE,
    });
  }

  async register(registerRequest: RegisterRequest): Promise<RegisterResponse> {
    const response = await this.userService.createUser(registerRequest);
    return new RegisterResponse(
      response.status,
      response.code,
      response.status ? undefined : [{ code: -1, message: response.message }],
      response.status ? response.message : undefined,
    );
  }
}
