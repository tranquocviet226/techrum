import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequest {
  private _email: string;
  private _firstName: string;
  private _lastName: string;
  private _password: string;
  private _permissions: string;
  private _lastLogin: Date;
  private _createdAt: string;
  private _updatedAt: string;

  constructor(
    _email: string,
    _firstName: string,
    _lastName: string,
    _password: string,
    _permissions: string,
    _lastLogin: Date,
    _createdAt: string,
    _updatedAt: string,
  ) {
    this._email = _email;
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._password = _password;
    this._permissions = _permissions;
    this._lastLogin = _lastLogin;
    this._createdAt = _createdAt;
    this._updatedAt = _updatedAt;
  }

  @ApiProperty()
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  @ApiProperty()
  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  @ApiProperty()
  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  @ApiProperty()
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  @ApiProperty()
  get permissions(): string {
    return this._permissions;
  }

  set permissions(value: string) {
    this._permissions = value;
  }

  @ApiProperty()
  get lastLogin(): Date {
    return this._lastLogin;
  }

  set lastLogin(value: Date) {
    this._lastLogin = value;
  }

  @ApiProperty()
  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  @ApiProperty()
  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }
}
