import { DatabaseModule } from '@database/database.module';
import { LoggerModule } from '@logger/logger.module';
import { AuthModule } from '@modules/auth.module';
import { CatalogModule } from '@modules/catalog/catalog.module';
import { RoleModule } from './role.module';
import { UploadModule } from './upload.module';
import { UserModule } from './user/user.module';

export default [
  DatabaseModule,
  LoggerModule,
  AuthModule,
  CatalogModule,
  UploadModule,
  RoleModule,
  UserModule
];
