import { Module } from '@nestjs/common';
import  listModule  from '@modules/index';
import { ConfigModule } from '@nestjs/config';
import  listConfig from '@config/index';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: listConfig,
    }),
    ...listModule
    ],
})
export class AppModule {}
