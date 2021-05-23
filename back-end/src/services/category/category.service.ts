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
      return new CategoryResponse(
        false,
        code,
        errors.map((error, index) => ({
          code: index,
          message: error.toString(),
        })),
        undefined,
      );
    } else {
      try {
        const data = await this.repository.create(dataCategory);
        await this.repository.save(data);
        const code = HttpStatus.OK;
        return new CategoryResponse(true, code, undefined, data);
      } catch (error) {
        return new CategoryResponse(
          false,
          HttpStatus.FORBIDDEN,
          [{ code: -1, message: error.message }],
          undefined,
        );
      }
    }
  }

  async findOne(id: string): Promise<CategoryResponse> {
    try {
      const category = await this.repository.findOne(id);
      if (category) {
        const result = await getTreeRepository(
          CategoryEntity,
        ).findDescendantsTree(category);
        return new CategoryResponse(true, 200, undefined, result);
      } else {
        return new CategoryResponse(
          false,
          HttpStatus.FORBIDDEN,
          [{ code: -1, message: 'Not Found Category ID' }],
          undefined,
        );
      }
    } catch (error) {
      const response = new CategoryResponse(
        false,
        HttpStatus.FORBIDDEN,
        [{ code: -1, message: error.message }],
        undefined,
      );
      return response;
    }
  }

  async findOneAndupdate(
    id: number,
    categoryRequest: CategoryRequest,
  ): Promise<CategoryResponse> {
    try {
      const dataCategory = await this.categoryFactoryService.createCategoryTree(
        categoryRequest,
      );

      await this.repository
        .createQueryBuilder()
        .update('categories')
        .set(dataCategory)
        .where('id = :id', { id: id })
        .execute();

      const response = new CategoryResponse(true, 200, undefined, {
        message: 'Update category success!',
      });
      return response;
    } catch (error) {
      const response = new CategoryResponse(
        false,
        HttpStatus.FORBIDDEN,
        [{ code: -1, message: error.message }],
        undefined,
      );
      return response;
    }
  }

  async findOneAndDelete(id: number): Promise<CategoryResponse> {
    try {
      const category = await this.repository.findOne(id);

      const childrenTree = await getTreeRepository(
        CategoryEntity,
      ).findDescendants(category);

      const idChildren: number[] = [];
      childrenTree.map(item => {
        idChildren.push(item.id);
      });

      childrenTree
        .reverse()
        .map(async item => await this.repository.delete(item));

      const response = new CategoryResponse(true, 200, undefined, {
        message: 'Delete Category tree success!',
      });
      return response;
    } catch (error) {
      const response = new CategoryResponse(
        false,
        HttpStatus.FORBIDDEN,
        [{ code: -1, message: error.message }],
        undefined,
      );
      return response;
    }
  }
}
