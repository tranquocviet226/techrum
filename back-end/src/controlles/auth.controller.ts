import { RegisterResponse } from './../response/auth/register.response';
import { Controller, Post, Body, Put } from '@nestjs/common';
import { LoginRequest } from '@request/auth/login.request';
import { LoginResponse } from '@response/auth/login.response';
import { ApiOkResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { SWAGGER_MSG } from '@utils/constant';
import { AuthService } from '@service/auth.service';
import { RegisterRequest } from '@request/auth/register.request';
import { VerifyPhoneRequest } from '@request/auth/verify-phone.request';

@ApiTags('Auth Controller')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ status: 200, type: LoginResponse, description: SWAGGER_MSG.AUTH_SUCCESS })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.AUTH_FAIL})
  async login(@Body() loginRequest: LoginRequest): Promise<LoginResponse> {
     const { username, password } = loginRequest;
     return await this.authService.login(username,password)
  }

  @Post('register')
  @ApiOkResponse({ status: 200, type: RegisterResponse, description: SWAGGER_MSG.AUTH_SUCCESS })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.AUTH_FAIL})
  async register(@Body() registerRequest: RegisterRequest): Promise<RegisterResponse> {
    const reponse = await this.authService.register(registerRequest);
    return reponse;
  }

  @Put('verify-phone')
  @ApiOkResponse({ type: LoginResponse, description: SWAGGER_MSG.AUTH_SUCCESS })
  @ApiUnauthorizedResponse({ description: SWAGGER_MSG.AUTH_FAIL})
  async verifyPhone(@Body() verifyPhoneRequest: VerifyPhoneRequest): Promise<any> {
    return null;
  }
}
