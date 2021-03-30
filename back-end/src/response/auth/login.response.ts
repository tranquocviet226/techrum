import { ApiProperty } from '@nestjs/swagger';

export class LoginResponse {
  @ApiProperty()
  accessToken: string;
  @ApiProperty()
  expiresIn: number;
  @ApiProperty()
  tokenType: string;

  constructor(accessToken: string, expiresIn: number, tokenType: string) {
    this.accessToken = accessToken;
    this.expiresIn = expiresIn;
    this.tokenType = tokenType;
  }
}
