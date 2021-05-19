import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryRequest } from '@requests/category/category.request';
import { CategoryResponse } from '@response/category/category.response';
import { CategoryService } from '@services/category/category.service';
import { SERVER_PORT, SWAGGER_MSG } from '@utils/constant';

@ApiTags('Category Controller')
@Controller(SERVER_PORT.concat('catalog/categories'))
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('')
  @ApiOkResponse({
    status: 200,
    type: CategoryResponse,
    description: SWAGGER_MSG.CATEGORY_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.CATEGORY_FAIL })
  findAll(): Promise<CategoryResponse> {
    return this.categoryService.findAll();
  }

  @Post('')
  @ApiOkResponse({
    status: 200,
    type: CategoryResponse,
    description: SWAGGER_MSG.CATEGORY_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.CATEGORY_FAIL })
  create(@Body() categoryRequest: CategoryRequest): Promise<CategoryResponse> {
    return this.categoryService.createCategory(categoryRequest);
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: CategoryResponse,
    description: SWAGGER_MSG.CATEGORY_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.CATEGORY_FAIL })
  findOne(@Param('id') id: string): Promise<CategoryResponse> {
    return this.categoryService.findOne(id);
  }
}
