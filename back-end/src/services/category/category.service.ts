import { CategoryEntity } from '@entities/category.entity';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { CategoryRepository } from '@repository/category.repository';
import { CategoryRequest } from '@requests/category/category.request';
import { CategoryResponse } from '@response/category/category.response';
import { BaseService } from '@services/base.service';
import { CategoryFactoryService } from '@services/category/category.factory.service';
import { validate } from 'class-validator';
import { getTreeRepository } from 'typeorm';

@Injectable()
export class CategoryService extends BaseService<
  CategoryEntity,
  CategoryRepository
> {
  constructor(
    repository: CategoryRepository,
    logger: CustomLoggerService,
    private readonly categoryFactoryService: CategoryFactoryService,
  ) {
    super(repository, logger);
  }

  async findAll(): Promise<CategoryResponse> {
    try {
      const categories = await this.repository.find();
      const targetItem = categories[0];

      if (targetItem) {
        const childItems = await getTreeRepository(CategoryEntity).findTrees();
        return new CategoryResponse(true, 200, undefined, childItems);
      } else {
        const result = await getTreeRepository(CategoryEntity).findRoots();
        return new CategoryResponse(true, 200, undefined, result);
      }
    } catch (error) {
      const code = HttpStatus.NOT_FOUND;
      const message = 'error';
      const response = new CategoryResponse(
        false,
        code,
        [{ code: -1, message }],
        error,
      );

      return response;
    }
  }

  async createCategory(
    categoryRequest: CategoryRequest,
  ): Promise<CategoryResponse> {
    const dataCategory = await this.categoryFactoryService.createCategoryTree(
      categoryRequest,
    );

    // Validatetion
    const errors = await validate(dataCategory);
    if (errors.length > 0) {
      const code = HttpStatus.FORBIDDEN;
      const message = 'error';

      return new CategoryResponse(false, code, [{ code: -1, message }], errors);
    } else {
      try {
        const data = await this.repository.create(dataCategory);
        await this.repository.save(data);
        const code = HttpStatus.OK;
        const message = 'success';

        return new CategoryResponse(true, code, [{ code: -1, message }], data);
      } catch (error) {
        const code = HttpStatus.FORBIDDEN;
        const message = 'error';

        return new CategoryResponse(
          false,
          code,
          [{ code: -1, message }],
          error?.message ?? error,
        );
      }
    }
  }
}
