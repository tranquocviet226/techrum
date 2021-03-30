import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryResponse } from '@response/category/category.response';
import { CategoryService } from '@services/category/category.service';
import { SWAGGER_MSG } from '@utils/constant';

@ApiTags('Category Controller')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('list')
  @ApiOkResponse({
    status: 200,
    type: CategoryResponse,
    description: SWAGGER_MSG.CATEGORY_SUCCESS,
  })
  @ApiResponse({ status: 401, description: SWAGGER_MSG.CATEGORY_FAIL })
  findAll(): Promise<CategoryResponse[]> {
    return this.categoryService.findAll();
  }
}
