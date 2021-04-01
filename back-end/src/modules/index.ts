import { DatabaseModule } from '@database/database.module';
import { LoggerModule } from '@logger/logger.module';
import { AuthModule } from '@modules/auth.module';
import { CatalogModule } from '@modules/catalog.module';

export default [DatabaseModule, LoggerModule, AuthModule, CatalogModule];
