import { ApiProperty } from '@nestjs/swagger';

export interface SortByPost {
  target: string;
  order: string;
}

export interface ConditionPost {
    target: string;
    operator: string;
    value: string;
}

export default class PostBody {
  private _category_id?: number;
  private _type?: string;
  private _sort_by?: SortByPost;
  private _condition?: ConditionPost;
  private _total_result?: number;
  private _page?: number;

  constructor(
    _category_id?: number,
    _type?: string,
    _sort_by?: SortByPost,
    _condition?: ConditionPost,
    _total_result?: number,
    _page?: number,
  ) {
    this._category_id = _category_id;
    this._type = _type;
    this._sort_by = _sort_by;
    this._condition = _condition;
    this._total_result = _total_result;
    this._page = _page;
  }

  @ApiProperty({ required: false })
  get total_result(): number {
    return this._total_result;
  }
  set total_result(value: number) {
    this._total_result = value;
  }

  @ApiProperty({ required: false })
  get page(): number {
    return this._page;
  }
  set page(value: number) {
    this._page = value;
  }

  @ApiProperty({ required: false })
  get category_id(): number {
    return this._category_id;
  }
  set category_id(value: number) {
    this._category_id = value;
  }

  @ApiProperty({ required: false })
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }

  @ApiProperty({ required: false })
  get sort_by(): any {
    return this._sort_by;
  }
  set sort_by(value: any) {
    this._sort_by = value;
  }

  @ApiProperty({ required: false })
  get condition(): ConditionPost {
    return this._condition;
  }
  set condition(value: ConditionPost) {
    this._condition = value;
  }
}
