import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from '@response/base.response';

export class UserResponse extends BaseResponse<Data> {}
class Data {
  @ApiProperty()
  id: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  access_token: string;
}
