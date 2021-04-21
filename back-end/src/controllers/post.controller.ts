import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostRequest, PostBody, PostParams } from '@requests/index';
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

  @Post('find')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  find(@Body() postBody: PostBody): Promise<PostResponse> {
    return this.postService.find(postBody);
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

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  deletePost(@Param('id') id: string): Promise<PostResponse> {
    return this.postService.deleteOne(id);
  }

  @Put(':id')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  updatePost(
    @Param('id') id: string,
    @Body() postRequest: PostRequest,
  ): Promise<PostResponse> {
    return this.postService.putOne(id, postRequest);
  }
}
