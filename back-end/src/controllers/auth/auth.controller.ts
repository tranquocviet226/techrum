import { Body, Controller, Post, Put, Res } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginRequest } from '@requests/auth/login.request';
import { RegisterRequest } from '@requests/auth/register.request';
import { VerifyPhoneRequest } from '@requests/auth/verify-phone.request';
import { LoginResponse } from '@response/auth/login.response';
import { RegisterResponse } from '@response/auth/register.response';
import { AuthService } from '@services/auth/auth.service';
import { SWAGGER_MSG } from '@utils/constant';
import { Response } from 'express';

@ApiTags('Auth Controller')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({
    status: 200,
    type: LoginResponse,
    description: SWAGGER_MSG.AUTH_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.AUTH_FAIL })
  async login(
    @Body() loginRequest: LoginRequest,
    @Res({ passthrough: true }) response: Response,
  ): Promise<LoginResponse> {
    const { username, password } = loginRequest;
    return await this.authService.login(username, password, response);
  }

  @Post('register')
  @ApiOkResponse({
    status: 200,
    type: RegisterResponse,
    description: SWAGGER_MSG.AUTH_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.AUTH_FAIL })
  async register(
    @Body() registerRequest: RegisterRequest,
  ): Promise<RegisterResponse> {
    const reponse = await this.authService.register(registerRequest);
    return reponse;
  }

  @Put('verify-phone')
  @ApiOkResponse({ type: LoginResponse, description: SWAGGER_MSG.AUTH_SUCCESS })
  @ApiUnauthorizedResponse({ description: SWAGGER_MSG.AUTH_FAIL })
  async verifyPhone(
    @Body() verifyPhoneRequest: VerifyPhoneRequest,
  ): Promise<any> {
    return null;
  }
}
