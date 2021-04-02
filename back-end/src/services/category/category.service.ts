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

  async findAll(): Promise<CategoryResponse> {
    try {
      const category = await this.repository.find();
      const response = new CategoryResponse(true, 200, 'success', category);

      return response;
    } catch (error) {
      const code = HttpStatus.NOT_FOUND;
      const message = 'error';
      const response = new CategoryResponse(false, code, message, error);

      return response;
    }
  }

  async createCategory(
    categoryRequest: CategoryRequest,
  ): Promise<CategoryResponse> {
    const {
      parent_id,
      slug,
      position,
      isSearchable,
      is_active,
      created_at,
      updated_at,
    } = categoryRequest;

    const dataCategory = new CategoryEntity({
      parentId: parent_id,
      slug: slug,
      position: position,
      isSearchable: isSearchable,
      isActive: is_active,
      createdAt: created_at,
      updatedAt: updated_at,
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
