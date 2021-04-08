import { CategoryEntity } from '@entities/category.entity';
import { Injectable } from '@nestjs/common';
import { CategoryResponse } from '@response/category/category.response';

@Injectable()
export class CategoryFactoryService {
  async factoryCategory(
    category: CategoryEntity[],
  ): Promise<CategoryResponse[]> {
    let categoryArray = [];
    for (let item of category) {
      const categoryItem = {
        id: item.id,
        parent_id: item.parent_id,
        slug: item.slug,
      };
      categoryArray.push(categoryItem);
    }
    return categoryArray;
  }
}
