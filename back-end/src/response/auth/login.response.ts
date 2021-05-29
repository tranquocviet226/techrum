import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from '@response/base.response';

export class LoginResponse extends BaseResponse<Data> {}
class Data {
  @ApiProperty()
  access_token: string;
  @ApiProperty()
  expires_in: number;
  @ApiProperty()
  token_type: string;
}
