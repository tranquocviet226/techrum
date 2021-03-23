import { AuthModule } from '@modules/auth.module';
import { DatabaseModule } from '../database/database.module';
import { LoggerModule } from '../logger/logger.module';

export default [DatabaseModule,LoggerModule,AuthModule];