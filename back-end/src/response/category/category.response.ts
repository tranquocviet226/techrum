import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponse {
  @ApiProperty()
  id: number;
  @ApiProperty()
  parent_id: number;
  @ApiProperty()
  slug: string;

  constructor(id: number, parent_id: number, slug: string) {
    this.id = id;
    this.parent_id = parent_id;
    this.slug = slug;
  }
}
