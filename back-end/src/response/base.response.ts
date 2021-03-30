import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse {
  @ApiProperty()
  status: boolean;
  @ApiProperty()
  code: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: object;

  constructor(status: boolean, code: number, message: string, data: object) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
