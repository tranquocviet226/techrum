import { ApiProperty } from '@nestjs/swagger';

export default class PostRequest {
  private _title: string;
  private _content: string;
  private _description: string;
  private _sort_description: string;
  private _background_url: string;
  private _views: number;
  private _slug: string;
  private _category_id: [number];
  private _is_active: number;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(
    _title: string,
    _content: string,
    _description: string,
    _sort_description: string,
    _background_url: string,
    _views: number,
    _slug: string,
    _category_id: [number],
    _is_active: number,
    _created_at: Date,
    _updated_at: Date,
  ) {
    this._title = _title;
    this._content = _content;
    this._description = _description;
    this._sort_description = _sort_description;
    this._background_url = _background_url;
    this._views = _views;
    this._slug = _slug;
    this._category_id = _category_id;
    this._is_active = _is_active;
    this._created_at = _created_at;
    this._updated_at = _updated_at;
  }

  @ApiProperty()
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  @ApiProperty()
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }

  @ApiProperty()
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }

  @ApiProperty()
  get sort_description(): string {
    return this._sort_description;
  }
  set sort_description(value: string) {
    this._sort_description = value;
  }

  @ApiProperty()
  get background_url(): string {
    return this._background_url;
  }
  set background_url(value: string) {
    this._background_url = value;
  }

  @ApiProperty()
  get views(): number {
    return this._views;
  }
  set views(value: number) {
    this._views = value;
  }

  @ApiProperty()
  get slug(): string {
    return this._slug;
  }
  set slug(value: string) {
    this._slug = value;
  }

  @ApiProperty()
  get category_id(): [number] {
    return this._category_id;
  }
  set category_id(value: [number]) {
    this._category_id = value;
  }

  @ApiProperty()
  get is_active(): number {
    return this._is_active;
  }
  set is_active(value: number) {
    this._is_active = value;
  }

  @ApiProperty()
  get created_at(): Date {
    return this._created_at;
  }
  set created_at(value: Date) {
    this._created_at = value;
  }

  @ApiProperty()
  get updated_at(): Date {
    return this._updated_at;
  }
  set updated_at(value: Date) {
    this._updated_at = value;
  }
}
