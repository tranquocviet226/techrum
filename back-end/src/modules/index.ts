import { DatabaseModule } from '@database/database.module';
import { LoggerModule } from '@logger/logger.module';
import { AuthModule } from '@modules/auth.module';
import { CategoryModule } from '@modules/category.module';

export default [DatabaseModule, LoggerModule, AuthModule, CategoryModule];
