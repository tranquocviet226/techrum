import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostParams } from '@requests/post/post.params';
import { PostRequest } from '@requests/post/post.request';
import { PostResponse } from '@response/post/post.response';
import { PostService } from '@services/post/post.service';
import { SWAGGER_MSG } from '@utils/constant';

@ApiTags('Post Controller')
@Controller('catalog/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  findAll(@Query() query?: PostParams): Promise<PostResponse> {
    return query.category_id
      ? this.postService.findByCategory(query)
      : this.postService.findAll(query);
  }

  @Post('')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  createPost(@Body() postRequest: PostRequest): Promise<PostResponse> {
    return this.postService.createPost(postRequest);
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  postDetail(@Param('id') id: string): Promise<PostResponse> {
    return this.postService.findOne(id);
  }
}
