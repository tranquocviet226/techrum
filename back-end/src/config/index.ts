import appConfig from '@config/app.config';
import databaseConfig from '@config/database.config';
import swaggerConfig from '@config/swagger.config';
import authConfig from '@config/./auth.config';

export default [appConfig, authConfig, swaggerConfig, databaseConfig];
