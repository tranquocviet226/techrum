import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponse {

  @ApiProperty()
  status : string;
  @ApiProperty()
  message : string;
  @ApiProperty()
  code: number;

  constructor(status: string, code: number, message: string ) {
    this.status = status;
    this.code = code;
    this.message = message;
  }
}
