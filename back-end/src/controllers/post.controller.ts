import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostResponse } from '@response/post/post.response';
import { PostService } from '@services/post/post.service';
import { SWAGGER_MSG } from '@utils/constant';

@ApiTags('Post Controller')
@Controller('catalog/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  findAll(): Promise<PostResponse> {
    return this.postService.findAll();
  }
}
