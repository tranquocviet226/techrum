import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseResponse } from '@response/base.response';
import { RoleService } from '@services/role/role.service';
import { SWAGGER_MSG } from '@utils/constant';
import { UserRole } from 'src/interface/role/role.interface';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/role.guard';
import { hasRoles } from '../decorators/roles.decorator';

@ApiTags('Role Controller')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @hasRoles(UserRole.ADMIN, UserRole.ROOT)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('')
  @ApiOkResponse({
    status: 200,
    type: BaseResponse,
    description: SWAGGER_MSG.AUTH_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.AUTH_FAIL })
  async register(@Body() roleRequest: { role: number }): Promise<any> {
    return this.roleService.create(roleRequest);
  }
}
