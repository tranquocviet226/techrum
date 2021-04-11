import { CategoryEntity } from '@entities/category.entity';
import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@repository/category.repository';
import { CategoryRequest } from '@requests/category/category.request';

@Injectable()
export class CategoryFactoryService {
  constructor(private readonly repository: CategoryRepository) {}

  async createCategoryTree(
    categoryRequest: CategoryRequest,
  ): Promise<CategoryEntity> {
    const {
      slug,
      title,
      color,
      position,
      is_searchable,
      is_active,
      created_at,
      updated_at,
      parent_id,
    } = categoryRequest;

    const parent = await this.repository.findOne({
      where: [
        {
          id: parent_id,
        },
      ],
    });

    const dataCategory = new CategoryEntity({
      slug: slug,
      title: title,
      color: color,
      position: position,
      is_searchable: is_searchable,
      is_active: is_active,
      created_at: created_at,
      updated_at: updated_at,
      parent: parent,
    });

    return dataCategory;
  }
}
