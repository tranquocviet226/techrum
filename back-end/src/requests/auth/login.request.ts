import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
   private _username: string;
   private _password: string;

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
  }
  @ApiProperty()
  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }
  @ApiProperty()
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}