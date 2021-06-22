import { JwtAuthGuard } from '@controllers/auth/jwt.guard';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostResponse } from '@response/post/post.response';
import { UserService } from '@services/user/user.service';

@ApiTags('User Controller')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: "Success",
  })
  @ApiResponse({ status: 401, description: "Failure" })
  deletePost(@Request() req: any): Promise<PostResponse> {
    const userId = req?.user?.id;
    return this.userService.getUserPost(userId);
  }
}

