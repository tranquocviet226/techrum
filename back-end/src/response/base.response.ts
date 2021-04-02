import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse<T> {
         @ApiProperty()
         status: boolean;
         @ApiProperty()
         code: number;
         @ApiProperty()
         errors: BaseError[] | undefined;
         @ApiProperty()
         data: T | undefined;

         constructor(
           status: boolean,
           code: number,
           errors?: BaseError[],
           data?: T,
         ) {
           this.status = status;
           this.code = code;
           this.errors = errors;
           this.data = data;
         }
       }
export class BaseError {
  @ApiProperty()
  code: number;
  @ApiProperty()
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }
}
