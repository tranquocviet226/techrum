import { CategoryEntity } from '@entities/category.entity';
import { CustomLoggerService } from '@logger/custom.logger.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { CategoryRepository } from '@repository/category.repository';
import { CategoryRequest } from '@requests/category/category.request';
import { CategoryResponse } from '@response/category/category.response';
import { BaseService } from '@services/base.service';
import { CategoryFactoryService } from '@services/category/category.factory.service';
import { validate } from 'class-validator';

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

  async findAll(): Promise<CategoryResponse[]> {
    const category = await this.repository.find();
    const categoryResponse = await this.categoryFactoryService.factoryCategory(
      category,
    );

    return categoryResponse;
  }

  async createCategory(
    categoryRequest: CategoryRequest,
  ): Promise<CategoryResponse> {
    const {
      parentId,
      slug,
      position,
      isSearchable,
      isActive,
      createdAt,
      updatedAt,
    } = categoryRequest;

    const dataCategory = new CategoryEntity({
      parentId: parentId,
      slug: slug,
      position: position,
      isSearchable: isSearchable,
      isActive: isActive,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });

    // Validatetion
    const errors = await validate(dataCategory);
    if (errors.length > 0) {
      const code = HttpStatus.FORBIDDEN;
      const message = 'error';

      return new CategoryResponse(false, code, message, errors);
    } else {
      try {
        const data = await this.repository.create(dataCategory);
        await this.repository.save(data);
        const code = HttpStatus.OK;
        const message = 'success';

        return new CategoryResponse(true, code, message, data);
      } catch (error) {
        const code = HttpStatus.FORBIDDEN;
        const message = 'error';

        return new CategoryResponse(
          false,
          code,
          message,
          error?.message ?? error,
        );
      }
    }
  }
}
