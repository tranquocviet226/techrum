import { JwtAuthGuard } from '@controllers/auth/jwt.guard';
import { RolesGuard } from '@controllers/auth/role.guard';
import { hasRoles } from '@controllers/decorators/roles.decorator';
import {
  Body,
  Controller,
  Delete,
  ExecutionContext,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostRequest, PostBody, PostParams } from '@requests/index';
import { PostResponse } from '@response/post/post.response';
import { PostService } from '@services/post/post.service';
import { SWAGGER_MSG } from '@utils/constant';
import { UserRole } from 'src/interface/role/role.interface';

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

  // @hasRoles(UserRole.ROOT, UserRole.ADMIN, UserRole.EDITOR, UserRole.USER)
  @UseGuards(JwtAuthGuard)
  @Post('')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  createPost(@Body() postRequest: PostRequest, @Request() req: any): Promise<PostResponse> {
    const userId = req?.user?.id;
    return this.postService.createPost(postRequest, userId);
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

  // @hasRoles(UserRole.ROOT, UserRole.ADMIN, UserRole.EDITOR, UserRole.USER)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: PostResponse,
    description: SWAGGER_MSG.POST_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.POST_FAIL })
  deletePost(@Param('id') id: string, @Request() req: any): Promise<PostResponse> {
    const userId = req?.user?.id;
    return this.postService.deleteOne(id, userId);
  }

  @UseGuards(JwtAuthGuard)
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
    @Request() req: any,
  ): Promise<PostResponse> {
    const userId = req?.user?.id;
    return this.postService.putOne(id, userId, postRequest);
  }
}
