import { ApiProperty } from '@nestjs/swagger';

export class LoginResponse {
  @ApiProperty()
  access_token: string;
  @ApiProperty()
  expires_in: number;
  @ApiProperty()
  token_type: string;

  constructor(accessToken: string, expiresIn: number, tokenType: string) {
    this.access_token = accessToken;
    this.expires_in = expiresIn;
    this.token_type = tokenType;
  }
}
