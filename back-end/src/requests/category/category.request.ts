import { ApiProperty } from '@nestjs/swagger';

export class CategoryRequest {
  private _parentId: number;
  private _slug: string;
  private _position: number;
  private _isSearchable: number;
  private _isActive: number;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    _parentId: number,
    _slug: string,
    _position: number,
    _isSearchable: number,
    _isActive: number,
    _createdAt: Date,
    _updatedAt: Date,
  ) {
    this._parentId = _parentId;
    this._slug = _slug;
    this._position = _position;
    this._isSearchable = _isSearchable;
    this._isActive = _isActive;
    this._createdAt = _createdAt;
    this._updatedAt = _updatedAt;
  }

  @ApiProperty()
  get parentId(): number {
    return this._parentId;
  }

  set parentId(value: number) {
    this._parentId = value;
  }

  @ApiProperty()
  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  @ApiProperty()
  get position(): number {
    return this._position;
  }

  set position(value: number) {
    this._position = value;
  }

  @ApiProperty()
  get isSearchable(): number {
    return this._isSearchable;
  }

  set isSearchable(value: number) {
    this._isSearchable = value;
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
