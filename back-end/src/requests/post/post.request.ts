import { ApiProperty } from '@nestjs/swagger';

export class PostRequest {
  private _label: string;
  private _content: string;
  private _slug: string;
  private _categoryId: number;
  private _isActive: number;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    _label: string,
    _content: string,
    _slug: string,
    _categoryId: number,
    _isActive: number,
    _createdAt: Date,
    _updatedAt: Date,
  ) {
    this._label = _label;
    this._content = _content;
    this._slug = _slug;
    this._categoryId = _categoryId;
    this._isActive = _isActive;
    this._createdAt = _createdAt;
    this._updatedAt = _updatedAt;
  }

  @ApiProperty()
  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  @ApiProperty()
  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  @ApiProperty()
  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  @ApiProperty()
  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }

  @ApiProperty()
  get isActive(): number {
    return this._isActive;
  }

  set isActive(value: number) {
    this._isActive = value;
  }

  @ApiProperty()
  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  @ApiProperty()
  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }
}
